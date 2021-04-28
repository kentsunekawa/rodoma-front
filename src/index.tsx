import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from 'state/store';
import Theme from 'components/Theme';
import reportWebVitals from 'reportWebVitals';

import 'fontsource-roboto';
import App from 'App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Theme>
        <Router>
          <App />
        </Router>
      </Theme>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
