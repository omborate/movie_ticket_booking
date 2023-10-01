import React, { useState } from 'react';
import "./Details.css";
import axios from 'axios';
import screen from './screen.jpg'
import httpClient from '../httpClient';


function Details1() {
  const urlParams = new URLSearchParams(window.location.search);
  const seatValue = urlParams.get('seat');

//   console.log(`Selected seat: ${seatValue}`);

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'male',
    "seat" :seatValue

  });
  let name1 = formData["name"];
  let age1 = formData["age"];
  let gender1 = formData["gender"];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    handlePatch();
    console.log(`types of give ${typeof(formData)}`);
    console.log(seatValue)
    console.log(formData)
    let records = await httpClient.post("http://localhost:5000/addkgf", {
      name1,
      age1,
      gender1,
      seatValue,
    })
    alert("You have sucessfully booked your ticket")
    window.location.href="/arrange1"
  };
//   let total = {formData,seatValue}
  const handlePatch = () => {
    const patchData = {
      id: seatValue, 
      patchOperation: [
        { op: 'replace', path: '/value', value: formData },
      ],
    };

    axios
      .patch(`http://localhost:5000/update1/${patchData.id}`, patchData.patchOperation)
      .then((response) => {
        // console.log(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="container cardT" style={{ width: '24%', padding: '16px' }}>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input
            type="number"
            id="age"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            required
          >
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="form-group">
          <button type="submit" className="btn">Submit</button>
        </div>
      </form>
    </div>
  );
}

export default Details1;
