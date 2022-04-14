import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";

function App() {
  return (
    <>
      <Navbar title="Text Utils" aboutText="About" />
      <About/>
      {/* <TextBox heading="Input Textarea"/> */}
    </>
  );
}

export default App;
