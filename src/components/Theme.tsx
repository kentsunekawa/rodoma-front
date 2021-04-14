import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppTheme from './style/AppTheme';
import { useSelector } from 'react-redux';
import { modeSelector } from 'state/modules/app';
import GlobalStyle from './style/GlobalStyle';

const Theme: React.FC = ({children}) => {

  const mode = useSelector(modeSelector);

  return <ThemeProvider theme={AppTheme[mode]}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
};

export default Theme;