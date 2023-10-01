import React from 'react'
import m1 from './movie1.jpg'
import kgf from './kgf.jpg'
import jawan1 from './jawan1.jpg'



function Landing() {
  return (
    <>
   
 <div className="container ">

 <div class="container text-center">
  <div class="row">
    <div class="col">
    <div className="card my-4" style={{ width: '18rem'}}>
      <img src={m1}style={{ height: '320px'}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">OPENHEIMER</h5>
        <p className="card-text">
        Based on the 2005 biography American Prometheus by Kai Bird and Martin J. Sherwin, ...
        </p>
        <a href="/arrange" className="btn btn-primary">
          Book Ticket
        </a>
      </div>
    </div>
    </div>
    <div class="col">
    <div className="card my-4" style={{ width: '18rem'}}>
      <img src={kgf} style={{ height: '320px'}}className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">KGF</h5>
        <p className="card-text">
        Chapter 2 is a 2022 Indian Kannada-language period action film written and directed...
        </p>
        <a href="/arrange1" className="btn btn-primary">
        Book Ticket
        </a>
      </div>
    </div>
    </div>
    <div class="col">
    <div className="card my-4" style={{ width: '18rem'}}>
      <img src={jawan1} style={{ height: '320px'}} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">JAWAN</h5>
        <p className="card-text">
        Jawan ( transl. Soldier) is a 2023 Indian Hindi-language action thriller film co-written...
        </p>
        <a href="/" className="btn btn-primary">
        Book Ticket
        </a>
      </div>
    </div>
    </div>
  </div>
</div>




 </div>
    </>
  )
}

export default Landing
