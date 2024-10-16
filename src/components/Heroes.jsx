import ImgSiswa from "../assets/images/rafiki.png";
import { useNavigate } from "react-router-dom";
import Modal from "./Ui/Modal/Modal";
import { useState } from "react";
import { Login } from "../pages/Login/Login";

function Heroes() {
  const [modalLogin, setmodalLogin] = useState(false);
  const navigate = useNavigate();
  const handleCloseLoginModal = () => {
    setmodalLogin(false);
  };
  function handleClick(route) {
    navigate(route);
  }
  return (
    <div className="heroes-lp">
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={ImgSiswa}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width={700}
              height={500}
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <div className="title-heroes">
              <h1 className="display-5 fw-semibold">PPDB</h1>
              <h1>SMK MUHAMMADIYAH 3 YOGYAKARTA</h1>
              <br />
              <p className="lead">
                Daftarkan diri anda ke bidang keahlian impianmu, ciptakan skill
                luar biasa bersama
              </p>
              <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                <button
                  onClick={() => handleClick("/pengumuman")}
                  className="btn-daftar"
                >
                  Lihat Informasi
                </button>
                {/* {modalLogin && (
                  <Login
                    title={"Sebelum lanjut, login dulu yuk !"}
                    onClose={handleCloseLoginModal}
                  />
                )} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Heroes;
