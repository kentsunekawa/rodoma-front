import React from 'react';
import { Provider } from 'react-redux';
import { render, RenderOptions } from '@testing-library/react';
import { store } from 'state/store';
import Theme from 'components/Theme';

interface Props {
  children?: React.ReactNode;
}

const Component: React.FC<Props> = (props: Props) => (
  <Provider store={store}>
    <Theme>{props.children}</Theme>
  </Provider>
);

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const customRender = (ui: React.ReactElement, options?: Omit<RenderOptions, 'queries'>) =>
  render(ui, { wrapper: Component, ...options });

export * from '@testing-library/react';

export { customRender as render };
