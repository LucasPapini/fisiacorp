import styled from "styled-components";

//Image/icons
import bgContainerSlide from "../../../assets/images/dashboard/3000434.png";

export const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 32px;
  margin-bottom: 32px;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.azulTitle};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: "Nunito", sans-serif;
`;

export const ContainerSlider = styled.section`
  display: grid;
  flex: 1;
  grid-template-columns: 2fr 1fr;
  gap: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 100%;
  }
`;

export const Slider = styled.div`
  background-image: url(${bgContainerSlide});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  position: relative;
  height: 260px;
  border-radius: 30px;

  display: flex;

  position: relative;
`;

export const AlertSlider = styled.div`
  position: absolute;
  right: 1.5rem;
  top: 1rem;

  span {
    background: #3d84ff;
    padding: 0.5rem 1.5rem;
    border-radius: 30px;
    color: white;
    text-transform: uppercase;
    font-family: "Nunito", sans-serif;
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

export const ContentTextSlider = styled.div`
  position: absolute;
  top: ${(props) => props.topValue || 0};
  left: ${(props) => props.leftValue || 0};
  right: ${(props) => props.rigthValue || 0};
  bottom: ${(props) => props.bottomValue || 0};
  max-width: 200px;

  h2 {
    color: white;
    font-family: "Nunito", sans-serif;
    font-size: ${(props) => props.theme.fontSizes.title};

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: 25px;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    top: ${(props) => props.topMobile || 0};
    left: ${(props) => props.leftMobile || 0};
    right: ${(props) => props.rigthMobile || 0};
    bottom: ${(props) => props.bottomMobile || 0};
  }
`;

export const EventsToday = styled.div`
  flex: 1;
`;

export const CardEventesToday = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 0.5rem;
  background: white;
  height: 110px;
  border-radius: 20px;

  img {
    width: 50px;
    height: 50px;
    margin-left: 1rem;
  }

  div {
    display: flex;
    flex-direction: column;

    p {
      font-size: ${(props) => props.theme.fontSizes.small};
      font-family: "Nunito", sans-serif;
      color: ${(props) => props.theme.colors.cinzaText};
      font-weight: 700;
    }
    strong {
      font-size: ${(props) => props.theme.fontSizes.normal};
      font-family: "Nunito", sans-serif;
      font-weight: bold;
    }
  }
`;

export const SubTitleCardEvents = styled.h2`
  font-family: "Nunito", sans-serif;
  font-size: ${(props) => props.theme.fontSizes.subtitle};
  color: ${(props) => props.theme.colors.azulTitle};
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 1rem;

  &::after {
    content: "";
    flex: 1;
    height: 0.2rem;
    background: #e8e8ee;
    display: block;
    border-radius: 30px;
  }
`;
