import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import TimePicker from "./TimePicker.js";
import DatePicker from "react-datepicker";
import "./styles.css";
import Layout from "./Layout.js";
// import "react-datepicker/dist/react-datepicker.css";
// import "react-time-picker/dist/TimePicker.css";
// import EventForm from "./Form";

function NewActivityFormPage() {
  class Activity {
    constructor(
      eventName,
      eventDescription,
      eventDate,
      eventTime,
      location,
      audience
    ) {
      this.eventName = eventName;
      this.eventDescription = eventDescription;
      this.eventDate = eventDate;
      this.eventTime = eventTime;
      this.audience = audience;
      this.location = location;
    }
  }
  const navigate = useNavigate();
  const [activities, setActivities] = useState([]);
  const [newActivity, setNewActivity] = useState("");
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  const [eventTime, setEventTime] = useState("12:00");
  const [location, setLocation] = useState("");
  const [audience, setAudience] = useState("");
  const [message, setMessage] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const handleNewActivityChange = (e) => {
    setNewActivity(e.target.value);
  };

  const handleCreateActivity = (e) => {
    e.preventDefault();
    const newActivity = new Activity(
      eventName,
      eventDescription,
      eventDate,
      eventTime,
      location,
      audience
    );
    axios
      .post("http://localhost:5000/new-activity", { newActivity })
      .then((response) => {
        // navigate("/new")
        setActivities([...activities, newActivity]);
        setNewActivity(newActivity);
        setIsCreated(true);
        setMessage(response.data.message);
        setEventName("");
        setEventDescription("");
        setEventDate(new Date());
        setEventTime("12:00");
        setLocation("");
        setAudience("");
        console.log("Response from server:", response);
      })
      .catch((error) => {
        setIsCreated(false);
        console.log("Response from server:", error);
        console.error("Error logging in:", error);
      });
  };

  return (
    // <EventForm />
    // <div>
    //   <h2>Create New Activity</h2>
    //   <input
    //     type="text"
    //     value={newActivity}
    //     onChange={handleNewActivityChange}
    //     placeholder="Enter activity name"
    //   />
    //   <button onClick={handleCreateActivity}>Create</button>
    //   <p>{message}</p>{" "}
    // </div>
    <Layout>
      <div className="form-container">
        <h2 className="form-title">Create New Activity</h2>
        <form className="form">
          <div className="form-group">
            <label htmlFor="eventName" className="form-label">
              Event Name:
            </label>
            <input
              type="text"
              id="eventName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
              placeholder="Enter event name"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventDescription" className="form-label">
              Event Description:
            </label>
            <textarea
              id="eventDescription"
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              placeholder="Enter event description"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventDate" className="form-label">
              Event Date:
            </label>
            <DatePicker
              id="eventDate"
              selected={eventDate}
              onChange={(date) => setEventDate(date)}
              dateFormat="MMMM d, yyyy"
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="eventTime" className="form-label">
              Event Time:
            </label>
            <TimePicker
              id="eventTime"
              value={eventTime}
              onChange={(time) => setEventTime(time)}
              className="form-input"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="location" className="form-label">
              Location:
            </label>
            <select
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="form-select"
              required
            >
              <option value="">Select Location</option>
              <option value="City Plaza Park">City Plaza Park</option>
              <option value="The Forge Garden">The Forge Garden</option>
              <option value="Santa Clara Farmers Market">
                Santa Clara Farmers Market
              </option>
              <option value="Mission Garden">Mission Garden</option>
              <option value="Larry J. Marsalli Park">
                Larry J. Marsalli Park
              </option>
              {/* Add more options as needed */}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="audience" className="form-label">
              Audience:
            </label>
            <select
              id="audience"
              value={audience}
              onChange={(e) => setAudience(e.target.value)}
              className="form-select"
              required
            >
              <option value="">Select Audience</option>
              <option value="kids">Kids</option>
              <option value="adults">Adults</option>
              <option value="all">Open to All</option>
              {/* Add more options as needed */}
            </select>
          </div>
          <button onClick={handleCreateActivity} className="form-button">
            Create
          </button>
          <p className="form-label">{message}</p>{" "}
        </form>
      </div>
    </Layout>
  );
}

export default NewActivityFormPage;
