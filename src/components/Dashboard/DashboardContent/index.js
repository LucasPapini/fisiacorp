import React from 'react'

//Styles
import { Container, Title, Language, SubTitle, BoxLeaguage, TextBoxLeaguage, ImagesBosLeaguage, ContainerMensagem, ContentContainerMensagem } from './styles';

//Images/Icons
import iconLearning from '../../../assets/images/dashboard/bandeira.svg';
import iconManRockt from '../../../assets/images/dashboard/iconManRockt.svg';


const DashboardContent = () => {
  return (
    <>
      <Container>
        <Title>Dashboard</Title>
        <Language>
          <SubTitle>Currently Learning</SubTitle>
          <BoxLeaguage>
            <ImagesBosLeaguage src={iconLearning} />
            <TextBoxLeaguage>English</TextBoxLeaguage>
          </BoxLeaguage>
        </Language>
      </Container>
      <ContainerMensagem>
        <img src={iconManRockt} />
        <ContentContainerMensagem>
          <h2>Welcome back, Clarence</h2>
          <p>Ta-da! You're up to date. 🥳</p>
        </ContentContainerMensagem>
      </ContainerMensagem>
    </>
  )
}

export default DashboardContent
