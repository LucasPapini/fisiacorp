import React from 'react';

//Components
import Activity from './Activity';
import ContentEvents from './ContentEvents';
import DashboardContent from './DashboardContent';
import Menus from './Menus';

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
      </Main>
    </Container>
  )
}

export default Dashboard
