import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import MainContainer from "./components/MainContainer";

function App() {
  const [isSticky, setSticky] = useState(false);
  const ref = useRef(null);
  const handleScroll = () => {
    setSticky(ref.current.getBoundingClientRect().top <= 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <div className={`sticky-wrapper${isSticky ? " sticky" : ""}`} ref={ref}>
        <Header />
      </div>
      <MainContainer />
    </div>
  );
}

export default App;
