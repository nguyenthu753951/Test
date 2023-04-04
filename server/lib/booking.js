import axios from "axios";
export const Booking = async (vl) => {
  try {
    const respon = await axios.post("http://localhost:8090/phieudat/add", {
      id_kh: vl.id_kh,
      id_nv: vl.id_nv,
      ngay_dat: vl.ngay_dat,
      ngay_tra_dk: vl.ngay_tra_dk,
      tien_coc: vl.tien_coc,
      maphongdk: vl.maphongdk
    });
    const res2 = await axios.put("http://localhost:8090/phong/updateTT", {
      id: vl.maphongdk,
      tinh_trang: 0,
    });
  } catch (err) {
    console.log(user.password);
  }
};
