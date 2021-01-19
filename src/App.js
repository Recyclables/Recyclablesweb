import React, { Fragment } from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/pages/HomePage/Home";
import Contact from "./components/pages/ContactPage/Contact";
import Faq from "./components/pages/HelpPage/Help";
import About from "./components/pages/AboutPage/About";
import Privacy from "./components/pages/PrivacyPage/Privacy";
import Terms from "./components/pages/TermsPage/Terms";
import ScrollToTop from "./components/ScrollToTop";
import "./App.css";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Fragment>
          <ScrollToTop />
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about-us" component={About} />
            <Route path="/help" component={Faq} />
            <Route path="/contact-us" component={Contact} />
            <Route path="/privacy" component={Privacy} />
            <Route path="/terms" component={Terms} />
          </Switch>
          <Footer />
        </Fragment>
      </BrowserRouter>
    </>
  );
};

export default App;
