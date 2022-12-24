from flask import Flask, render_template, request, jsonify

#importing model pre reqs
import tensorflow_hub as hub
import tensorflow as tf
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

@app.route('/', methods=['GET'])
def hello():
    return render_template('index.html')


@app.route('/nst', methods=['POST'])
def predict():
    # URL='https://res.cloudinary.com/dfmxbcddb/image/upload/w_1000,ar_16:9,c_fill,g_auto,e_sharpen/v1662464187/xai7ynpko8ionpmtsjwv.jpg'
    # response = requests.get(URL)
    # open("instagram.jpg", "wb").write(response.content)
    data = request.get_json()
    styleImageURL=data['styleImageURL']
    reponseOne=requests.get(styleImageURL)
    open("./inputImages/Style.jpg", "wb").write(reponseOne.content)
    contentImageURL=data['contentImageURL']
    responseTwo=requests.get(contentImageURL)
    open("./inputImages/Content.jpg", "wb").write(responseTwo.content)
    
    image_path="./inputImages/Content.jpg"

    def load_image(img_path):
        img = tf.io.read_file(img_path)
        img = tf.image.decode_image(img, channels=3)
        img = tf.image.convert_image_dtype(img, tf.float32)
        img = img[tf.newaxis, :]
        return img
    
    content_image = load_image(image_path)
    style_image = load_image('./inputImages/Style.jpg')

    stylized_image = model(tf.constant(content_image), tf.constant(style_image))[0]
    stylizedName=''+str(random.randint(1,100000))+'Stylized.jpg'
    cv2.imwrite(''+stylizedName, cv2.cvtColor(np.squeeze(stylized_image)*255, cv2.COLOR_BGR2RGB))
    
    def uploadImage():
        # Upload the image and get its URL
        # ==============================

        # Upload the image.
        # Set the asset's public ID and allow overwriting the asset with new versions
        cloudinary.uploader.upload(''+stylizedName, public_id="pid"+stylizedName, overwrite=True)

        # Build the URL for the image and save it in the variable 'srcURL'
        srcURL = cloudinary.CloudinaryImage("pid"+stylizedName).build_url()

        # Log the image URL to the console. 
        # Copy this URL in a browser tab to generate the image on the fly.
        print("****2. Upload an image****\nDelivery URL: ", srcURL+".jpg", "\n")
        return srcURL

    #os.remove(''+image_path)
    
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