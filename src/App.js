import "./App.css";
import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About/About";
import Contact from "./pages/Contact/Contact";
import Home from "./pages/Home/Home";
import Blog from "./components/Blog";
import Architecture from "./pages/Services/Architecture";
import Interior from "./pages/Services/Interior";
import Vastu from "./pages/Services/Vastu";
import ConstructionMall from "./pages/Services/ConstructionMall";
import BlogSingle from "./pages/BlogSingle/BlogSingle";
import Basic_details from "./pages/Basic_details/Basic_details";
import Profiles from "./pages/Profiles/Profiles";
import Register from "./pages/auth/Register";
import { Toaster } from "react-hot-toast";
import Login from "./pages/auth/Login";
import VerifyEmail from "./pages/auth/VerifyEmail";
import TalkToInterior from "./pages/Talk_to_Interior/TalkToInterior";
import MembershipRegistration from "./Provider/MembershipRegistration";
import MemberProfile from "./pages/Profiles/MemberProfile";

// Scroll to top component
function ScrollToTop() {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, [location.pathname]);

  return null;
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> {/* Ensure this is within the BrowserRouter context */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/Architecture" element={<Architecture />} />
        <Route path="/Interior" element={<Interior />} />
        <Route path="/Vastu" element={<Vastu />} />
        <Route path="/Construction-mall" element={<ConstructionMall />} />
        <Route path="/Blog-Details" element={<BlogSingle />} />
        <Route path="/Basic-details" element={<Basic_details />} />
        <Route path="/profile-details" element={<Profiles />} />
        {/* user authontication rout */}
        <Route path="/user-register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/otp-verification/user" element={<VerifyEmail />} />
        <Route path="/talk-to-interior" element={<TalkToInterior />} />
        <Route path="/member-registration" element={<MembershipRegistration />} />
        <Route path="/profile-page/:id" element={<MemberProfile />} />

       
      </Routes>
      <Toaster />
      <Footer />
    </BrowserRouter>
  );
}

export default App;
