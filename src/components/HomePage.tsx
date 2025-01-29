import React from "react";
import Navbar from "./HomePage/Navbar";
import Hero from "./HomePage/Hero";
import VoiceCategories from "./HomePage/VoiceCategories";
import Instructions from "./HomePage/Instructions";
import NovelExamples from "./HomePage/NovelExamples";
import SampleNovelExamples from "./HomePage/SampleNovelExamples";
import Footer from "./HomePage/Footer";

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <div className="relative h-[50vh] bg-[url('https://i.pinimg.com/736x/1b/1e/e3/1b1ee3d86646fe340532617b70a76339.jpg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <Navbar />
        <Hero />
      </div>

      <VoiceCategories />
      <Instructions />
      <NovelExamples />
      <SampleNovelExamples />
      <Footer />
    </div>
  );
};

export default HomePage;