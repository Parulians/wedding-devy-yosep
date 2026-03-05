import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Invitation from "./component/Invitation";
import Home from "./component/Home";
import Date from "./component/Date";
import OurJourney from "./component/OurJourney";
import Gallery from "./component/Gallery";
import WeddingWish from "./component/WeddingWish";
import CountTheDate from "./component/CountTheDate";
import ScrollToTop from "./component/ScrollToTop";
import { AudioProvider } from "./component/AudioContext";

const App = () => {
  return (
    <AudioProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Invitation />} />
          <Route path="/home" element={<Home />} />
          <Route path="/ourJourney" element={<OurJourney />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/date" element={<Date />} />
          <Route path="/weddingWish" element={<WeddingWish />} />
          <Route path="/countTheDate" element={<CountTheDate />} />
        </Routes>
      </Router>
    </AudioProvider>
  );
};

export default App;
