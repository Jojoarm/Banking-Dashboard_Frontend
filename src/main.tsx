import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
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
