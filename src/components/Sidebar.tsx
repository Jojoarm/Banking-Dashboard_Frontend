import { sidebarLinks } from '@/assets/constants';
import { cn } from '@/lib/utils';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = ({ user }: SiderbarProps) => {
  const location = useLocation();

  return (
    <section className="sidebar">
      <nav className="flex flex-col gap-4">
        <Link to="/" className="flex mb-12 items-center gap-2">
          <img
            src="/icons/logo.svg"
            alt="Logo"
            width={34}
            height={34}
            className="size-[24px] max-xl:size-14"
          />
          <h1 className="sidebar-logo">Horizon</h1>
        </Link>

        {sidebarLinks.map((item) => {
          const isActive =
            location.pathname === item.route ||
            location.pathname.startsWith(`${item.route}/`);
          return (
            <Link
              to={item.route}
              key={item.label}
              // className={cn('sidebar-link', { 'bg-bankGradient': isActive })}
              className={`sidebar-link ${isActive ? 'bg-bankGradient' : ''}`}
            >
              <div className="relative size-6">
                <img
                  src={item.imgURL}
                  alt={item.label}
                  className={`${isActive ? 'brightness-[3] invert-0' : ''}`}
                />
              </div>
              <p className={`sidebar-label ${isActive ? '!text-white' : ''}`}>
                {item.label}
              </p>
            </Link>
          );
        })}
      </nav>
    </section>
  );
};

export default Sidebar;
