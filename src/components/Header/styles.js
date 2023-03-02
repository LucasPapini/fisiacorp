import styled from "styled-components";

export const Container = styled.nav`
  width: 100%;
  height: 80px;
  background: white;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  padding: 0 1rem;
  box-shadow: 0px 4px 4px rgb(0 0 0 / 4%);

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    input {
      display: none;
    }
    button {
      display: none;
    }
    p {
      display: none;
    }
  }
`;

export const Logo = styled.img`
  width: 140px;
  height: 40px;
  cursor: pointer;
`;

export const InputSearch = styled.input`
  background: #f5f5fb;
  border: none;
  height: 40px;
  flex: 1;
  padding: 0 0.5rem;
  border-radius: 0.234rem;

  &::placeholder {
    color: #9d9bb6;
    font-family: "Nunito", sans-serif;
    font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

export const ButtonSearchAndFind = styled.button`
  background: #3d84ff;
  border: none;
  padding: 1rem 1.5rem;
  border-radius: 1rem;

  color: white;
  text-transform: uppercase;
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.small};
  }

  &:hover {
    background: transparent;
    border: 2px solid #3d84ff;
    color: #3d84ff;
  }
`;

export const HeaderIcons = styled.img`
  width: ${(props) => props.tamanhoIcons};
  height: auto;
  cursor: pointer;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: none;
  }
`;

export const HeaderPerfil = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const Name = styled.p`
  font-family: "Nunito", sans-serif;
  color: #3e3a6f;
  font-size: ${(props) => props.theme.fontSizes.small};
  }
`;

export const Avatar = styled.img`
  width: 50px;
  height: 50px;
  cursor: pointer;
`;

export const MenuMobile = styled.div`
  display: none;

  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: block;
    cursor: pointer;
  }
`;

export const SearchMobile = styled.div`
  display: none;
  @media screen and (max-width: ${(props) => props.theme.breakpoints.md}) {
    display: block;
    padding: 1rem;
    background: #f9f9fc;
    display: flex;
    align-items: center;
    border-top: 1px solid rgba(0, 0, 0, 4%);

    input {
      background: #f4f4fb;
    }
  }
`;
