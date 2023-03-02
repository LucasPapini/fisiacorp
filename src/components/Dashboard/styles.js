import styled from "styled-components";

export const Container = styled.div`
  display: flex;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    flex-direction: column;
  }
`;

export const Siderbar = styled.aside`
  background: ${(props) => props.theme.colors.azulMenu};
  width: 4rem;
  min-height: 100vh;
  overflow: hidden;

  display: flex;
  justify-content: center;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const Main = styled.section`
  flex: 1;
  min-height: 100vh;
  overflow: hidden;
  padding: 2rem 2.5rem;
`;
