// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();


// 


import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import WidgetGraphContainer from './components/WidgetGraphContainer';
import App from './App';

// Get the root element from the DOM
const rootElement = document.getElementById('root');

// Create a root and render your app
const root = ReactDOM.createRoot(rootElement);
root.render(
  <Provider store={store}>
    <WidgetGraphContainer />
    <App />
  </Provider>
);

