import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
// import EventForm from "./Form";
import NewActivityFormPage from "./NewActivityFormPage";
import Layout from "./Layout";
import "./styles.css";

function LandingPage() {
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);
  const [isCreateClicked, setIsCreateClicked] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogout = () => {
    // Simulate logout logic
    setIsLoggedIn(false);
    setActivities([]);
  };
  const handleCreateActivity = () => {
    try {
      setIsCreateClicked(true);
      navigate("/new-activity");
    } catch (error) {
      console.log("Response from server:", error);
      console.error("Error logging in:", error);
    }

    // setActivities([...activities, newActivity]);
    // setNewActivity(newActivity);
  };
  return (
    <Layout>
      <div className="container">
        {isCreateClicked ? (
          <NewActivityFormPage />
        ) : (
          <div>
            <h1 className="heading">Landing Page</h1>
            <h2 className="subheading">Activities</h2>
            <ul className="list">
              {activities.map((activity, index) => (
                <li className="list-item" key={index}>
                  {activity}
                </li>
              ))}
            </ul>
            <div>
              <button className="button" onClick={handleCreateActivity}>
                Create New Activity
              </button>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default LandingPage;
