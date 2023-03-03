import React from 'react';

import { Container, ProgressOverview, ProgressCard, TitleProgressOverview, ProgressebarOverview, ProgressbarValue, ProgressbarOverviewHours, TitleProgress, CardProgress, BoxCardProgress, ConfirmationAccountBanner } from './styles';


const Progress = () => {

  const data = [
    { name: "Total Webinars", value: 9 },
    { name: "Pending Assignments", value: 0 },
    { name: "Total Units", value: 5 },
    { name: "Total Reading", value: 14 },
    { name: "Total Videos", value: 5 },
  ];

  const boxCards = data.map(({ name, value }) => (
    <BoxCardProgress key={name.toLocaleLowerCase()}>
      <p>{name}</p>
      <span>{value}</span>
    </BoxCardProgress>
  ));

  return (
    <Container>
      <ProgressOverview>
        <TitleProgressOverview>
          Progress Overview
        </TitleProgressOverview>
        <ProgressebarOverview>
          <ProgressbarValue>40%</ProgressbarValue>
        </ProgressebarOverview>
        <div className='ProgressbarOverviewHoursDad'>
          <ProgressbarOverviewHours colorBefore={'#FED200'}>
            <span className='status'>Completed</span>
            <p className='time'>20 <span>Hours</span></p>
          </ProgressbarOverviewHours>
          <div className='division'></div>
          <ProgressbarOverviewHours colorBefore={'#FF794F'}>
            <span className='status'>Left to go</span>
            <p className='time'>30 <span>Hours</span></p>
          </ProgressbarOverviewHours>
        </div>
      </ProgressOverview>

      <ProgressCard>
        <TitleProgress>Progress</TitleProgress>
        <CardProgress>
          {boxCards}
        </CardProgress>
        <ConfirmationAccountBanner>
          <p><strong>Confirm yout account details</strong> Please confirm your email and phone number. 🥵</p>
        </ConfirmationAccountBanner>
      </ProgressCard>
    </Container>
  )
}

export default Progress;
