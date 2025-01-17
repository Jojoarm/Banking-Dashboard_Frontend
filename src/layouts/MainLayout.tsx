import MobileNav from '@/components/MobileNav';
import Sidebar from '@/components/Sidebar';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  const loggedIn = { firstName: 'Dev_Armani', lastName: 'Creates' };
  return (
    <div className="flex h-screen w-full font-inter">
      <Sidebar user={loggedIn} />

      <div className="flex size-full flex-col">
        {/* Mobile nav menu */}
        <div className="root-layout">
          <img src="/icons/logo.svg" width={30} height={30} alt="logo" />
          <div>
            <MobileNav user={loggedIn} />
          </div>
        </div>

        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
