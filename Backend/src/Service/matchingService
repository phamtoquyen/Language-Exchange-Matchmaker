import db from '../models/index';

let checkFriends = (native_language, target_language) => {
    return new Promise (async (resolve, reject) => {
        try{
            let user = await db.UserProfile.findAll({
                // attributes: ['id'],
                where: {native_language : target_language, target_language : native_language},
                order: {limit: 5}
            })
            return (user)
            if (user){
                resolve(true)
            }else {
                resolve(false)
            }
        }catch(e){
            reject(e);
        }
    })
}



module.exports = {checkFriends}

//above code will return all instances

//maybe use findByPk to get a single entry using a primary key?
    // this can be incremented to go throught the entire table

    // let checkFriends = (id, native_language, target_language) => {
    //     return new Promise (async (resolve, reject) => {
    //         try{
    //             let array = []
    //             let user = await db.UserProfile.findByPk({
    //                 where: {id : id, native_language : target_language, target_language : native_language},
    //                 order: {limit: 5}
    //             })
    //             array.push(this.getDataValue('firstName'));
    //             console.log(user)
    //             if (user){
    //                 resolve(true)
    //             }else {
    //                 resolve(false)
    //             }
    //         }catch(e){
    //             reject(e);
    //         }
    //     })
    // }