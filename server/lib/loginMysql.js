import axios from 'axios';
export const loginMysql = async (user) => {
    try {
        const respon = await axios.post("http://localhost:8090/khachhang/loginUser", {
            email: user.email,
            mat_khau: user.password
        });
        return respon.data.id; 
    } catch (err) {
        console.log(user.password)
    }
};