import React, { useEffect } from 'react';

import Home from '@/pages/home';
import About from '@/pages/about';
import App from '@/App';
import NoFoundPage from '@/pages/common/NoFoundPage';
import { Navigate, useNavigate, useRoutes } from 'react-router-dom';

function Redirect({ to }: any) {
  let navigate = useNavigate();
  useEffect(() => {
    navigate(to);
  });
  return null;
}
const routes = [
  {
    name: '首页',
    path: '/',
    element: <App />,
    children: [
      {
        name: '首页',
        path: '/home',
        element: <Home />,
      },
      {
        name: '关于',
        path: '/about',
        element: <About />,
      },
    ],
  },
  {
    name: '关于',
    path: '/*',
    element: <NoFoundPage />,
  },
];
export default () => useRoutes(routes);
