// src/App.jsx
import React from 'react';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import AppRoutes from './routes/routes'; // Import your routes

const App = () => {
  return (
    <Provider store={store}>
      <AppRoutes />
    </Provider>
  );
};

export default App;
