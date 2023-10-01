import React ,{useState}from 'react'
import httpClient from '../httpClient'
import './Register.css'
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBIcon
}
from 'mdb-react-ui-kit';


function Register() {
  const[email,setemail] =useState()
  const[password,setpassword] = useState()


  async function Submit() {
    try {
      const response = await httpClient.post("//localhost:5000/register", {
        email,
        password,
      });
      console.log(response)
      console.log(response.data)
      console.log(response.data.message)
      if (response && response.data && response.data.message) {
        const check = response.data.message;
        const check1 = response.data.error;
        console.log(check1)
        if(check1 === "user already exist") 
        {
          alert("user already exist")
        }
        else if(check1 === "email and password are requied")
            {
              alert("email and password are requied")
            }
        if (check === "Registration successful") {
          alert("Successful registration");
          window.location.href = '/login';
        }
         else {
          alert("Username or password was not entered properly");
        }
      } else {
        alert("Invalid response from the server");
      }
    } catch (error) {
      console.error('Error:', error);
      alert("An error occurred during registration");
    }
  }
  

    
  
  return (
    <>
     
        <MDBContainer fluid>

<MDBRow className='d-flex justify-content-center align-items-center h-100'>
  <MDBCol col='12'>

    <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
      <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

        <h2 className="fw-bold mb-2 text-uppercase">Register</h2>
        <p className="text-white-50 mb-5">Please enter your login and password!</p>

        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg1' type='email' value={email} onChange={(e)=>setemail(e.target.value)} size="lg"/>
        <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg2' type='password' value={password} onChange={(e)=>setpassword(e.target.value)} size="lg"/>

        <MDBBtn outline className='mx-2 px-5' onClick={()=>Submit()} color='white' size='lg'>
          Register
        </MDBBtn>

        <div className='d-flex flex-row mt-3 mb-5'>
          <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='facebook-f' size="lg"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='twitter' size="lg"/>
          </MDBBtn>

          <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
            <MDBIcon fab icon='google' size="lg"/>
          </MDBBtn>
        </div>

        <div>
          <p className="mb-0">Already have an account? <a href="/login" class="text-white-50 fw-bold">Sign In </a></p>

        </div>
      </MDBCardBody>
    </MDBCard>

  </MDBCol>
</MDBRow>

</MDBContainer>
    </>
  )
}

export default Register
