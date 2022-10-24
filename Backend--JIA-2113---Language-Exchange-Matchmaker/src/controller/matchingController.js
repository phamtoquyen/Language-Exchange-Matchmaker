const User1 = new Object();
User1.nativeLanguage = "English";
User1.targetLanguage = "Korean";
User1.levelOfLanguage = "Beginner";
User1.age = 20;
User1.gender = "Male";
User1.profession = "Education";
User1.Hobby = "Reading";
User1.isFriend = false;

const User2 = new Object();
User2.nativeLanguage = "Korean";
User2.targetLanguage = "English";
User2.levelOfLanguage = "Beginner";
User2.age = 21;
User2.gender = "Male";
User2.profession = "Education";
User2.Hobby = "Reading";
User2.isFriend = false;

const User3 = new Object();
User3.nativeLanguage = "Korean";
User3.targetLanguage = "English";
User3.levelOfLanguage = "Fluent";
User3.age = 27;
User3.gender = "Female";
User3.profession = "Finance";
User3.Hobby = "Gaming";
User3.isFriend = false;

let addFriend = async (User1, User2) => {
    User1.isFriend = true;
    User2.isFriend = true;
    // grab the user id's and them to the table to signify them being friends

}


// Have a "display potential friends" button. User1 is the user of the current application, User2 is any other user in the database
// Loop through the entire database of users and find these requirements

    if ((User1.nativeLanguage == User2.targetLanguage) && ((User1.age - User2.age > 0 && User1.age - User2.age < 5) || (User2.age-User1.age > 0 && User2.age - User2.age < 5))) {
        console.log("Hey, looks like we are eligible to be friends now!") //this would be the where the user can see potential partners
        // display them as users that are suitable friend candidates
    }

