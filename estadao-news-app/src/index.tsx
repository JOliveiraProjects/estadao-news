import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider as ReduxProvider } from 'react-redux';
import { store } from './store/store';
import './index.css';
import HomeScreen from './features/home/screens/home-screen';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ReduxProvider store={store}>
      <HomeScreen />
    </ReduxProvider>
  </React.StrictMode>
);
