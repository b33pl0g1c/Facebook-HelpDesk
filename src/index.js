import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createRoot } from 'react-dom/client';
// import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from '@auth0/auth0-react';


const root = createRoot(document.getElementById('root'));

root.render(
<Auth0Provider
    domain="dev-1vn5l8twdk6hp783.au.auth0.com"
    clientId="AkISQ3by5Jro8VUZrBrLyAtdtX9VoMr4"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
    <App />
  </Auth0Provider>,
);
