import {
  //   redirect,
  Route,
  BrowserRouter as Router,
  Routes,
} from 'react-router-dom';
// import { useAppContext } from './context/AppContext';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import MyBanks from './pages/MyBanks';
import TransactionHistory from './pages/TransactionHistory';
import PaymentTransfer from './pages/PaymentTransfer';
import AuthLayout from './layouts/AuthLayout';
import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';

const AppRoutes = () => {
  //   const { isLoggedIn } = useAppContext();

  //   console.log(isLoggedIn);

  //   if (!isLoggedIn) {
  //     redirect('/sign-in');
  //   }

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <MainLayout>
              <Home />
            </MainLayout>
          }
        />
        <Route
          path="/my-banks"
          element={
            <MainLayout>
              <MyBanks />
            </MainLayout>
          }
        />
        <Route
          path="/transaction-history"
          element={
            <MainLayout>
              <TransactionHistory />
            </MainLayout>
          }
        />
        <Route
          path="/payment-transfer"
          element={
            <MainLayout>
              <PaymentTransfer />
            </MainLayout>
          }
        />

        <Route
          path="/sign-in"
          element={
            <AuthLayout>
              <SignIn />
            </AuthLayout>
          }
        />
        <Route
          path="/sign-up"
          element={
            <AuthLayout>
              <SignUp />
            </AuthLayout>
          }
        />
        {/* <Route path="*" element={<Navigate to="/" />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
