import React from 'react';

import { Container, Title, ButtonArrow, AccordionButtons } from './styles';

import { VscArrowRight } from "react-icons/vsc";
import iconPeoplo from '../../../assets/images/dashboard/ic-followers.png';
import iconEvents from '../../../assets/images/dashboard/ic-events.png';
import iconArrow from '../../../assets/images/Arrow-Down.png';

const Activity = () => {
  return (
    <>
      <Container>
        <Title>Activity</Title>
        <ButtonArrow><VscArrowRight size={15} /></ButtonArrow>
      </Container>
      <AccordionButtons>
        <div>
          <img src={iconPeoplo} />
          <p>You have news 5 followers including <strong>Kathy Crawford</strong> and <strong> Piper Shaw</strong></p>
        </div>
        <i><img src={iconArrow} /></i>
      </AccordionButtons>

      <AccordionButtons>
        <div>
          <img src={iconEvents} />
          <p>3 new events were added to you calendar</p>
        </div>
        <i><img src={iconArrow} /></i>
      </AccordionButtons>

      <AccordionButtons>
        <div>
          <img src={iconPeoplo} />
          <p>You have news 3 pending readings to complete 😎</p>
        </div>
        <i><img src={iconArrow} /></i>
      </AccordionButtons>
    </>
  )
}

export default Activity;
