import React from "react";
import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import BookAppointment from "../Components/BookAppointment";
import Reviews from "../Components/Reviews";
import Doctors from "../Components/Doctors";
import Footer from "../Components/Footer";
import Featured from "../Components/Featured";




function Home() {
  return (
<div className="home-section ">

      <Navbar />
      <Hero />      
      <Info />
      <Featured/>
      <About />
      <BookAppointment />
      {/* <Reviews /> */}
      <Doctors />
      <Footer />
    </div>
  );
}

export default Home;
