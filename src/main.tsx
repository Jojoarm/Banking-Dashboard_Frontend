import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout.tsx';
import AuthLayout from './layouts/AuthLayout.tsx';
import SignIn from './pages/auth/SignIn.tsx';
import Home from './pages/Home.tsx';
import MyBanks from './pages/MyBanks.tsx';
import TransactionHistory from './pages/TransactionHistory.tsx';
import PaymentTransfer from './pages/PaymentTransfer.tsx';

const router = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/my-banks',
        element: <MyBanks />,
      },
      {
        path: '/transaction-history',
        element: <TransactionHistory />,
      },
      {
        path: '/payment-transfer',
        element: <PaymentTransfer />,
      },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: '/sign-in',
        element: <SignIn />,
      },
    ],
  },
]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
