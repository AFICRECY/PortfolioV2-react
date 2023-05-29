import React from 'react';
import { MDBCol ,MDBContainer, MDBRow} from 'mdb-react-ui-kit';
function About() {
    return (
        <div>
            <h1 class="text-center">About</h1>
            <MDBContainer>
                <MDBRow>
                    <MDBCol size='3'>
                    //--Imaage section
                    </MDBCol>
                    <MDBCol size='9' >
                    //--About section text
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    )
}

export default About;