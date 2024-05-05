import React, { useState, useRef } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  redirect,
  Navigate,
} from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import LandingPage from "./Components/LandingPage";
import NewActivityFormPage from "./Components/NewActivityFormPage";
import EventForm from "./Components/Form";

function App() {
  // re
  // redirect= ("/eventlist") => {
  //         window.location.href = 'http://localhost:8080/auth/login';
  //         // maybe can add spinner while loading
  //         return null;
  // }
  //   try {
  //   const [activities, setActivities] = useState([]);
  //   const [newActivity, setNewActivity] = useState("");
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        {/* <Route
          path="/eventlist"
          element={<Navigate to="http://localhost:5000/eventlist" />}
        /> */}
        {/* <Route
          path="/eventlist"
          render={
            (window.location.href = "../../backend/template/example.html")
          }
        /> */}
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/new-activity" element={<NewActivityFormPage />} />
      </Routes>
    </Router>
  );
  //   } catch (error) {
  //     console.log("Error: ", error);
  //   }
}

export default App;
