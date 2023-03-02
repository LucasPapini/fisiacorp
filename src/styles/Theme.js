import React from 'react';
import PropTypes from 'prop-types';

import { ThemeProvider } from 'styled-components';

const theme = {
  colors: {
    azulMenu: '#3D84FF',
    azulTitle: '#103460',
    azulLanguagem: '#192452',
    cinzaText: '#9D9BB6',
  },

  fontSizes: {
    small: '.8rem',
    normal: '1.2rem',
    large: '1.2rem',
    title: '1.8rem',
    subtitle: '1.25rem',
  },

  breakpoints: {
    xs: '0',
    sm: '576px',
    md: '760px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
  },
}


const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

Theme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Theme;
