import React from 'react';
import { MDBCol,MDBCardImage, MDBContainer, MDBRow, MDBBtn } from "mdb-react-ui-kit";
import Footer from "../Footer";
import "./Portfolio.css";
import resumePdf from "../../images/tech-resume.pdf";
import resumeImg from "../../images/Tech-Resume-image.png";
import "./Resume.css";


function Resume() {
    return (
      <div className='background'>
      <MDBContainer>
  <MDBRow>
    <MDBCol size='6'>
      <h1 className="text-center resume_heading">Resume</h1>
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
                      width={"80%"}
                    />
                  </a>
    </MDBCol>
    <MDBCol size='6' >
      <h1 className="text-center skills">Skills</h1>
        <div >
          <MDBBtn >HTML</MDBBtn>
          <MDBBtn >Javascript</MDBBtn>
          <MDBBtn >CSS </MDBBtn>
          <MDBBtn >Git</MDBBtn>
          <MDBBtn>React</MDBBtn>
        </div>

        <div>
          <MDBBtn>Node.js</MDBBtn>
          <MDBBtn>Express.js</MDBBtn>
          <MDBBtn>MongoDB</MDBBtn>
          <MDBBtn>GraphQL</MDBBtn>
        </div>
        <div>
          <MDBBtn>Heroku</MDBBtn>
          <MDBBtn>MVC Framework</MDBBtn>
          <MDBBtn>Insomnia</MDBBtn>
        </div>
        <div>

          <MDBBtn>Web API's</MDBBtn>
          <MDBBtn>Server-Side API's</MDBBtn>
          <MDBBtn>MERN</MDBBtn>
          </div>
          <MDBBtn>SQL</MDBBtn>
          <MDBBtn>Python</MDBBtn>
      </MDBCol>
      </MDBRow>
</MDBContainer>
      <Footer/>
  </div>
    )
}

export default Resume;