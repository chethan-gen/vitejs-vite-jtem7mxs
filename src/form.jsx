import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

const Form = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: "",
    director: "",
    genre: "",
    releaseYear: "",
    synopsis: "",
    posterImageUrl: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Movie added:", formData);
    alert("Movie submitted successfully!");
  };

  return (
    <div className="form-container">
      <h2>Add a New Movie</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
        />

        <label htmlFor="director">Director:</label>
        <input
          type="text"
          id="director"
          name="director"
          value={formData.director}
          onChange={handleChange}
          required
        />

        <label htmlFor="genre">Genre:</label>
        <select
          id="genre"
          name="genre"
          value={formData.genre}
          onChange={handleChange}
          required
        >
          <option value="">Select a genre</option>
          <option value="Action">Action</option>
          <option value="Comedy">Comedy</option>
          <option value="Drama">Drama</option>
          <option value="Horror">Horror</option>
          <option value="Sci-Fi">Sci-Fi</option>
        </select>

        <label htmlFor="releaseYear">Release Year:</label>
        <input
          type="number"
          id="releaseYear"
          name="releaseYear"
          value={formData.releaseYear}
          onChange={handleChange}
          required
        />

        <label htmlFor="synopsis">Synopsis:</label>
        <textarea
          id="synopsis"
          name="synopsis"
          value={formData.synopsis}
          onChange={handleChange}
          required
        />

        <label htmlFor="posterImageUrl">Poster Image URL:</label>
        <input
          type="url"
          id="posterImageUrl"
          name="posterImageUrl"
          value={formData.posterImageUrl}
          onChange={handleChange}
          required
        />

        <div className="form-buttons">
          <button type="submit">Submit</button>
          <button type="button" onClick={() => navigate("/dashboard")}>Cancel</button>
        </div>

      </form>
    </div>
  );
};

export default Form;
