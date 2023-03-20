import React from 'react';
import { AuthProvider } from './auth/context/AuthProvider';
import { AppRouter } from './router/AppRouter';

const CharactersApp = () => {
  return (
    <AuthProvider>

      <AppRouter />
    
    </AuthProvider>
  )
}

export default CharactersApp;
