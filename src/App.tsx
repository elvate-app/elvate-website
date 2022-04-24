import CustomToolbar from "src/component/Toolbar";
import BottomSection from "./component/BottomSection";
import HowToSection from "./component/HowToSection";
import PresentationSection from "./component/PresentationSection";
import RoadmapSection from "./component/RoadmapSection";

const App = () => {
  return (
    <>
      <CustomToolbar />
      <PresentationSection />
      <HowToSection />
      <RoadmapSection />
      <BottomSection />
    </>
  );
};

export default App;
