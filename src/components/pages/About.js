import React from "react";
import "./About.css";
import personalPhoto from "../../images/personal-photo.png";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import Footer from "../Footer";


function About() {
  return (
    <div className="background">
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol size="3" className="aboutme border border-3 rounded pt-6 pr-8 border-warning backgroundcard">
              <h1>
                Hi there! <span className="wave myCustomFontSize"> 👋🏾</span>
              </h1>
              <br />
              <img className="circle" src={personalPhoto} alt="Afi"></img>
              <p className="text-center pt-5" style={{ fontSize: "30px" }}> My name is</p>
              <p className="text-center" style={{ fontSize: "35px" }}> Afi Nkhume-Crecy</p>
              <p className="text-center" style={{ fontSize: "22px" }}> (Pronouns: She/her)</p>
              <p className="text-center" style={{ fontSize: "30px" }}> Based out of SF Bay Area</p>
            </MDBCol>
            <MDBCol size="9">
              <h1 className="text-center" style={{ fontSize: "50px" }}>
                About me ...
              </h1>
              <img
                className="image-divider"
                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/101448/wedding-divider-png-9.png"
                alt="divider"
              />
              <p>
                {" "}
                Recently completing the Full Stack Web Designing Bootcamp with
                UC Berkeley, I am a newly trained full-stack developer. While I
                may be new to the field, I bring a fresh perspective and a solid
                foundation in both front-end and back-end development. Prior to
                this, my professional background involved project management and
                healthcare policy. However, I have successfully managed websites
                for various companies, making a successful transition into the
                dynamic world of technology.
              </p>
              <br />
              <p>
                My ambition is to contribute to the development, updates, and
                management of online accessible healthcare system portals,
                ultimately enhancing the accessibility of telehealth services
                for patients. Alongside problem-solving and pseudocode skills, I
                possess a comprehensive understanding of HTML5, CSS, JavaScript
                (ES6), command line, developer tools, Bootstrap, web APIs,
                jQuery, server-side and third-party APIs, Dayjs,
                Insomnia/Postman, AJAX, Fetch, JSON, Git, GitHub, Node.js,
                Express.js, REST API, Heroku, object-oriented programming (OOP),
                TDD, and unit testing with JEST. Despite being new to the field,
                I am enthusiastic about applying my knowledge and skills in
                front-end development to create visually appealing and
                user-friendly interfaces for web applications.
              </p>
              <div className="text-center">
                <h2 style={{ fontSize: "50px" }}>Education & Training</h2>
                <br />
                <p style={{ fontSize: "25px" }}>
                  2016 (B.A. UC Berkeley Major: Public Health)
                </p>
                <br />
                <p style={{ fontSize: "25px" }}>
                  2023 (UC Berkeley Full Stack Web Developer Bootcamp)
                </p>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <div>

      </div>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer/>
    </div>
  );
}

export default About;
