import React from 'react';
import ReactDOM from 'react-dom/client';

// Redux-store
import { Provider } from 'react-redux';
import store from './redux/store';

// Toast notify
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// App
import App from 'components/App';

// Styles
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer autoClose={1500} />
  </React.StrictMode>
);
