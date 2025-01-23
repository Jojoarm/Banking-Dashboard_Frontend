import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
// import {
//   createBrowserRouter,
//   RouterProvider,
//   useNavigate,
// } from 'react-router-dom';
// import MainLayout from './layouts/MainLayout.tsx';
// import AuthLayout from './layouts/AuthLayout.tsx';
// import SignIn from './pages/auth/SignIn.tsx';
// import Home from './pages/Home.tsx';
// import MyBanks from './pages/MyBanks.tsx';
// import TransactionHistory from './pages/TransactionHistory.tsx';
// import PaymentTransfer from './pages/PaymentTransfer.tsx';
// import SignUp from './pages/auth/SignUp.tsx';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ToastContainer } from 'react-toastify';
import { AppContextProvider } from './context/AppContext.tsx';
import AppRoutes from './AppRoutes.tsx';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
    },
  },
});

// const { isLoggedIn } = useAppContext();
// const navigate = useNavigate();

//   if (!isLoggedIn) {
//     navigate('/sign-in');
//   }

// const router = createBrowserRouter([
//   {
//     element: <MainLayout />,
//     children: [
//       {
//         path: '/',
//         element: <Home />,
//       },
//       {
//         path: '/my-banks',
//         element: <MyBanks />,
//       },
//       {
//         path: '/transaction-history',
//         element: <TransactionHistory />,
//       },
//       {
//         path: '/payment-transfer',
//         element: <PaymentTransfer />,
//       },
//     ],
//   },
//   {
//     element: <AuthLayout />,
//     children: [
//       {
//         path: '/sign-in',
//         element: <SignIn />,
//       },
//       {
//         path: '/sign-up',
//         element: <SignUp />,
//       },
//     ],
//   },
// ]);

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AppContextProvider>
        <AppRoutes />
        <ToastContainer position="bottom-right" />
      </AppContextProvider>
    </QueryClientProvider>
  </StrictMode>
);
