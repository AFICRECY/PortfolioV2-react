import React from 'react';
import { MDBCol,MDBCardImage, MDBContainer, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import Footer from "../Footer";
import "./Portfolio.css";
import resumePdf from "../../images/tech-resume.pdf";
import resumeImg from "../../images/Tech-Resume-image.png";


function Resume() {
    return (
      <div className='background'>
      <MDBContainer>
  <MDBRow>
    <MDBCol size='6'>
      <h1 className="text-center">Resume</h1>
      <a
                    href={resumePdf}
                    target="_blank"
                    rel="noreferrer"
                    download='Afi-resume'
                  >
                    <img
                      src={resumeImg}
                      alt="resume"
                      className='text-center ml-4'
                    />
                  </a>
    </MDBCol>
    <MDBCol size='6'>
      <h1 className="text-center">Skills</h1>
      <MDBRow className='skillsRow'>
        <MDBCol size="2"></MDBCol>
        <MDBCol size="3">
          <MDBBtn>HTML</MDBBtn>
        </MDBCol>
        <MDBCol size="4">
          <MDBBtn>Javascript</MDBBtn>
        </MDBCol>
        <MDBCol size="1">
          <MDBBtn>CSS </MDBBtn>
        </MDBCol>
      </MDBRow>
      <MDBRow className='skillsRow'>
        
        <MDBCol size="2">
          <MDBBtn>Git</MDBBtn>
        </MDBCol>
        <MDBCol size="3">
          <MDBBtn>Node.js</MDBBtn>
        </MDBCol>
        <MDBCol size="4">
          <MDBBtn>Express.js</MDBBtn>
        </MDBCol>
        <MDBCol size="3">
          <MDBBtn>MongoDB</MDBBtn>
        </MDBCol>
      </MDBRow>
      <MDBRow className='skillsRow'>
        <MDBCol size="2"></MDBCol>
        <MDBCol size="3">
          <MDBBtn>GraphQL</MDBBtn>
        </MDBCol>
        <MDBCol size="2">
          <MDBBtn>Heroku</MDBBtn>
        </MDBCol>
      </MDBRow>
      <MDBRow className='skillsRow'>
        <MDBCol size="2"></MDBCol>
        <MDBCol size="7">
          <MDBBtn>MVC Framework</MDBBtn>
        </MDBCol>
        <MDBCol size="1">
          <MDBBtn>SQL</MDBBtn>
        </MDBCol>
      </MDBRow>
      <MDBRow>
        <MDBCol size="2">
          <MDBBtn>Insomnia</MDBBtn>
        </MDBCol>
        <MDBCol size="2"></MDBCol>
        <MDBCol size="2">
          <MDBBtn>Web API's</MDBBtn>
        </MDBCol>
        <MDBCol size="3">
          <MDBBtn>Server-Side API's</MDBBtn>
        </MDBCol>
        <MDBCol size="2">
          <MDBBtn>MERN</MDBBtn>
        </MDBCol>
        <MDBCol size="3">
          <MDBBtn>Python</MDBBtn>
        </MDBCol>
        <MDBCol size="3">
          <MDBBtn>React</MDBBtn>
        </MDBCol>
      </MDBRow>
    </MDBCol>
  </MDBRow>
</MDBContainer>
      <Footer/>
  </div>
    )
}

export default Resume;