import './App.css';
import HoverButton from './components/HoverButton';
import AdvancedImageSet from './components/AdvancedImageSet';
import SlideAnimation from './components/SlideAnimation';
import LoadDataAnimation from './components/LoadDataAnimation';

function App() {
  return (
    <div className="App">
      {/* Hover button component */}
      <HoverButton />

      {/* Load data animation component */}
      <LoadDataAnimation />

      {/* Slide box animation component */}
      <SlideAnimation />

      {/* Advanced animation component */}
      <AdvancedImageSet/>
    </div>
  );
}

export default App;
