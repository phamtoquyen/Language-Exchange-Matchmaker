import axios from '../Utils/axios';

const handleFindFriendsApi = (id) => {
    return axios.post('/findFriends', {id:id}) ;
}





export {handleFindFriendsApi}