import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  padding-top: 32px;
  margin-bottom: 32px;
`;

export const ButtonArrow = styled.button`
  background: #e5e4ee;
  border: none;
  color: ${(props) => props.theme.colors.azulTitle};
  margin-left: 5px;
  border-radius: 5px;
  flex: 1;
`;

export const Title = styled.h2`
  color: ${(props) => props.theme.colors.azulTitle};
  font-size: ${(props) => props.theme.fontSizes.title};
  font-family: "Nunito", sans-serif;

  display: flex;
  align-items: center;
  gap: 1rem;

  &::after {
    content: "";
    height: 0.2rem;
    width: 79vw;
    background: #e8e8ee;
    display: block;
    border-radius: 30px;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.xl}) {
      width: 70vw;
    }

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
      width: 50vw;
    }


    @media screen and (max-width: ${(props) => props.theme.breakpoints.sm}) {
      width: 40vw;
    }

  }

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    font-size: 25px;
  }
`;

export const AccordionButtons = styled.button`
  width: 100%;
  height: 10vh;
  background: white;
  border-radius: 10px;

  border: none;
  padding: 0 1rem;
  margin-bottom: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  div{
    display: flex;
    align-items: center;
    gap: 1.5rem;

    p{
      font-family: "Nunito", sans-serif;
      color: ${(props) => props.theme.colors.cinzaText};
      strong{
        color: #3D84FF;
      }
    }
  }

  i img{
    transform: rotate3d(0, 0, 1, 270deg);
    width: 10px;

    @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
  }
`;
