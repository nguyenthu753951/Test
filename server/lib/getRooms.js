
import axios from 'axios';
export const getRooms = async (req, res) => {
    try{
        const {data} = await axios.get("http://localhost:8090/phong/all");
        return data;
    }catch(err){
        return ({message: 'Error'});
    }
};

// export const getRoomsById = async (req, res) => {
//     try{
//         const {data} = await axios.get(`http://localhost:8090/phong/find/${}`);
//         return data;
//     }catch(err){
//         return ({message: 'Error'});
//     }
// };