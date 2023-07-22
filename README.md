# JIA-2113---Language-Exchange-Matchmaker

# Release Notes
## Version 1.1.0
### Features
* Registering an account and logging in
* Creating a personalized profile
* Matching with individuals that match your needs
* Able to view friends on dashboard page
* Chatting with friends
* Virtual keyboard
* English-to-Korean translator
* Backend dictionary storage

### Bug Fixes
* RESTful API created for the messageModel
* Connected the FrontEnd pages to their respective BackEnd
* Fixed an issue where you can see your own account as a person you could chat to 

### Known Issues
* Refresh needed for chats to appear
* Issue where name of the person being messaged is incorrect
* Window sizing issue depending on the size of the email


# Install Guide Language Exchange MatchMaker 1.0 
## PRE-REQUISITES 
* You must have an IDE like visual studio installed and SQL workbench configured before proceeding. See 

https://visualstudio.microsoft.com/downloads/ 

https://dev.mysql.com/downloads/workbench/ 
## DOWNLOAD 
* https://github.com/phamtoquyen/JIA-2113---Language-Exchange-Matchmaker.git 

Dowload zip file from there 
## DEPENDENCIES 
open the file in VS/ Intellij and terminal (we can install all the dependencies with ‘npm install’ command in terminal) 

Backend dependencies: 
  * "@babel/core": "7.15.5",
  *  "@babel/node": "7.15.4",
  *  "@babel/preset-env": "7.15.6",
  *  "app-root-path": "3.0.0",
  *  "bcryptjs": "^2.4.3",
  *  "body-parser": "1.19.0",
  *  "cors": "^2.8.5",
  *  "dotenv": "10.0.0",
  *  "ejs": "^3.1.6",
  *  "express": "4.17.1",
  *  "multer": "1.4.3",
  *  "mysql2": "2.3.0",
  *  "nodemon": "^2.0.20",
  *  "sequelize": "^6.19.0"

For Backend dependencies (terminal commands): 
* cd Backend--JIA-2113---Language-Exchange-Matchmaker 
* npm install --legacy-peer-deps


Frontend dependencies: 
"@iconscout/react-unicons": "^1.1.6",
  *  "@testing-library/jest-dom": "^5.16.5",
  *  "@testing-library/react": "^13.4.0",
  *  "@testing-library/user-event": "^13.5.0",
  *  "axios": "^0.27.2",
  *  "bootstrap": "^5.2.1",
  *  "connected-react-router": "^6.9.3",
  *  "react": "^18.2.0",
  *  "react-bootstrap": "^2.5.0",
  *  "react-dom": "^18.2.0",
  *  "react-icons": "^4.6.0",
  *  "react-redux": "^8.0.5",
  *  "react-router-dom": "^6.4.1",
  *  "react-script": "^2.0.5",
  *  "react-scripts": "^5.0.1",
  *  "react-select": "^5.4.0",
  *  "react-toastify": "^9.0.8",
  *  "redux": "^4.2.0",
  *  "redux-thunk": "^2.4.2",
  *  "sass": "^1.55.0",
  *  "save": "^2.5.0",
  *  "socket.io-client": "^4.5.4",
  *  "styled-components": "^5.3.6",
  *  "timeago.js": "^4.0.2",
  *  "web-vitals": "^2.1.4"


For Frontend dependecies (terminal commands): 

* cd Frontend_JIA 2113 - Language Exchange Matchmaker 
* npm install --legacy-peer-deps

To migrate the database 
* cd Backend--JIA-2113---Language-Exchange-Matchmaker/src 
* npx sequelize-cli db:migrate 
 
## BUILD 
No builds are necessary for this app.
## INSTALLATION 
No additional files need to be added 

## RUNNING APPLICATION
Backend
* cd Backend--JIA-2113---Language-Exchange-Matchmaker 
* npm start

Frontend
* cd Frontend_JIA 2113 - Language Exchange Matchmaker 
* npm start

# Tutorial Resources: 

* https://sequelize.org/docs/v6/other-topics/migrations/ 
* https://reactjs.org/tutorial/tutorial.html 
* https://www.bezkoder.com/react-node-express-mysql/ 

