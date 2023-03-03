import React from 'react';

//Componets
import { ButtonSearchAndFind, Container, InputSearch, Logo, HeaderIcons, HeaderPerfil, Name, Avatar, MenuMobile, SearchMobile, Dropdown, ContentDropdown } from './styles';

//{Imgs, Icons}
import imgLogo from '../../assets/images/Logo.png';
import iconNotification from '../../assets/images/Notification-Iconly---Bold.png';
import iconChat from '../../assets/images/Chat-Iconly---Bold.png';
import iconAvatar from '../../assets/images/Avatar.svg';
import iconArrow from '../../assets/images/Arrow-Down.png';
import icontHumbNotification from '../../assets/images/dashboard/thumb-notification.png';
import { GiHamburgerMenu, } from 'react-icons/gi';



const Header = () => {
  return (
    <>
      <Container>
        <MenuMobile><GiHamburgerMenu size={20} color={'#D8D8D8'} /></MenuMobile>
        <Logo src={imgLogo} />
        <InputSearch placeholder='Search and Find' name='search' />
        <ButtonSearchAndFind>+ add</ButtonSearchAndFind>
        <div id='notification'>
          <HeaderIcons src={iconNotification} tamanhoIcons={'20px'} />
          <Dropdown className='dropbox'>
            <ContentDropdown>
              <img src={icontHumbNotification} />
              <div>
                <p>You have a face to face sta...</p>
                <span>Yesterday, 10:00PM</span>
              </div>
            </ContentDropdown>

            <ContentDropdown>
              <img src={icontHumbNotification} />
              <div>
                <p>You have a face to face sta...</p>
                <span>Yesterday, 10:00PM</span>
              </div>
            </ContentDropdown>

            <ContentDropdown>
              <img src={icontHumbNotification} />
              <div>
                <p>You have a face to face sta...</p>
                <span>Yesterday, 10:00PM</span>
              </div>
            </ContentDropdown>
          </Dropdown>
        </div>
        <HeaderIcons src={iconChat} tamanhoIcons={'23px'} />
        <HeaderPerfil>
          <Name>Clarence Russell</Name>
          <Avatar src={iconAvatar} />
          <HeaderIcons src={iconArrow} tamanhoIcons={'10px'} />
        </HeaderPerfil>
      </Container>
      <SearchMobile><InputSearch placeholder='Search and Find' name='search' /></SearchMobile>
    </>
  )
}

export default Header
