import styled from "styled-components";

//Imagens
import bgConfirmationAccountBanner from "../../../assets/images/dashboard/Oval+Oval+OvalMask@1,5x.svg";

export const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 5rem;

  padding: 32px 0;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    grid-template-columns: 100%;
    gap: 2rem;
  }
`;

export const ProgressOverview = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  padding: 2rem 1rem;
  border-radius: 10px;
  background: ${(props) => props.theme.colors.azulBg};

  .ProgressbarOverviewHoursDad {
    display: flex;
    gap: 1rem;
    background: #2f4087;
    padding: 1rem;
    border-radius: 10px;
    flex: 1;

    .division {
      width: 1px;
      height: 6vh;
      background: ${(props) => props.theme.colors.cinzaText};
    }
  }
`;

export const TitleProgressOverview = styled.p`
  color: white;
  font-size: 1.5rem;
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  margin-bottom: 0.1rem;
  margin-top: 1.5rem;
`;

export const ProgressebarOverview = styled.span`
  position: relative;
  display: inline-block;
  width: 10rem;
  height: 10rem;
  border-radius: 9rem;
  margin: 1.5rem;
  border: 1rem solid #ff794f;
  box-shadow: inset 0 0 7px grey;
  border-right-color: #fed200;
  border-bottom-color: #fed200;
  text-align: center;
  box-sizing: border-box;
`;

export const ProgressbarValue = styled.span`
  top: 40px;
  position: absolute;
  left: 10px;
  right: 0;
  font-weight: 700;
  font-size: 2rem;
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: "Nunito", sans-serif;
  font-weight: bold;
  color: white;
`;

export const ProgressbarOverviewHours = styled.div`
  display: flex;
  flex-direction: column;

  .status,
  .time {
    color: white;
    font-family: "Nunito", sans-serif;
  }

  .status {
    font-size: ${(props) => props.theme.fontSizes.small};
    display: flex;
    align-items: center;
    gap: 0.3rem;

    &::before {
      content: "";
      width: 10px;
      height: 10px;
      background: ${(props) => props.colorBefore};
      display: block;
      border-radius: 50%;
    }
  }

  .time {
    font-size: ${(props) => props.theme.fontSizes.subtitle};
    font-weight: 700;
    span {
      font-size: ${(props) => props.theme.fontSizes.normal};
      text-transform: lowercase;
      font-weight: 500;
    }
  }
`;

export const ProgressCard = styled.div``;

export const TitleProgress = styled.h2`
  font-family: "Nunito", sans-serif;
  font-size: ${(props) => props.theme.fontSizes.title};
  color: ${(props) => props.theme.colors.azulTitle};
  text-transform: capitalize;
  margin-top: 2rem;
  margin-bottom: 2rem;

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

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    margin-top: 0;
  }
`;

export const CardProgress = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: row;
  }
`;

export const BoxCardProgress = styled.div`
  background: white;
  border-radius: 10px;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  width: 15vw;
  height: 12vh;

  p,
  span {
    font-family: "Nunito", sans-serif;
  }

  p {
    color: ${(props) => props.theme.colors.cinzaText};
    font-size: 1rem;
    font-weight: 800;
    width: 80px;
  }

  span {
    color: ${(props) => props.theme.colors.azulTitle};
    font-size: 2rem;
    font-weight: 700;
  }

  &:last-child{
    background: ${(props) => props.theme.colors.azulBbBG};
    p,span{
      color: white;
    }
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    width: 47%;
  }
`;

export const ConfirmationAccountBanner = styled.div`
  margin-top: 1.5rem;
  border-radius: 10px;
  width: 100%;
  height: 9vh;
  padding: 0 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-image: url(${bgConfirmationAccountBanner});
  background-repeat: no-repeat;
  background-position: inherit;
  background-size: cover;
  position: relative;

  p{
    font-family: "Nunito", sans-serif;
    font-size: ${(props) => props.theme.fontSizes.subtitle};
    color: white;
  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    height: 20vh;
    background-position:inherit;
    text-align: center;
    background-position-x: -5rem;
  }
`;
