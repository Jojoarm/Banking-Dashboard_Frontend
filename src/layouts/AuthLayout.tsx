import { useAppContext } from '@/context/AppContext';
import { Navigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: Props) => {
  // const { isLoggedIn } = useAppContext();

  // if (isLoggedIn) {
  //   return <Navigate to="/" replace />;
  // }

  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      {children}
      <div className="auth-asset">
        <div>
          <img
            src="/icons/auth-image.svg"
            alt="Auth image"
            width={500}
            height={500}
          />
        </div>
      </div>
    </main>
  );
};

export default AuthLayout;
