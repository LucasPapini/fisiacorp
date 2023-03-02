import styled from "styled-components";

//Image/icons
import bgContainer from "../../../assets/images/dashboard/header-4@1,5x.svg";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.azulTitle};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: "Nunito", sans-serif;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 25px;
  }
`;

export const Language = styled.div`
  background: white;
  border-radius: 10px;
  width: 300px;
  height: 100px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 0.1rem;

  padding: 20px 40px;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    padding: 0;
    height: 100px;
    width: 200px;
  }
`;

export const SubTitle = styled.h3`
  font-size: ${(props) => props.theme.fontSizes.normal};
  font-family: "Nunito", sans-serif;
  color: ${(props) => props.theme.colors.cinzaText};

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 15px;
  }
`;

export const BoxLeaguage = styled.div`
  display: flex;
  gap: 1rem;
`;

export const TextBoxLeaguage = styled.p`
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: "Nunito", sans-serif;
  color: ${(props) => props.theme.colors.azulLanguagem};
  font-weight: 900;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 22px;
  }
`;

export const ImagesBosLeaguage = styled.img`
  width: 100%;
  height: auto;
`;

export const ContainerMensagem = styled.section`
  height: 145px;
  border-radius: 25px;
  margin-top: 1rem;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  flex: 1;

  background-image: url(${bgContainer});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;

  position: relative;

  img {
    position: absolute;
    bottom: 0;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    position: initial;
    flex-direction: column;
    height: auto;
    padding: 1rem 0;
    gap: 1rem;

    img {
      position: initial;
    }
  }
`;

export const ContentContainerMensagem = styled.div`
  position: absolute;
  left: 18rem;

  h2 {
    color: white;
    font-size: ${(props) => props.theme.fontSizes.title};
    font-family: "Nunito", sans-serif;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: 25px;
    }
  }

  p {
    font-size: ${(props) => props.theme.fontSizes.subtitle};
    font-family: "Nunito", sans-serif;
    color: white;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: 15px;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    position: inherit;
    text-align: center;
    margin-top: 1rem;
  }
`;
