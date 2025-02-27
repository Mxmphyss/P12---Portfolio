import React from "react";
import Header from "./containers/header";
import Footer from "./containers/footer";
import Home from "./pages/home";
import Background from "./containers/background";

const App = () => {
  return (
    <>
      <Background />
      <Header />
        <Home />
      <Footer />
    </>
  );
};

export default App;
