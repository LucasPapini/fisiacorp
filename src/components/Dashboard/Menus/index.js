import React from 'react';

import { GiHamburgerMenu } from 'react-icons/gi';

//Styles
import { Container, Buttons, Dropdown } from './styles';

//icons/images
import iconHomeMenu from '../../../assets/images/menu/Home - Iconly---Bold Copy.png';
import iconOptions from '../../../assets/images/menu/segundo.png';
import iconGraphics from '../../../assets/images/menu/graficos.png';
import iconChat from '../../../assets/images/menu/conversa.png';
import iconError from '../../../assets/images/menu/error.png';

const Menus = () => {
  return (
    <Container>
      <Buttons><GiHamburgerMenu size={20} color={'#9EC1FF'} /></Buttons>
      <Buttons><img src={iconHomeMenu} /></Buttons>
      <Buttons><img src={iconOptions} /></Buttons>
      <Buttons><img src={iconError} /></Buttons>
      <Buttons><img src={iconGraphics} /></Buttons>
      <Buttons><img src={iconChat} /></Buttons>
    </Container>
  )
}

export default Menus
