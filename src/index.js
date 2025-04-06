// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ use from 'react-dom/client' for React 18+
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ClerkProvider } from '@clerk/clerk-react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';

const clerkKey = process.env.REACT_APP_CLERK_PUBLISHABLE_KEY;

const root = ReactDOM.createRoot(document.getElementById('root')); // ✅ createRoot method
root.render(
  <React.StrictMode>
    <ClerkProvider publishableKey={clerkKey}>
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </ClerkProvider>
  </React.StrictMode>
);
