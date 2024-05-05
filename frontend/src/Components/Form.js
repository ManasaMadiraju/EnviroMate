import React, { useState } from "react";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//import TimePicker from 'react-time-picker';
// import "react-time-picker/dist/TimePicker.css";
import "./styles.css"; // Import the CSS file
import TimePicker from "./TimePicker.js";
import Layout from "./Layout.js";

function EventForm() {
  const [message, setMessage] = useState("");
  const [isCreated, setIsCreated] = useState(false);
  const [eventName, setEventName] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [eventDate, setEventDate] = useState(new Date());
  const [eventTime, setEventTime] = useState("12:00");
  const [location, setLocation] = useState("");
  const [audience, setAudience] = useState("");

  const [activity, setActivity] = useState({
    eventName: "",
    eventDescription: "",
    eventDate: new Date(),
    eventTime: "12:00",
    location: "",
    audience: "",
  });

  const handleSubmit = (event) => {
    axios
      .post("http://localhost:5000/new-activity", JSON.stringify(activity), {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        // navigate("/new")
        // setActivities([...activities, newActivity]);
        // setNewActivity(newActivity);
        // setIsCreated(true);
        setMessage(response.data.message);
        console.log("Response from server:", response);
      })
      .catch((error) => {
        setIsCreated(false);
        console.log("Response from server:", error);
        console.error("Error logging in:", error);
      });
    // event.preventDefault();
    console.log("Form submitted:", {
      eventName,
      eventDate,
      eventTime,
      location,
      audience,
    });
  };

  return (
    <Layout>
      <div className="form-container">
        <h2 className="form-title">Event Form</h2>
        <form onSubmit={handleSubmit} className="form">
          <div className="form-group">
            <label htmlFor="eventName" className="form-label">
              Event Name:
            </label>
            <input
              type="text"
              id="eventName"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
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
              <option value="">Select Park Location</option>
              <option value="City Plaza Park">City Plaza Park</option>
              <option value="The Forge Garden">The Forge Garden</option>
              <option value="Santa Clara Farmers Market">
                Santa Clara Farmers Market
              </option>
              <option value="Mission Garden">Mission Garden</option>
              <option value="Larry J. Marsalli Park">
                Larry J. Marsalli Park
              </option>
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
            </select>
          </div>
          <button type="submit" className="form-button">
            Submit
          </button>
        </form>
      </div>
    </Layout>
  );
}

export default EventForm;

// import React, { useState, useRef } from "react";
// import { useNavigate } from "react-router-dom";
// import DatePicker from "react-datepicker";
// import axios from "axios";
// import "react-datepicker/dist/react-datepicker.css";
// //import TimePicker from 'react-time-picker';
// import "react-time-picker/dist/TimePicker.css";
// import "./styles.css"; // Import the CSS file
// import TimePicker from "./TimePicker.js";

// function EventForm() {
//   //   class Activity {
//   //     constructor(
//   //       eventName,
//   //       eventDescription,
//   //       eventDate,
//   //       eventTime,
//   //       location,
//   //       audience
//   //     ) {
//   //       this.eventName = eventName;
//   //       this.eventDescription = eventDescription;
//   //       this.eventTime = eventTime;
//   //       this.eventDate = eventDate;
//   //       this.location = location;
//   //       this.audience = audience;
//   //     }
//   //   }

//   //   const navigate = useNavigate();
//   //   const [activities, setActivities] = useState([]);
//   //   const [newActivity, setNewActivity] = useState("");
//   const [eventName, setEventName] = useState("");
//   const [eventDescription, setEventDescription] = useState("");
//   const [eventDate, setEventDate] = useState(new Date());
//   const [eventTime, setEventTime] = useState("12:00");
//   const [location, setLocation] = useState("");
//   const [audience, setAudience] = useState("");

//   //   const [message, setMessage] = useState("");
//   //   const [isCreated, setIsCreated] = useState(false);
// //   const [formData, setFormData] = useState({
// //     eventName: "",
// //     eventDescription: "",
// //     eventDate: "",
// //     eventTime: "",
// //     location: "",
// //     audience: "",
// //   });

// //   const navigate = useNavigate();
// //   const [activities, setActivities] = useState([]);
// //   const [newActivity, setNewActivity] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [isCreated, setIsCreated] = useState(false);

