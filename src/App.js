import "./App.css";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";

function App() {
  return (
    <>
      <Navbar title="Text Utils" aboutText="About" />
      <TextBox heading="Input Textarea"/>
    </>
  );
}

export default App;
