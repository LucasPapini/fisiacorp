import React from 'react';

//Components
import Activity from './Activity';
import ContentEvents from './ContentEvents';
import DashboardContent from './DashboardContent';
import Menus from './Menus';
import Progress from './Progress';

//Styles
import { Container, Siderbar, Main } from './styles';

const Dashboard = () => {
  return (
    <Container>
      <Siderbar>
        <Menus />
      </Siderbar>
      <Main>
        <DashboardContent />
        <ContentEvents />
        <Activity />
        <Progress />
      </Main>
    </Container>
  )
}

export default Dashboard
