import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import reportWebVitals from './reportWebVitals';
import { store } from './state/store';
import 'fontsource-roboto';
import 'destyle.css';
import App from './App';
import Theme from  './components/Theme';

if(window.location.href.indexOf('isDev') !== -1) {
  console.log('dev');
  localStorage.setItem('isVisited', '');
}

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
