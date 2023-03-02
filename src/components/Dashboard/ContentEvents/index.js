import React from 'react';

//Styles
import { Container, Title, Slider, ContainerSlider, EventsToday, AlertSlider, ContentTextSlider, SubTitleCardEvents, CardEventesToday } from './styles';

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
          <AlertSlider>
            <span>science</span>
          </AlertSlider>
          <ContentTextSlider
            topMobile={'1'}
            leftMobile={'1rem'}
            rigthMobile={''}
            bottomMobile={''}
            topValue={'6rem'}
            leftValue={'5rem'}
            rigthValue={''}
            bottomValue={''}
          >
            <h2>Youth Talent & Education</h2>
          </ContentTextSlider>

          <ContentTextSlider
            topMobile={'1'}
            leftMobile={'1'}
            rigthMobile={'1rem'}
            bottomMobile={''}
            valueMobile={''}
            topValue={'6rem'}
            leftValue={'1'}
            rigthValue={'6rem'}
            bottomValue={''}
          >
            <h2>May, 20</h2>
          </ContentTextSlider>
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
