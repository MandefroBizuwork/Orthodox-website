import React from "react";
import Navbar from "../Components/SharedLayout/Header/Navbar";
import Hero from "../Components/Hero";
import Info from "../Components/Info";
import About from "../Components/About";
import Contactus from "../Components/Contactus";
import Reviews from "../Components/Reviews";

import Footer from "../Components/SharedLayout/Footer/Footer";
import Featured from "../Components/Featured";

function Home() {
  return (
    <div className="home-section">
      {/* <header>
        <Navbar />
      </header> */}

      <main>
        <Hero />
        <section id="info" className="py-5">
          <Info />
        </section>

        <section id="about" className="py-5 bg-light">
          <About />
        </section>

        <section id="featured" className="py-5">
          <Featured />
        </section>

      

        {/* <section id="reviews" className="py-5">
          <Reviews />
        </section> */}

        <section id="contact" className="py-5 bg-light">
          <Contactus />
        </section>
      </main>


    </div>
  );
}

export default Home;
