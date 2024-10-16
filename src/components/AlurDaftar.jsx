import ImgStudy from "../assets/images/img-study.png";
import ImgAlur from "../assets/images/img-offlineFlow.png";
function AlurDaftar() {
  return (
    <div id="alur-daftar">
      <div className="alur-daftar-siswa mb-5  container">
        <div className="title-alur">
          <h3>
            <strong>Pendaftaran One Day Service</strong>
          </h3>
        </div>
        <div className="container d-flex justify-content-center container">
          <div className="row g-5 alur-pendaftaran">
            <div className="col d-flex justify-content-start">
              <img src={ImgAlur} alt="" className="alur-daftar" />
            </div>
            <div className="col d-flex justify-content-end">
              <img src={ImgStudy} alt="" className="alur-daftar1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default AlurDaftar;
