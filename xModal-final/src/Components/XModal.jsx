import React, { useState } from "react";
import "./xmodal.css";

const XModal = ({ setIsOpenModal, setOpenModalBackground }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone: "",
    dob: "",
  });

  const handleClick = () => {
    setIsOpenModal(false);
    setOpenModalBackground(false);
    setFormData((prevData) => ({
      ...prevData,
      username: "",
      email: "",
      phone: "",
      dob: "",
    }));
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [id]: value }));
  };

  const validationCheck = () => {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      window.alert(
        "Invalid email. Your email address should be in the format:- text@text.text"
      );
      return;
    }

    if (formData.phone.length < 10) {
      window.alert(
        "Invalid phone number. Please enter a 10-digit phone number."
      );
      return;
    }

    const inputDate = new Date(formData.dob);
    const currentDate = new Date();
    if (inputDate > currentDate) {
      window.alert(
        "Invalid date of birth. Date of birth cannot be in the future."
      );
      return;
    }
  };

  return (
    <div className="modalBackground" onClick={handleClick}>
      <div
        className="modalContainer"
        onClick={(e) => {
          e.stopPropagation();
        }}
      >
        <div className="modalHeader">
          <h1>Fill Details</h1>
        </div>
        <div className="modalBody">
          <form onSubmit={validationCheck}>
            <label htmlFor="username">
              <h3>Username: </h3>
            </label>
            <input
              type="text"
              id="username"
              value={formData.username}
              onChange={handleChange}
              required
            />

            <label htmlFor="email">
              <h3>Email Address: </h3>
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <label htmlFor="phone">
              <h3>Phone Number: </h3>
            </label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />

            <label htmlFor="dob">
              <h3>Date of Birth: </h3>
            </label>
            <input
              type="date"
              id="dob"
              value={formData.dob}
              onChange={handleChange}
              required
            />
            <div>
              <button type="submit" className="submitButton">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default XModal;
