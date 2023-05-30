import React from 'react';
import { MDBCol,MDBCardImage, MDBContainer, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import "./Portfolio.css";
function Resume() {
    return (
      <div>
      <MDBContainer>
          <MDBRow>
              <MDBCol size='6'>
                <h1 class="text-center">Resume</h1>
                <MDBCardImage className='CardBody' src='https://mdbootstrap.com/img/new/standard/nature/184.webp' position='top' alt='...' />
                
              </MDBCol>
              <MDBCol size='6'  >
                <h1 class="text-center">Skills</h1>
                <MDBRow className='skillsRow' >
                    <MDBCol size="2">
                        
                    </MDBCol>
 
                    <MDBCol size="2">
                        <MDBBtn >HTML</MDBBtn>
                    </MDBCol>
                    <MDBCol size="3">
                        <MDBBtn >Javascript</MDBBtn>
                    </MDBCol>
                    <MDBCol size="2">
                        <MDBBtn >CSS</MDBBtn>
                    </MDBCol>
                </MDBRow>
                <MDBRow>
                   <MDBCol size="3">
                        
                        </MDBCol>
     
                    <MDBCol size="3">
                        <MDBBtn >Javascript</MDBBtn>
                    </MDBCol>
                    <MDBCol size="2">
                        <MDBBtn >HTML</MDBBtn>
                    </MDBCol>
                        
                </MDBRow>
              </MDBCol>
          </MDBRow>
      </MDBContainer>
  </div>
    )
}

export default Resume;