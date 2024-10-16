import React from "react";
import { Button } from "./Ui/Button/Button";
import { useNavigate } from "react-router";
import NavbarMajor from "./Navbar/NavbarMajor";

export default function Banner() {
  const navigate = useNavigate();
  function handleClick(route) {
    navigate(route);
  }
  return (
    <>
      <div className="sekilas-tentang">
        <div className="title-tentang text-center "></div>
        <div className="sekilas">
          <div className="container">
            <div className="banner-sekilas row">
              <div className=" desk-tentang col m-5">
                <div className="title-sekilas m-auto">
                  <p>
                    Dapatkan info terkini tentang jadwal wawancara dan hasil
                    seleksi PPDB SMK Muhammadiyah 3 Yogyakarta. Pastikan kamu
                    selalu up-to-date dan jangan lewatkan pengumuman penting
                    seputar perjalananmu menjadi bagian dari kami
                  </p>
                  <button
                    onClick={() => handleClick("/pengumuman")}
                    className="btn-daftar"
                  >
                    Lihat Informasi
                  </button>
                </div>
              </div>

              <div className="d-grid gap-2 d-md-flex justify-content-md-start"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
