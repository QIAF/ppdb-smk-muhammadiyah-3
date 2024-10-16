import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Img from "../../assets/images/img-student.png";
import NavbarGet from "../../components/Navbar/NavbarGet";
import Box from "../../components/Ui/Box/Box";
import { Button } from "../../components/Ui/Button/Button";
import { useNavigate } from "react-router";
import axios from "axios";
import FooterWhite from "../../components/Footer/FooterWhite";
import { Link } from "react-router-dom";

export default function Article() {
  const navigate = useNavigate();
  function handleClick(route) {
    navigate(route);
  }

  return (
    <>
      <NavbarGet />
      <Hero title="Pengumuman" img={Img}></Hero>
      <style>
        {`
            .announcement {
              background-color: #ffffff;
              border: 1px solid #ddd;
              border-radius: 8px;
              padding: 20px;
              max-width: 600px;
              margin: 20px auto;
              box-shadow: 0 0 10px rgba(0,0,0,0.1);
              font-family: Arial, sans-serif;
              color: #333;
            }
            .announcement h1 {
              font-size: 24px;
              color: #333;
              margin-top: 0;
            }
            .announcement p {
              font-size: 16px;
              color: #555;
              line-height: 1.5;
              margin: 10px 0;
            }
            .announcement .date {
              font-weight: bold;
              color: #333;
              background-color: #e0f7fa;
              padding: 10px;
              border-radius: 5px;
              margin-top: 20px;
            }
            .announcement .note {
              background-color: #e8f5e9;
              padding: 10px;
              border-radius: 5px;
              font-size: 14px;
              color: #00796b;
              margin-top: 20px;
            }
          `}
      </style>
      <div className="container">
        <div className="announcement ">
          <h1>Halo calon siswa SMK Muhammadiyah 3 Yogyakarta! 👋</h1>
          <p>
            Kamu telah melakukan tahap pendaftaran! <br />
          </p>
          <p>
            Informasi penting terkait PPDB tersedia. Cek detailnya di fitur{" "}
            <Link to="/pengumuman" className="text-primary font-weight-bold">
              Informasi
            </Link>{" "}
            pada website kami. Jangan lewatkan kesempatan untuk mengetahui
            jadwal wawancara dan hasil seleksi kalian!
          </p>
          <p>
            Jika ada pertanyaan lebih lanjut, bisa langsung hubungi kami di
            nomor <strong>0812-3456-7890</strong>.
          </p>
          <div>
            Salam hangat,
            <br />
            Tim PPDB SMK 3 Muhammadiyah Yogyakarta
          </div>
        </div>
        <div className="d-flex justify-content-center mt-5">
          <Button
            className="btn btn-primary mb-5"
            type="button"
            onClick={() => handleClick("/dataSiswa")}
          >
            Lihat Data Anda
          </Button>
        </div>
      </div>
      <FooterWhite />
    </>
  );
}
