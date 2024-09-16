import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar/Component";
import HeroSection from "./components/HeroSection/Component";
import MiddleCard from "./components/MiddleCard/Component";
import Mobile from "./components/Mobile/Component";
import Footer from "./components/Footer/Component";
import OrgSection from "./components/OrgSection/Component" ;

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <HeroSection />
      <MiddleCard/>
      <Mobile/>
      <OrgSection/>
      <Footer/>
    </div>
  );
}

export default App;
