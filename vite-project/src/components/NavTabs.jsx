import React from "react";
import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container">
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav ml-0"
            style={{
              listStyle: "none", // Remove bullets
              padding: 0, // Remove default padding
              margin: 0, // Remove default margin
              display: "flex", // Make the items flex containers
            }}
          >
            <li className="nav-item">
              <Link
                to="/"
                className={currentPage === "/" ? "nav-link active" : "nav-link"}
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#fff",
                  textTransform: "uppercase",
                  textDecoration: "none", // Remove underline
                  marginRight: "20px", // Add spacing between links
                }}
              >
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Portfolio"
                className={
                  currentPage === "/About" ? "nav-link active" : "nav-link"
                }
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#fff",
                  textTransform: "uppercase",
                  textDecoration: "none", // Remove underline
                  marginRight: "20px", // Add spacing between links
                }}
              >
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Contact"
                className={
                  currentPage === "/Gallery" ? "nav-link active" : "nav-link"
                }
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#fff",
                  textTransform: "uppercase",
                  textDecoration: "none", // Remove underline
                  marginRight: "20px", // Add spacing between links
                }}
              >
                Contact
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/Resume"
                className={
                  currentPage === "/Contact" ? "nav-link active" : "nav-link"
                }
                style={{
                  fontFamily: "Poppins, sans-serif",
                  fontSize: "20px",
                  fontWeight: "bold",
                  color: "#fff",
                  textTransform: "uppercase",
                  textDecoration: "none", // Remove underline
                  marginRight: "20px", // Add spacing between links
                }}
              >
                Resume
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NavTabs;
