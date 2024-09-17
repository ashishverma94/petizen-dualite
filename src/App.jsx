import Footer from "./components/Footer/Component";
import Mobile from "./components/MobileCard/Component";
import MiddleCard from "./components/MiddleCard/Component";
import OrgSection from "./components/OrgSection/Component";
import HeroSection from "./components/HeroSection/HeroSection";
import Navbar from "./components/Navbar/Component";

function App() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <MiddleCard />
      <Mobile />
      <OrgSection />
      <Footer />
    </div>
  );
}

export default App;
