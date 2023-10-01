import React, {useState,useEffect} from 'react'
import './OpenHeimerUsers.css'

function KgfUsers() {
    // Using the fetch API to fetch data in JSON format
    const[data1,setData1] =useState([])

    useEffect(()=>{
        val()
    },[ ])

    function val(){
fetch('http://localhost:5000/data/kgf')
.then(response => {
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json(); // Parse the response as JSON
})
.then(data => {
  console.log(data); // Process the fetched data here
  setData1(data)
})
.catch(error => {
  console.error('There was a problem with the fetch operation:', error);
});
    }
// console.log(data1)
  return (
    <div className="table-container">
      <h2>Booked ticket of KGF</h2>
      <table className="data-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Seat number</th>
          </tr>
        </thead>
        <tbody>
          {data1.map((item, index) => (
            <tr key={index}>
              <td>{item.name}</td>
              <td>{item.age}</td>
              <td>{item.gender}</td>
              <td>{item.seatValue}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default KgfUsers
