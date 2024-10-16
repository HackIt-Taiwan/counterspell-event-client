// ContactInfo Component
// Displays contact information in a styled card layout, ensuring full-width responsiveness.

import React from 'react';
import styled from 'styled-components';

// Styled component for the contact card, ensuring full-width on all screens.
const ContactCard = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 20px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// Styled component for the title of the contact card.
const Title = styled.h3`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 10px;
  font-family: 'Arial', sans-serif;
`;

// Styled component for the contact details text.
const ContactDetails = styled.p`
  font-size: 1rem;
  color: #555;
  text-align: center;
  margin-bottom: 5px;
`;

// Wrapper to center the contact card and ensure full-width responsiveness.
const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContactInfo: React.FC = () => {
  return (
    <Wrapper>
      <ContactCard>
        <Title>Contact Us</Title>
        <ContactDetails>Email: counterspell@hackit.tw</ContactDetails>
        <ContactDetails>Instagram: @hackit.tw</ContactDetails>
      </ContactCard>
    </Wrapper>
  );
};

export default ContactInfo;
