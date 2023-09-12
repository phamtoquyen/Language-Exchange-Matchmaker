# JIC-3200-LinguaLink | Language Exchange Matchmaker

# Release Notes
## Version 1.2.0
### Features
* English to Korean translator page
* Backend dictionary/translation storage
* Cleaned up and improved README's documentation and installation guiide
### Bug Fixes
* Database connection properly established for newly cloned project environments
* Updated translator page to align with app's standard styling
### Known Issues
* 'Find Friend' feature on home page does not properly interact with backend
* Chat screen is empty with no meaningful navigation options
## Version 1.1.0
### Features
* Registering an account and logging in
* Creating a personalized profile
* Matching with individuals that match your needs
* Able to view friends on dashboard page
* Chatting with friends
* Virtual keyboard

### Bug Fixes
* RESTful API created for the messageModel
* Connected the FrontEnd pages to their respective BackEnd
* Fixed an issue where you can see your own account as a person you could chat to 

### Known Issues
* Refresh needed for chats to appear
* Issue where name of the person being messaged is incorrect
* Window sizing issue depending on the size of the email


# Install Guide
## PREREQUISITES 
You may want to have an IDE like Visual Studio Code and a MySQL GUI installed.

Requirements:
* Git
* Node.js / Node Package Manager (npm)
## DOWNLOAD

Clone this repository locally.
## DEPENDENCIES 
Open the project directory in your terminal.

For Backend dependencies (terminal commands): 

    cd Backend
    npm install

For Frontend dependecies (terminal commands): 

    cd Frontend 
    npm install --legacy-peer-deps
    npm install translate --legacy-peer-deps

To migrate the database:

    cd Backend/src 
    npx sequelize-cli db:migrate
*Note that you will need to remove your database's password and create a table named languageexchangematchmaker in order to get things working.* 

## BUILD 
No builds are necessary for this app.
## INSTALLATION 
No additional files need to be added 

## RUNNING APPLICATION
Backend

    cd Backend 
    npm start

Frontend

    cd Frontend
    npm start

# Tutorial Resources: 

* https://sequelize.org/docs/v6/other-topics/migrations/ 
* https://reactjs.org/tutorial/tutorial.html 
* https://www.bezkoder.com/react-node-express-mysql/ 
