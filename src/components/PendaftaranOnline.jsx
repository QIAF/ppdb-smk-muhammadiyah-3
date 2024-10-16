import { useState } from "react";
import ImgAlurOnline from "../assets/images/img-onlineFlow.png";
import { Login } from "../pages/Login/Login";
import { useNavigate } from "react-router";
function PendaftaranOnline() {
  const [modalLogin, setmodalLogin] = useState(false);
  const navigate = useNavigate();
  const handleCloseLoginModal = () => {
    setmodalLogin(false);
  };
  return (
    <div className="">
      <div className="online-flow mt-5 ">
        <div className="container">
          <h3 className="fw-bold title-alur mb-3">Pendaftaran Online</h3>
          <div className=" row">
            <div className=" desk-tentang col m-auto">
              <div className="title-sekilas">
                <p>
                  Solusi untuk mempermudah, menghemat waktu, kamu dapat
                  mengakses berbagai informasi seputar PPDB dan mendaftar secara
                  online dimanapun kamu berada.
                </p>

                <p>
                  <a href="https://bit.ly/template_dokumen_siswa">
                    Lihat petunjuk pengisian dokumen persyaratan online
                  </a>
                </p>
                <button
                  type="button"
                  className="btn-daftar btn-lg px-4 me-md-2"
                  onClick={() => setmodalLogin(true)}
                >
                  Daftar Online
                </button>
                {modalLogin && (
                  <Login
                    title={"Sebelum lanjut, login dulu yuk !"}
                    onClose={handleCloseLoginModal}
                  />
                )}
              </div>
            </div>
            <div className="col">
              <img
                src={ImgAlurOnline}
                className="sekilas-img"
                style={{ maxWidth: "80%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PendaftaranOnline;
