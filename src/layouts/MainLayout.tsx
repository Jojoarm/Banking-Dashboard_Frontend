import MobileNav from '@/components/MobileNav';
import Sidebar from '@/components/Sidebar';
import { useAppContext } from '@/context/AppContext';
import { Navigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
};

const MainLayout = ({ children }: Props) => {
  const { isLoggedIn, currentUser } = useAppContext();

  if (!isLoggedIn) {
    return <Navigate to="/sign-in" replace />;
  }

  return (
    <div className="flex h-screen w-full font-inter">
      <Sidebar user={currentUser} />

      <div className="flex size-full flex-col">
        {/* Mobile nav menu */}
        <div className="root-layout">
          <img src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={currentUser} />
          </div>
        </div>

        {children}
      </div>
    </div>
  );
};

export default MainLayout;
