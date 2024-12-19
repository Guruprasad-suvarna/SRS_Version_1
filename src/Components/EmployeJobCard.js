import React from "react";
import "./EmployeJobCard.css";

const EmployeJobCard = ({
  jobTitle,
  type,
  status,
  applications,
  daysRemaining,
  expired,
}) => {
  return (
    <tr>
      <td>
        <div className="Employe-job-details">
          <p className="Employe_job_title">{jobTitle}</p>

          <span className="Employe_job_dur">
            {type} • {daysRemaining}
          </span>
        </div>
      </td>
      <td className={`status ${expired ? "expired" : "active"}`}>{status}</td>
      <td>{applications} Applications</td>
      <td>
        <button className="view-applications">View Applications</button>
      </td>
    </tr>
  );
};

export default EmployeJobCard;
