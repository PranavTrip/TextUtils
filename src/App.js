import { useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "dark") {
      setMode("light");
      document.body.style.backgroundColor = "#fff";
    } else {
      setMode("dark");
      document.body.style.backgroundColor = "#343434";
    }
  };
  return (
    <>
      <Router>
        <Navbar
          title="Text Utils"
          aboutText="About"
          mode={mode}
          toggleMode={toggleMode}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={<TextBox heading="Input Textarea" mode={mode} />}
          />
          {/* <TextBox heading="Input Textarea" mode={mode}/> */}
          <Route exact path="/about" element={<About />} />
          {/* <About/> */}
        </Routes>
        {/* <Footer /> */}
      </Router>
    </>
  );
}

export default App;
