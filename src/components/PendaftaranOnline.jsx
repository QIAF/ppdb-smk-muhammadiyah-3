import { useState } from "react";
import ImgAlurOnline from "../assets/images/img-alur-online.png";
import { Login } from "../pages/Login/Login";
import { useNavigate } from "react-router";
function PendaftaranOnline() {
  const [modalLogin, setmodalLogin] = useState(false);
  const navigate = useNavigate();
  const handleCloseLoginModal = () => {
    setmodalLogin(false);
  };
  return (
    <div className="banner-daftar-online banner-lg p-3 mb-5">
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="title-daftar-online">
              <h3>Pendaftaran Online</h3>
            </div>
            <p>
              Solusi untuk mempermudah, menghemat waktu, kamu dapat
              mengakses&nbsp;berbagai informasi seputar PPDB dan mendaftar
              secara online dimanapun kamu berada.
            </p>
            <div className="d-grid gap-2 d-md-flex justify-content-md-start">
              <button
                type="button"
                className="btn-daftar btn-lg px-4 me-md-2"
                onClick={() =>
                  window.open("https://wa.me/6281234567890", "_blank")
                }
              >
                Konsultasi
              </button>
            </div>
          </div>
          <div className="col">
            <div className="img-persyaratan-online">
              <img
                src={ImgAlurOnline}
                alt=""
                className="img-tutor-online"
                style={{ maxWidth: "100%", height: "auto" }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default PendaftaranOnline;
