# Online-seller
LIVE LINK : https://online-seller.onrender.com

MY SHOP LINK : https://online-seller.onrender.com/users/shops/6482e67aee6ae5f774e82bb6

## DESCRIPTION

A online shopping platform in which the seller can register, and enter the information of the shop. The seller of the shop can add the Inventory and has the access
to the shop link, which they can share to any of the user, to promote there shop.

A web application which help you to create, update, delete and track your habit on daily basis. It is user specific app, which mean a user can track their habit, 
and mark it as done , or not done. The project is built using a tech stack consisting of Node.js for the server-side scripting. Express for handling HTTP requests 
and routing. MongoDB for storing and managing the data and EJS for rendering the views and templates.

# Tech Stack

Node , Express, Mongodb , EJS , javaScript , html, css

# How to setup the project on local system

  1. Clone this project
  2. Start by installing npm if you don't have it already.
  3. Navigate to Project Directory.

After reaching the project directory you have to run the following the command.
   ```` 
        npm install 
        node index.js || nodemon index.js
   ````

# Images

Sign up
![OS signUP](https://github.com/praduman2714/Online-seller/assets/66240716/e65fc178-c825-4478-b1dc-d447073b7fae)

Sign In page
![os signIN](https://github.com/praduman2714/Online-seller/assets/66240716/fe21059e-b391-4ac6-a279-fcda5b2ad85d)

Add Store Info
![os AddShop](https://github.com/praduman2714/Online-seller/assets/66240716/577e4e38-bec4-4d87-a6a8-5b1f69858fb2)

Home Page
![osHome page](https://github.com/praduman2714/Online-seller/assets/66240716/b3b93970-7c82-4efa-b320-e644318fab52)

Shop Page
![osShopSite](https://github.com/praduman2714/Online-seller/assets/66240716/de57b061-c272-4d21-82da-40832ee6fd8d)


### Folder Structure

```
Habit Tracker
    |
    |               |--->css
    |--->assets---->|--->images
    |               |---> js
    |
    |               |--->mongoose.js
    |--->config---->|
    |               |--->passport-local-Stradegy.js
    |
    |                  |-->productController.js
    |--->controllers-->|-->homeController.js
    |                  |-->userController.js
    |
    |               |-->product.js
    |--->models---->|-->store
    |               |-->buissness.js
    |
    |              
    |               |-->product.js
    |--->routes---->|-->index.js
    |               |-->userRoutes.js
    |
    |              |--->_header.ejs
    |              |--->forget_password.ejs
    |              |--->home.ejs
    |              |--->shop.ejs
    |--->views---->|--->layout.ejs
    |              |--->sign_in.ejs
    |              |--->sign_up.ejs
    |
    |-->node_modules
    |-->.gitignore
    |--> index.js
    |--> package-lock.json
    |-->package.json
    
    ````
