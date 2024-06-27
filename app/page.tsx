import React from "react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import SignUpSection from "@/components/signupsection";
import Testimonial from "@/components/testimonial";
import NewsLetter from "@/components/newsletter";
import Footer from "@/components/footer";

const Home = () => {
  return (
    <div className="font-montserrat">
      <div className="font-montserrat w-full h-[95vh] hero">
        <Navbar />
        <Hero />
      </div>
      <SignUpSection />
      <Testimonial />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default Home;
