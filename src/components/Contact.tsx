import React from 'react';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { ContactDiv, ContactIcon } from './ContactStyles';
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons"


function Contact() {

    return (
      <ContactDiv id="contact">
          <a href="mailto:emma.schreifels@gmail.com"><ContactIcon icon={faEnvelope}/></a>
          <a href="https://www.linkedin.com/in/emma-schreifels/"><ContactIcon icon={faLinkedin}/></a>
          <a href="https://github.com/dilEMMA16"><ContactIcon icon={faGithub}/></a>
      </ContactDiv>
    )

}

export default Contact;
