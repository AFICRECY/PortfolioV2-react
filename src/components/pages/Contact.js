import React from "react";
import "./Contact.css";
import { MDBCol, MDBContainer, MDBRow } from "mdb-react-ui-kit";
import { MDBInput } from "mdb-react-ui-kit";
import { MDBTextArea } from "mdb-react-ui-kit";
import { MDBBtn } from "mdb-react-ui-kit";
import linkedInLogo from "../../images/linkedin.png";
import githubLogo from "../../images/github.png";
import mediumLogo from "../../images/medium.png";

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <div>
        <MDBContainer>
          <MDBRow>
            <MDBCol size="9">
              <div>
                <h3>Name:</h3>
                <MDBInput label="Name" id="typeText" type="text" />
                <h3>Email:</h3>
                <MDBInput label="Email" id="typeEmail" type="email" />
                <h3>Message:</h3>
                <MDBTextArea label="Message" id="textAreaExample" rows={4} />
                <MDBBtn type="submit">Submit form</MDBBtn>
              </div>
            </MDBCol>
            <MDBCol size="3">
              <div>
                <h2>Reach Out!</h2>
                <p>
                  {" "}
                  Whether you want to get in touch, talk about a project
                  collaboration, or just say hi, I'd love to hear from you.
                </p>
                <div className="image-icons-container text-center">
                  <a
                    href="https://www.linkedin.com/in/afi-nkhume-crecy-932862128/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      src={linkedInLogo}
                      alt="logo"
                      className="stacked-icon"
                    />
                  </a>
                  <a
                    href="https://github.com/AFICRECY"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={githubLogo} alt="logo" className="stacked-icon" />
                  </a>
                  <a
                    href="https://medium.com/@aficrecy"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={mediumLogo} alt="logo" className="stacked-icon" />
                  </a>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}

export default Contact;
