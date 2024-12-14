import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./JobPost.css"; // Your custom CSS

export default function JobPost() {
  const [description, setDescription] = useState("");
  const [responsibilities, setResponsibilities] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Job Title Section */}
      <div className="title_tags">
        <div className="title_tage_title">
          <label>
            Job Title:
            <input
              type="text"
              name="jobTitle"
              placeholder="Enter job title"
              required
            />
          </label>
        </div>
        <div className="title_tags_role">
          <label className="tags">
            Tags:
            <input
              type="text"
              name="tags"
              placeholder="Add tags separated by commas"
            />
          </label>
          <label className="job-role">
            Job Role:
            <select name="jobRole">
              <option value="developer">Developer</option>
              <option value="designer">Designer</option>
              <option value="manager">Manager</option>
            </select>
          </label>
        </div>
      </div>

      {/* Salary Section */}
      <h3>Salary</h3>
      <div className="salary-row">
        <div className="salary-input">
          <label>
            Min Salary:
            <div className="input-group">
              <input
                type="number"
                name="minSalary"
                placeholder="Minimum salary"
              />
              <select name="minCurrency">
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
              </select>
            </div>
          </label>
        </div>
        <div className="salary-input">
          <label>
            Max Salary:
            <div className="input-group">
              <input
                type="number"
                name="maxSalary"
                placeholder="Maximum salary"
              />
              <select name="maxCurrency">
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="inr">INR</option>
              </select>
            </div>
          </label>
        </div>
        <label className="salary-type">
          Salary Type:
          <select name="salaryType">
            <option value="monthly">Monthly</option>
            <option value="hourly">Hourly</option>
            <option value="yearly">Yearly</option>
          </select>
        </label>
      </div>

      {/* Advanced Information Section */}
      <h3>Advanced Information</h3>
      <div className="advanced-info">
        <div className="row">
          <label>
            Education:
            <select name="education">
              <option value="bachelors">Bachelors</option>
              <option value="masters">Masters</option>
              <option value="phd">PhD</option>
            </select>
          </label>
          <label>
            Experience:
            <select name="experience">
              <option value="0-1">0-1 Years</option>
              <option value="2-5">2-5 Years</option>
              <option value="5+">5+ Years</option>
            </select>
          </label>
          <label>
            Job Type:
            <select name="jobType">
              <option value="full-time">Full-Time</option>
              <option value="part-time">Part-Time</option>
              <option value="freelance">Freelance</option>
            </select>
          </label>
        </div>
        <div className="row">
          <label>
            Vacancies:
            <input
              type="number"
              name="vacancies"
              placeholder="Number of vacancies"
            />
          </label>
          <label>
            Job Level:
            <select name="jobLevel">
              <option value="entry">Entry Level</option>
              <option value="mid">Mid Level</option>
              <option value="senior">Senior Level</option>
            </select>
          </label>

          <label>
            Expiration Date:
            <input type="date" name="expirationDate" />
          </label>
        </div>
      </div>

      {/* Description & Responsibilities Section */}
      <h3>Description & Responsibilities</h3>
      <label>
        Description:
        <ReactQuill value={description} onChange={setDescription} />
      </label>
      <label>
        Responsibilities:
        <ReactQuill value={responsibilities} onChange={setResponsibilities} />
      </label>

      {/* Submit Button */}
      <button type="submit">Submit Job Post</button>
    </form>
  );
}

// export default JobPost;
