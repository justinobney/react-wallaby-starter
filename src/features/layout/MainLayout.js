import React from 'react';

import AppHeader from './AppHeader';
import Layout from '../../styles/Layout';
import Theme from '../../styles/theme';

const MainLayout = ({children}) => (
  <Theme>
    <AppHeader />
    <Layout.Fill>{children}</Layout.Fill>
  </Theme>
);

export default MainLayout;
