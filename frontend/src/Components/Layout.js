import React from "react";
import backgroundImage from "./background_image.jpg"; // Import your background image

const layoutStyle = {
  backgroundImage: `url(${backgroundImage})`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  minHeight: "100vh", // Ensure that the background covers the entire viewport
  padding: "20px", // Add padding as needed
};

const Layout = ({ children }) => {
  return <div style={layoutStyle}>{children}</div>;
};

export default Layout;
