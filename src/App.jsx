import Footer from "./components/Footer/Component";
import Mobile from "./components/MobileCard/Component" ;
import MiddleCard from "./components/MiddleCard/Component"
import OrgSection from "./components/OrgSection/Component" ;
import HeroSection from "./components/HeroSection/Component";

function App() {
  return (
    <div>
      <HeroSection />
      <MiddleCard/>
      <Mobile/>
      <OrgSection/>
      <Footer/>
    </div>
  );
}

export default App;
