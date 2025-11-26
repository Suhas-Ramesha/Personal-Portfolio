import React, { useRef, useState } from "react";
import styled from "styled-components";
import emailjs from '@emailjs/browser';

// Initialize EmailJS
emailjs.init("U5_W4mQFYIYizsH1w");

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;
  z-index: 1;
  align-items: center;
`;

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  gap: 12px;
`;

const Title = styled.div`
  font-size: 52px;
  text-align: center;
  font-weight: 600;
  margin-top: 20px;
  color: ${({ theme }) => theme.text_primary};
  @media (max-width: 768px) {
    margin-top: 12px;
    font-size: 32px;
  }
`;

const Desc = styled.div`
  font-size: 18px;
  text-align: center;
  font-weight: 600;
  color: ${({ theme }) => theme.text_secondary};
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ContactForm = styled.form`
  width: 95%;
  display: flex;
  flex-direction: column;
  background-color: rgba(17, 25, 40, 0.83);
  border: 1px solid rgba(255, 255, 255, 0.125);
  padding: 32px;
  border-radius: 12px;
  box-shadow: rgba(23, 92, 230, 0.1) 0px 4px 24px;
  margin-top: 28px;
  gap: 12px;
`;

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary + 50};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`;

const ContactButton = styled.button`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: hsla(271, 100%, 50%, 1);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.text_primary};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  pointer-events: "auto"
`;

const SuccessMessage = styled.div`
  margin-top: 20px;
  color: green;
  font-weight: 600;
`;

const Contact = () => {
  const form = useRef();
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form submitted");

    try {
      const result = await emailjs.sendForm(
        'service_0mtad0w', 
        'template_vpchisd', 
        form.current,
        'U5_W4mQFYIYizsH1w' 
      );

      if (result.text === 'OK') {
        console.log("Message sent successfully");
        setSuccess(true);
        form.current.reset();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <Container>
      <Wrapper>
        <Title>Contact Us</Title>
        <Desc>We would love to hear from you!</Desc>
        <ContactForm ref={form} onSubmit={handleSubmit}>
          <ContactInput type="text" name="name" placeholder="Your Name" required />
          <ContactInput type="email" name="email" placeholder="Your Email" required />
          <ContactInputMessage name="message" placeholder="Your Message" rows="4" required />
          <ContactButton type="submit">Send Message</ContactButton>
          {success && <SuccessMessage>Your message has been sent successfully!</SuccessMessage>}
        </ContactForm>
      </Wrapper>
    </Container>
  );
};

export default Contact;