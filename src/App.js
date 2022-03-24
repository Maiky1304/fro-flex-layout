import Navbar from "./components/Navbar";
import WidgetLayout from "./components/WidgetLayout";
import SliderWidget from "./widgets/SliderWidget";
import StopWatchWidget from "./widgets/StopWatchWidget";
import {FontProvider} from "./context/FontContext";
import ImageWidget from "./widgets/ImageWidget";

function App() {
  return (
    <FontProvider>
        <Navbar />
        <WidgetLayout>
            <SliderWidget />
            <ImageWidget />
            <StopWatchWidget />
        </WidgetLayout>
    </FontProvider>
  );
}

export default App;
