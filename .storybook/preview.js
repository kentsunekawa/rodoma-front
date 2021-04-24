import React from 'react';
import { Provider } from 'react-redux';
import Theme from 'components/Theme';
import { store } from 'state/store';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
};

export const decorators = [
  (Story) => (
    <Provider store={store}>
      <Theme>
        <Story />
      </Theme>
    </Provider>
  ),
];
