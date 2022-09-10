# JIA-2113---Language-Exchange-Matchmaker - Backend Setup
[Editing.....]
Backend Structure with MVC Model:
- Configs contains all configurations of the project server-side
  + connectDB.js file: imported mysql2 and created connection to database
  + viewEngine.js file: selected EJS as the project view engine, and set "Views" as a folder that stores all .ejs files.
- Controller: 
  + APIController.js:
  + homeController.js:
- Models:
  + index.js file: 
- Public contains accessible files suchs as images, audio files and css files
- Routes folder contains all the routes of the web app and app API:
  + api.js file: 
  + web.js file:
- Views (The folder was created for the purpose of showing how data would be manipulated on the backend server, and will be removed while the project moving onward) :
  + index.ejs: 
  + update.ejs:
  + uploadFile.ejs:
