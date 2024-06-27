import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import NewsLetter from "@/components/newsletter";
import TaskManager from "@/components/taskManager";
import React from "react";

const BootCamp = () => {
  return (
    <div className="font-montserrat">
      <Navbar className="bg-dark-blue" />
      <TaskManager />
      <NewsLetter />
      <Footer />
    </div>
  );
};

export default BootCamp;
