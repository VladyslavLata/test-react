import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { theme } from './constants/theme';
import { ThemeProvider } from 'styled-components';
import './index.css';
import { ContextProvider } from './context/MyProvider';
import { Provider } from 'react-redux';
import { store } from '../src/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor } from '../src/redux/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <ContextProvider>
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
        </Provider>
      </ContextProvider>
    </ThemeProvider>
  </React.StrictMode>
);
