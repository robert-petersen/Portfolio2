import React from "react";
import { ContactContainer, ContactSectionsContainer, ContactLeft, ContactRight, ContactTitle, ContactParagraph, SocialMediaContainer, ContactCopyright, CopyrightText, SocialLink, IconLinkedIn, IconGitHub, IconMedium, CopyRight } from "./ContactElements";

function Contact() {
  return (
    <ContactContainer id="contact">
      <ContactSectionsContainer>
        <ContactLeft>
          <ContactTitle>Contact me</ContactTitle>
          <ContactParagraph>
            If you would like to get in touch with me about job opportunities or to work on a project togeather, feel free to do so by messaging me on <a href="https://www.linkedin.com/in/robert-petersen808/" target="_blank" rel="noreferrer">LinkedIn</a> or by sending an email to my buisness email: <span>robert.petersen808@gmail.com</span>.
          </ContactParagraph>
        </ContactLeft>
        <ContactRight>
          <ContactTitle>Check Out More</ContactTitle>
          <ContactParagraph>
            Check out my social media and projects I've been working here!
          </ContactParagraph>
          <SocialMediaContainer>
            <SocialLink 
              href="https://www.linkedin.com/in/robert-petersen808/" 
              target="_blank" 
              rel="noreferrer"
            >
              <IconLinkedIn />
            </SocialLink>
            <SocialLink 
              href="https://www.linkedin.com/in/robert-petersen808/" 
              target="_blank" 
              rel="noreferrer"
            >
              <IconGitHub />
            </SocialLink>
            <SocialLink 
              href="https://www.linkedin.com/in/robert-petersen808/" 
              target="_blank" 
              rel="noreferrer"
            >
              <IconMedium />
            </SocialLink>
          </SocialMediaContainer>
        </ContactRight>
      </ContactSectionsContainer>
      <ContactCopyright>
        <CopyRight />
        <CopyrightText>
          Robert Petersen 2021
        </CopyrightText>
      </ContactCopyright>
    </ContactContainer>
  );
}

export default Contact;