import axios from 'axios';
export const registerMSQL = async (user) => {
    try {
        const res = await axios.post("http://localhost:8090/khachhang/add", {
            ho_ten: user.username,
            email: user.email,
            mat_khau: user.password
        });
        console.log(res.data)
    } catch (err) {
        console.log("lỗi")
    }
};