import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  grid-template-columns: auto;
  gap: 0;

  position: fixed;
`;

export const Buttons = styled.button`
  background: transparent;
  border: none;
  padding: 1rem 22px;
  transition: background .3s;

  &:hover{
    background: #005DFF;
  }
`;
