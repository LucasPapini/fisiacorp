import React from 'react';

//Styles
import { Container, Title, Slider, ContainerSlider, EventsToday, AlertSlider, ContentTextSlider, SubTitleCardEvents, CardEventesToday, MySlides, ContentSlide } from './styles';

import { VscArrowSmallLeft, VscArrowSmallRight } from "react-icons/vsc";

//Images/icon
import iconCardEventsToday from '../../../assets/images/dashboard/iconCardEventsTOday.svg';

const ContentEvents = () => {
  return (
    <>
      <Container>
        <Title>Events</Title>
      </Container>
      <ContainerSlider>
        <Slider>
          <MySlides>
            <ContentSlide>
              <AlertSlider>
                <span>science</span>
              </AlertSlider>
              <h2 className='desktop'>Youth Talent & <br />Education</h2>
              <h2 className='desktop'>May, 20</h2>
            </ContentSlide>
          </MySlides>
          <button className='prev'><VscArrowSmallLeft size={20} /></button>
          <button className='next'><VscArrowSmallRight size={20} /></button>
        </Slider>
        <EventsToday>
          <SubTitleCardEvents>Events Today</SubTitleCardEvents>
          <CardEventesToday>
            <img src={iconCardEventsToday} />
            <div>
              <p>10:30M</p>
              <strong>Webinar: the bosics of...</strong>
            </div>
          </CardEventesToday>
          <CardEventesToday>
            <img src={iconCardEventsToday} />
            <div>
              <p>10:30M</p>
              <strong>Team Building Activity 🔥</strong>
            </div>
          </CardEventesToday>
        </EventsToday>
      </ContainerSlider>
    </>
  )
}

export default ContentEvents;
