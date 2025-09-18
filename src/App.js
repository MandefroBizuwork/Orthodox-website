import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Legal from "./Pages/Legal";
import NotFound from "./Pages/NotFound";
import Appointment from "./Pages/Appointment";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js"; 
import Courses from "./Components/Courses";
import CommonLayout from "./Components/SharedLayout/CommonLayout";
import NewsSection from "./Components/NewsSection";

function App() {
  return (
    <div className="App">
      {/* ✅ Router wrapper is required */}
            {/* <Router basename="/Sundayschool"></Router> */}
      <Router>
        <Routes>
          <Route path="/" element={<CommonLayout />}>
            <Route index element={<Home />} />
            <Route path="courses" element={<Courses />} />
              <Route path="NewsSection" element={<NewsSection />} />            
            <Route path="legal" element={<Legal />} />
            <Route path="appointment" element={<Appointment />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