// //   const handleNewActivityChange = (e) => {
// //     setNewActivity(e.target.value);
// //   };

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // const newActivity = new Activity(
//     //   formData.eventName,
//     //   formData.eventDescription,
//     //   formData.eventDate,
//     //   formData.eventTime,
//     //   formData.location,
//     //   formData.audience
//     // );
//     // axios
//     //   .post("http://localhost:5000/new-activity", { newActivity })
//     //   .then((response) => {
//     //     setNewActivity(newActivity);
//     //     setIsCreated(true);
//     //     setMessage(response.data.message);
//     //     console.log("Response from server:", response);
//     //   })
//     //   .catch((error) => {
//     //     setIsCreated(false);
//     //     console.log("Response from server:", error);
//     //     console.error("Error logging in:", error);
//     //   });
//     // console.log("Form submitted:", {
//     //   eventName,
//     //   eventDescription,
//     //   eventDate,
//     //   eventTime,
//     //   location,
//     //   audience,
//     // });
//   };

// //   const handleCreateActivity = () => {
// //     axios
// //       .post("http://localhost:5000/new-activity", { newActivity })
// //       .then((response) => {
// //         // navigate("/new")
// //         setActivities([...activities, newActivity]);
// //         setNewActivity(newActivity);
// //         setIsCreated(true);
// //         setMessage(response.data.message);
// //         console.log("Response from server:", response);
// //       })
// //       .catch((error) => {
// //         setIsCreated(false);
// //         console.log("Response from server:", error);
// //         console.error("Error logging in:", error);
// //       });
// //   };

//   return (
//     // <div>
//     //   <h2>Create New Activity</h2>
//     //   <input
//     //     type="text"
//     //     value={newActivity}
//     //     onChange={handleNewActivityChange}
//     //     placeholder="Enter activity name"
//     //   />
//     //   <button onClick={handleCreateActivity}>Create</button>
//     //   <p>{message}</p>{" "}
//     // </div>
//     <div className="form-container">
//       <h2 className="form-title">Event Form</h2>
//       <form onSubmit={handleSubmit} onChange={setFormData} className="form">
//         <div className="form-group">
//           <label htmlFor="eventName" className="form-label">
//             Event Name:
//           </label>
//           <input
//             type="text"
//             id="eventName"
//             value={eventName}
//             onChange={(e) => setEventName(e.target.value)}
//             className="form-input"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="eventDescription" className="form-label">
//             Event Description:
//           </label>
//           <textarea
//             id="eventDescription"
//             value={eventDescription}
//             onChange={(e) => setEventDescription(e.target.value)}
//             className="form-textarea"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="eventDate" className="form-label">
//             Event Date:
//           </label>
//           <DatePicker
//             id="eventDate"
//             selected={eventDate}
//             onChange={(date) => setEventDate(date)}
//             dateFormat="MMMM d, yyyy"
//             className="form-input"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="eventTime" className="form-label">
//             Event Time:
//           </label>
//           <TimePicker
//             id="eventTime"
//             value={eventTime}
//             onChange={(time) => setEventTime(time)}
//             className="form-input"
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="location" className="form-label">
//             Location:
//           </label>
//           <select
//             id="location"
//             value={location}
//             onChange={(e) => setLocation(e.target.value)}
//             className="form-select"
//             required
//           >
//             <option value="">Select Park Location</option>
//             <option value="City Plaza Park">City Plaza Park</option>
//             <option value="The Forge Garden">The Forge Garden</option>
//             <option value="Santa Clara Farmers Market">
//               Santa Clara Farmers Market
//             </option>
//             <option value="Mission Garden">Mission Garden</option>
//             <option value="Larry J. Marsalli Park">
//               Larry J. Marsalli Park
//             </option>
//           </select>
//         </div>
//         <div className="form-group">
//           <label htmlFor="audience" className="form-label">
//             Audience:
//           </label>
//           <select
//             id="audience"
//             value={audience}
//             onChange={(e) => setAudience(e.target.value)}
//             className="form-select"
//             required
//           >
//             <option value="">Select Audience</option>
//             <option value="kids">Kids</option>
//             <option value="adults">Adults</option>
//             <option value="all">Open to All</option>
//           </select>
//         </div>
//         <button type="submit" className="form-button">
//           Submit
//         </button>
//       </form>
//       {/* <p>{message}</p>{" "} */}
//     </div>
//   );
// }

// export default EventForm;
