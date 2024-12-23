import React from "react";
import "./SavedCandidate.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faBookmark } from "@fortawesome/free-solid-svg-icons";

const candidates = [
  { id: 1, name: "Guy Hawkins", role: "Technical Support Specialist" },
  { id: 2, name: "Jacob Jones", role: "Product Designer" },
  { id: 3, name: "Cameron Williamson", role: "Marketing Officer" },
  { id: 4, name: "Robert Fox", role: "Marketing Manager" },
  { id: 5, name: "Kathryn Murphy", role: "Junior Graphic Designer" },
  { id: 6, name: "Darlene Robertson", role: "Visual Designer" },
  { id: 7, name: "Kristin Watson", role: "Senior UX Designer" },
  { id: 8, name: "Jenny Wilson", role: "Interaction Designer" },
  { id: 9, name: "Marvin McKinney", role: "Networking Engineer" },
  { id: 10, name: "Theresa Webb", role: "Software Engineer" },
];

const SavedCandidate = () => {
  const currentDate = new Date();
  const dynamicDate = new Date(currentDate);
  dynamicDate.setDate(currentDate.getDate() + 90);
  const formatteDate = dynamicDate.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
  return (
    <div className="saved-candidates-container">
      <header className="header">
        <h3 className="saved-candidates-title">Saved Candidates</h3>
        <p className="saved-candidates-until">
          All of the candidates are visible until <p>{formatteDate}</p>.
        </p>
      </header>
      <div className="candidate-list">
        {candidates.map((candidate) => (
          <div className="candidate" key={candidate.id}>
            <div className="profile-picture"></div>
            <div className="candidate-details">
              <h3>{candidate.name}</h3>
              <p>{candidate.role}</p>
            </div>
            <div className="actions">
              <button className="bookmark">
                <FontAwesomeIcon
                  icon={faBookmark}
                  className="custom-bookmark-icon"
                />
              </button>
              <button className="view-profile">View Profile &rarr;</button>
              <div className="more-options">
                <button className="menu-button">⋮</button>
                <div className="dropdown">
                  <button>Send Email</button>
                  <button>Download CV</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SavedCandidate;
