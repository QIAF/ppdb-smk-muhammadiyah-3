import AlurDaftar from "../../components/AlurDaftar";
import Faq from "../../components/Faq";
import Footer from "../../components/Footer/Footer";
import Heroes from "../../components/Heroes";
import InfoPendaftaran from "../../components/InfoPendaftaran";
import Navbar from "../../components/Navbar/Navbar";
import PendaftaranOnline from "../../components/PendaftaranOnline";
import Sekilas from "../../components/Sekilas";
import Testimonial from "../../components/Testimonial";
import "./LandingPage.css";
import ChatBot from "../../components/ChatBot/ChatBot";
import ChatIcon from "../../components/ChatBot/ChatIcon";
import FooterWhite from "../../components/Footer/FooterWhite";
import Announcement from "../Announcement/Announcement";
import Banner from "../../components/Banner";

function LandingPage() {
  return (
    <>
      <Navbar />
      <Heroes />
      <ChatIcon />
      <Sekilas />
      <Testimonial />
      <AlurDaftar />
      <PendaftaranOnline />
      <InfoPendaftaran />
      <Banner />
      <Faq />
      <FooterWhite />
    </>
  );
}

export default LandingPage;
