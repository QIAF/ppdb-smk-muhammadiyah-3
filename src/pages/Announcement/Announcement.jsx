import axios from "axios";
import React, { useEffect, useState } from "react";
import NavbarMajor from "../../components/Navbar/NavbarMajor";
import NavbarForm from "../../components/Navbar/NavbarForm";

export default function Announcement() {
  const [data, setData] = useState([]);
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
  return (
    <>
      <NavbarForm />
      <div className="sekilas-tentang">
        <div className="title-tentang text-center ">
          <h3 className="fw-bold">
            Pengumuman Kelulusan Siswa Tahun Ajaran 2023/2024
          </h3>
        </div>
        <div className="sekilas">
          <div className="container">
            <div className="banner-sekilas row">
              <div className=" desk-tentang col m-auto">
                <div className="title-sekilas m-auto">
                  <p
                    className="m-5"
                    dangerouslySetInnerHTML={{
                      __html: data.article_description,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
