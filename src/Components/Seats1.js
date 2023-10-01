import React from 'react'

function Seats1(props) {
    console.log(props.seat, props.val)
    let avail =props.val
    let ind = props.index
  return (
    <div>
        <a href={`/details1?seat=${props.seat}`}>
       <div
      style={{
        width: '50px',
        height: '50px',
        backgroundColor: avail === 1 ? 'green' : 'red' ,
        margin: "8px"
      }}
    className={`my-3 ${ind % 10 === 0 ? 'new-line' : ''}`}  >{props.seat} </div>
    </a>
    </div>
  )
}

export default Seats1
