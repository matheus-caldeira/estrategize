import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyle from './styles/global';
import AppProvider from './hooks';
import Routes from './routes';

const App: React.FC = () => {
  return (
    <AppProvider>
      <BrowserRouter>
        <Routes />
        <GlobalStyle />
      </BrowserRouter>
    </AppProvider>
  );
};

export default App;
