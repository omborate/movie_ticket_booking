import React, { useEffect, useState } from 'react'
import Seats1 from './Seats1';
import screen from './screen.jpg'


function Arrange1() {
    const itemsPerRow = 10;

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('http://localhost:5000/data/values1')
          .then((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
          .then((jsonData) => {
            setData(jsonData);
            setLoading(false);
          })
          .catch((error) => {
            console.error('Fetch error:', error);
            setLoading(false);
          });
      }, []);
    
  return (
    // <div  style={{ display: 'flex', flexDirection: 'row'}}>
    //     {data.map((items, index) => (

    //          <Seats1 val= {items.value} seat = {items.seat} ind={index}/>
    //     ))}
    // </div>
    <>
    <div className=" my-2"> <img src={screen} alt="" style={{height:'100px', width:'600px' }}/></div>

<div className="container" style={{paddingLeft: '340px'}}>
<div className='d-flex flex-wrap ' style={{height:'100px', width:'700px' }}>
    {data.map((items, index) => {
         return ( <Seats1  val= {items.value} seat = {items.seat} ind={index}/>);
    })}
</div>
</div>
    </>
  );
}

export default Arrange1
