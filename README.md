### Abstract of the application
ARTficial, the ultimate image stylization web application. ARTficial allows users to easily register and access a wide variety of filters to give your images a unique and artistic look. With ARTficial, you can turn your ordinary photos into works of art with just a few clicks. Whether you're a professional photographer or a casual user, our user-friendly interface and easy-to-use tools make it simple to stylize your images to your exact specifications. So why wait? Sign up today and start creating stunning images with ARTficial!

### Setting up project locally
The project comprises of the following 4 solutions
- WebApp (Frontend for users created using React JS)
- Backend (Backend server running on Node, Express JS, MongoDB)
- Admin (Admin Panel created using React as well)
- ModelApi (Our model server that generates stylized images using NST)

### Dependencies:
Make sure you have node ^16.15.1 and npm ^9.1.2 installed on your computer globally from https://nodejs.org/en/download. Also, make sure you have the following packages of python installed as well:
flask
flask_cors
flask_limiter
tensorflow-hub
tensorflow
matplotlib
numpy
cv2
cloudinary
cloudinary.uploader

Also, keep notice of that you are in the right directories when running the following command for every solution. e.g. change directory to artficial.modelapi, and then run python app.py



## Run Model Server

```shell
python app.py
```
or if you are using python3

```shell
python3 app.py
```
The model server should be up and running on localhost:5000
![Screenshot 2023-07-09 at 00-51-22 Screenshot](https://github.com/abdi-z/IB-AR_Neural_Style_Transfers/assets/92116477/505f9880-8f70-4a51-859a-30d74b3b6c83)



## Run WebApp

Install packages/dependencies using:
```shell
npm install
```
After succesffuly installing all packages:
```shell
npm start
```

The web app should be up and running on localhost:3000
![Screenshot 2023-07-08 at 23-15-13 ARTficial](https://github.com/abdi-z/IB-AR_Neural_Style_Transfers/assets/92116477/e7cbdad6-70d9-440e-9bd9-0234fbe67fd1)


## Run Main Server

Install packages/dependencies using:
```shell
npm install
```
After succesffuly installing all packages:
```shell
node app.js
```
or preferably if you have nodemon installed globally
```shell
nodemon app.js
```
The main server should be up and running on localhost:4000
![Screenshot 2023-07-09 at 00-53-26 Screenshot](https://github.com/abdi-z/IB-AR_Neural_Style_Transfers/assets/92116477/2974a814-fe9b-4904-8ae8-f59cc1dfab75)



## Run Admin panel

Install packages/dependencies using:
```shell
npm install
```
After succesffuly installing all packages:
```shell
npm start
```
The admin panel should be up and running on http://localhost:3001/

![Screenshot 2023-07-09 at 00-54-55 ARTfifial Admin](https://github.com/abdi-z/IB-AR_Neural_Style_Transfers/assets/92116477/a0ff5429-5762-4966-853b-dfedc263cdb3)



### Screenshots
Following are some screenshots of the app showcasing different functional requirements

![Screenshot 2023-07-09 at 00-16-27 ARTficial](https://github.com/abdi-z/IB-AR_Neural_Style_Transfers/assets/92116477/e05d16c4-b8b7-4559-9d10-b7c74ae8dacf)
![Screenshot 2023-07-09 at 00-16-10 ARTficial](https://github.com/abdi-z/IB-AR_Neural_Style_Transfers/assets/92116477/bffa9452-4573-40eb-8759-84c04d9a49e2)
![Screenshot 2023-07-09 at 00-15-40 ARTficial](https://github.com/abdi-z/IB-AR_Neural_Style_Transfers/assets/92116477/edb6c076-b74a-4bea-bf95-de8a6b0b32e2)
![Screenshot 2023-07-09 at 00-15-14 ARTficial](https://github.com/abdi-z/IB-AR_Neural_Style_Transfers/assets/92116477/3ea92685-e0d8-4e06-85cf-7b1e22ac912e)
![Screenshot 2023-07-09 at 00-14-51 ARTficial](https://github.com/abdi-z/IB-AR_Neural_Style_Transfers/assets/92116477/85dd9c08-21be-4811-9fa6-6db161e0d322)
![Screenshot 2023-07-09 at 00-22-22 ARTfifial Admin](https://github.com/abdi-z/IB-AR_Neural_Style_Transfers/assets/92116477/f287cdbb-6aa6-4b72-b43d-42be0e73bd38)
![Screenshot 2023-07-09 at 00-22-02 ARTficial](https://github.com/abdi-z/IB-AR_Neural_Style_Transfers/assets/92116477/d7aee8c6-6af1-4031-b545-681ff78825ba)
![Screenshot 2023-07-09 at 00-17-24 ARTficial](https://github.com/abdi-z/IB-AR_Neural_Style_Transfers/assets/92116477/a5d92088-810e-4914-9575-20fa146f8eee)
