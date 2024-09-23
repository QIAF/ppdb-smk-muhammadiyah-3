import React, { useEffect, useState } from "react";
import Hero from "../../components/Hero/Hero";
import Img from "../../assets/images/img-student.png";
import NavbarGet from "../../components/Navbar/NavbarGet";
import Box from "../../components/Ui/Box/Box";
import { Button } from "../../components/Ui/Button/Button";
import { useNavigate } from "react-router";
import axios from "axios";
import FooterWhite from "../../components/Footer/FooterWhite";

export default function Article() {
  const navigate = useNavigate();
  function handleClick(route) {
    navigate(route);
  }
  const [data, setData] = useState([]);
  const [error, setIsError] = useState(false);
  const [isPending, setIsPending] = useState(true);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        "https://be-ppdb-online-update.vercel.app/api/v1/article"
      );
      console.log("API Response:", res.data);
      if (res.data.data && res.data.data.length > 0) {
        setData(res.data.data[0]); // Mengambil artikel pertama dari array
      }
      setIsPending(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setIsError(true);
      setIsPending(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isPending) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error fetching data. Please try again later.</div>;
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
        <div className="announcement">
          <h1>{/* <b>{data.article_name}</b> */}</h1>
          {/* Menampilkan deskripsi artikel dengan dangerouslySetInnerHTML */}
          <p dangerouslySetInnerHTML={{ __html: data.article_description }} />
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
