import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <div>
      <h1>Side Bar</h1>
      <Outlet />
    </div>
  );
};

export default MainLayout;
