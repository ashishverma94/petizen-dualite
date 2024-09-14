import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Navbar from "./components/Navbar/Component";
import HeroSection from "./components/HeroSection/Component";
import MiddleCard from "./components/MiddleCard/Component";
import Mobile from "./components/Mobile/Component";
import Footer from "./components/Footer/Component";


function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="px-[10px] py-8 md:px-[100px] ">
      {/* <Navbar /> */}
      <HeroSection />
      <MiddleCard/>
      <Mobile/>
      <Footer/>
    </div>
  );
}

export default App;
