import React from 'react';
import { ThemeProvider } from 'styled-components';
import AppTheme from 'components/style/AppTheme';
import { useSelector } from 'react-redux';
import { modeSelector } from 'state/modules/app';
import GlobalStyle from './style/GlobalStyle';

interface Props {
  children: React.ReactNode;
}

const Component: React.FC<Props> = (props: Props) => {
  const mode = useSelector(modeSelector);

  return (
    <ThemeProvider theme={AppTheme[mode]}>
      <GlobalStyle />
      {props.children}
    </ThemeProvider>
  );
};

export default Component;
