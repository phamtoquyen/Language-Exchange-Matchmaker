# JIA-2113---Language-Exchange-Matchmaker

# Release Notes
## Version 0.1.0
### New Features
* UI for Home, Login & Registration Page
* Register an account in the new database schema

### Bug Fixes
* No schema was provided with the project, now there is a schema that can be upladed and used by developers

### Known Issues
* Database is not on a server hence there are currently multiple copies.
* Multiple People can be registered with the same people.


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

For Backend dependencies (terminal commands): 
* cd Backend--JIA-2113---Language-Exchange-Matchmaker 
* npm install 

For Frontend dependecies (terminal commands): 

* cd Frontend_JIA 2113 - Language Exchange Matchmaker 
* npm install  

To migrate the database 
* cd Backend--JIA-2113---Language-Exchange-Matchmaker/src 
* npx sequelize-cli db:migrate 
 
## BUILD 
No build is necessary for this app.
## INSTALLATION 
No additional file needs to be added 
## RUNNING APPLICATION
Backend
* cd Backend--JIA-2113---Language-Exchange-Matchmaker 
* npm start 
Frontend: 
* cd Frontend_JIA 2113 - Language Exchange Matchmaker 
* npm start

# Tutorial Resources: 

* https://sequelize.org/docs/v6/other-topics/migrations/ 
* https://reactjs.org/tutorial/tutorial.html 
* https://www.bezkoder.com/react-node-express-mysql/ 

 
