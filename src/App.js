import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import TextBox from "./components/TextBox";

function App() {
  const[mode,setMode]=useState("light");
  const toggleMode=()=>{
    if(mode==="dark"){
      setMode("light");
      document.body.style.backgroundColor="#fff";
    }
    else{
      setMode("dark");
      document.body.style.backgroundColor="#343434";
    }
  }
  return (
    <>
      <Navbar title="Text Utils" aboutText="About" mode={mode} toggleMode={toggleMode}/>
      <TextBox heading="Input Textarea" mode={mode}/>
      <Footer />
      {/* <About/> */}
    </>
  );
}

export default App;
