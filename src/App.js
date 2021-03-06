import Aos from "aos";
import React, { useState, useEffect, useLayoutEffect } from "react";
import { Route, Switch, useLocation } from "react-router-dom";
import Dropdown from "./Components/Dropdown";
import Navbar from "./Components/Navbar";
import GlobalStyle from "./globalStyles";
import Home from "./Pages";
// import "aos/dist/aos.css";
// import "antd/dist/antd.css";
// import "./App.css";

import Footer from "./Components/Footer";
import ScrollToTop from "./Components/ScrollToTop";
import ContactPage from "./Pages/ContactPage";
import TeamMembers from "./Pages/TeamMembers";
import Testing from "./Pages/Testing";
import What from "./Pages/What";
function App() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div className="App">
      <GlobalStyle />
      <Navbar toggle={toggle} />
      <Dropdown toggle={toggle} isOpen={isOpen} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Contact" component={ContactPage} />
        <Route path="/Who" component={TeamMembers} />
        <Route path="/What" component={What} />
      </Switch>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
