import React from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import Header from "./containers/header";
import Footer from "./containers/footer";
import Home from "./pages/home";
import Background from "./containers/background";

const App = () => {
  return (
    <ParallaxProvider>
      <>
        <Background />
        <Header />
        <Home />
        <Footer />
      </>
    </ParallaxProvider>
  );
};

export default App;