# Release Notes
## Version 1.1.0
### Features
* Registering an account and logging in
* Creating a personalized profile
* Matching with individuals that match your needs
* Able to view friends on dashboard page
* Chatting with friends 

### Bug Fixes
* RESTful API created for the messageModel
* Connected the FrontEnd pages to their respective BackEnd
* Fixed an issue where you can see your own account as a person you could chat to 

### Known Issues
* Refresh needed for chats to appear
* Issue where name of the person being messaged is incorrect
* Window sizing issue depending on the size of the email


# Install Guide Language Exchange MatchMaker 1.0 
## PRE-REQUISITES 
* You must have an IDE like visual studio installed and SQL workbench configured before proceeding. See 

https://visualstudio.microsoft.com/downloads/ 

https://dev.mysql.com/downloads/workbench/ 
## DOWNLOAD 
* https://github.com/phamtoquyen/JIA-2113---Language-Exchange-Matchmaker.git 

Dowload zip file from there 
## DEPENDENCIES 
open the file in VS/ Intellij and terminal (we can install all the dependencies with ‘npm install’ command in terminal) 

Backend dependencies: 
  * "@babel/core": "7.15.5",
  *  "@babel/node": "7.15.4",
  *  "@babel/preset-env": "7.15.6",
  *  "app-root-path": "3.0.0",
  *  "bcryptjs": "^2.4.3",
  *  "body-parser": "1.19.0",
  *  "cors": "^2.8.5",
  *  "dotenv": "10.0.0",
  *  "ejs": "^3.1.6",
  *  "express": "4.17.1",
  *  "multer": "1.4.3",
  *  "mysql2": "2.3.0",
  *  "nodemon": "^2.0.20",
  *  "sequelize": "^6.19.0"

For Backend dependencies (terminal commands): 
* cd Backend--JIA-2113---Language-Exchange-Matchmaker 
* npm install --legacy-peer-deps


Frontend dependencies: 
"@iconscout/react-unicons": "^1.1.6",
  *  "@testing-library/jest-dom": "^5.16.5",
  *  "@testing-library/react": "^13.4.0",
  *  "@testing-library/user-event": "^13.5.0",
  *  "axios": "^0.27.2",
  *  "bootstrap": "^5.2.1",
  *  "connected-react-router": "^6.9.3",
  *  "react": "^18.2.0",
  *  "react-bootstrap": "^2.5.0",
  *  "react-dom": "^18.2.0",
  *  "react-icons": "^4.6.0",
  *  "react-redux": "^8.0.5",
  *  "react-router-dom": "^6.4.1",
  *  "react-script": "^2.0.5",
  *  "react-scripts": "^5.0.1",
  *  "react-select": "^5.4.0",
  *  "react-toastify": "^9.0.8",
  *  "redux": "^4.2.0",
  *  "redux-thunk": "^2.4.2",
  *  "sass": "^1.55.0",
  *  "save": "^2.5.0",
  *  "socket.io-client": "^4.5.4",
  *  "styled-components": "^5.3.6",
  *  "timeago.js": "^4.0.2",
  *  "web-vitals": "^2.1.4"


For Frontend dependecies (terminal commands): 

* cd Frontend_JIA 2113 - Language Exchange Matchmaker 
* npm install --legacy-peer-deps

To migrate the database 
* cd Backend--JIA-2113---Language-Exchange-Matchmaker/src 
* npx sequelize-cli db:migrate 
 
## BUILD 
No builds are necessary for this app.
## INSTALLATION 
No additional files need to be added 

## RUNNING APPLICATION
Backend
* cd Backend--JIA-2113---Language-Exchange-Matchmaker 
* npm start

Frontend
* cd Frontend_JIA 2113 - Language Exchange Matchmaker 
* npm start

# Tutorial Resources: 

* https://sequelize.org/docs/v6/other-topics/migrations/ 
* https://reactjs.org/tutorial/tutorial.html 
* https://www.bezkoder.com/react-node-express-mysql/ 

 
