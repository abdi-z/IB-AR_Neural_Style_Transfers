from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
from flask_limiter import Limiter
from flask_limiter.util import get_remote_address
#importing model pre reqs
import tensorflow_hub as hub
#import tensorflow as tf
from matplotlib import pyplot as plt
import numpy as np
import cv2
import cloudinary
import cloudinary.uploader
import random
import os
import requests



model = hub.load('https://tfhub.dev/google/magenta/arbitrary-image-stylization-v1-256/2')

cloudinary.config( 
  cloud_name = "dlx4hhpw2", 
  api_key = "922417816553154", 
  api_secret = "JW8UPpruMPhzZM1MeGBWT7Lh3CE" 
)


app = Flask(__name__)
#limiter = Limiter(app, key_func=get_remote_address)
CORS(app)



@app.route('/', methods=['GET'])
def hello():
    return render_template('index.html')


@app.route('/api/v1/nst', methods=['POST'])
#@limiter.limit('10/minute', error_message="Sorry, you have exceeded the rate limit for this endpoint.")
def predict():
    data = request.get_json()
    styleImageURL=data['styleImageURL']
    reponseOne=requests.get(styleImageURL)
    open("./inputImages/Style.jpg", "wb").write(reponseOne.content)
    contentImageURL=data['contentImageURL']
    responseTwo=requests.get(contentImageURL)
    open("./inputImages/Content.jpg", "wb").write(responseTwo.content)
    
    def load_image(img_path):
        img = tf.io.read_file(img_path)
        img = tf.image.decode_image(img, channels=3)
        img = tf.image.convert_image_dtype(img, tf.float32)
        img = img[tf.newaxis, :]
        return img
    
    content_image = load_image("./inputImages/Content.jpg")
    style_image = load_image('./inputImages/Style.jpg')

    stylized_image = model(tf.constant(content_image), tf.constant(style_image))[0]
    stylizedName=''+str(random.randint(1,100000))+'Stylized.jpg'
    cv2.imwrite(''+stylizedName, cv2.cvtColor(np.squeeze(stylized_image)*255, cv2.COLOR_BGR2RGB))
    
    def uploadImage():
        cloudinary.uploader.upload(''+stylizedName, public_id="pid"+stylizedName, overwrite=True)
        srcURL = cloudinary.CloudinaryImage("pid"+stylizedName).build_url()
        print("****2. Upload an image****\nDelivery URL: ", srcURL+".jpg", "\n")
        return srcURL
    outputURL=uploadImage()
    os.remove('./inputImages/Content.jpg') #Remove the stylized image from the server
    os.remove('./inputImages/Style.jpg') #Remove the stylized image from the server
    print('The stylized image is: '+stylizedName)
    os.remove(''+stylizedName) #Remove the stylized image from the server
    toBeRet=dict()
    toBeRet['outputImage']=outputURL+".jpg"
    return jsonify(toBeRet)


if __name__=='__main__':
    app.run(port=5000, debug=True)