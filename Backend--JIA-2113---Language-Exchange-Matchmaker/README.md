# JIA-2113---Language-Exchange-Matchmaker - Backend Setup

Backend Structure with MVC Model:
- Configs contains all configurations of the project server-side
  + connectDB.js file: imported mysql2 and created connection to database
  + viewEngine.js file: selected EJS as the project view engine, and set "Views" as a folder that stores all .ejs files.
- Controller contains code logic to connect and get data from database, then render to Views.
  + homeController.js
  + APIController.js 
- Models:
  + index.js file: 
- Public contains accessible files suchs as images, audio files and css files
- Routes folder contains all the routes of the web app and app API:
Express basic routing documentation: https://expressjs.com/en/4x/api.html#router
  + api.js file contains all api routes (GET, POST, PUT, DELETE)
  + web.js file contains all routes of the application.
- Views (The folder was created for the purpose of showing how data would be manipulated on the backend server, and will be removed while the project moving onward) :
  + index.ejs: the homepage which contains user list, modify functions such as view detail, edit and delete a specific user.
  + update.ejs: a specific user can update their information such as first name, last name, email and address. After they change their infomation, the updated one will be saved to database. 
  + uploadFile.ejs: a user can update their profile picture. 
