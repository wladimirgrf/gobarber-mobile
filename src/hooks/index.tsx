import React from 'react';

import { AuthProvider } from './auth';

const AppProvider: React.FunctionComponent = ({ children }) => (
  <AuthProvider>{children}</AuthProvider>
);

export default AppProvider;
