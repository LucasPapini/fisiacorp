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
  width: 100%;
  position: relative;
  margin: auto;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    .desktop{
      display: none;
    }
  }

  button {
    background: white;
    border: none;
  }

  .prev,
  .next {
    cursor: pointer;
    position: absolute;
    top: 50%;
    width: auto;
    margin-top: -22px;
    padding: 0.3rem 1rem;
    color: ${(props) => props.theme.colors.azulTitle};
    font-weight: bold;
    transition: 0.6s ease;
    border-radius: 5px;
    user-select: none;
    display: flex;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
      top: 80%;
    }
  }

  .next {
    right: 1rem;
    border-radius: 5px;
  }

  .prev {
    left: 1rem;
  }

  .prev:hover,
  .next:hover {
    background-color: ${(props) => props.theme.colors.azulMenu};
    color: white;
  }

  .fade {
    animation-name: fade;
    animation-duration: 1.5s;
  }

  .dot {
    cursor: pointer;
    height: 15px;
    width: 15px;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
  }

  .dots {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  @keyframes fade {
    from {
      opacity: 0.4;
    }
    to {
      opacity: 1;
    }
  }
`;

export const MySlides = styled.div`
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

export const ContentSlide = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
  gap: 10rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    gap: 1rem;
  }

  h2 {
    color: white;
    font-family: "Nunito", sans-serif;
    font-size: 35px;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
      font-size: 25px;
      gap: 1rem;
    }
  }
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
