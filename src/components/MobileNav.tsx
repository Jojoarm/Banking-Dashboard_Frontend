import { sidebarLinks } from '@/assets/constants';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@/components/ui/sheet';
import { Link, useLocation } from 'react-router-dom';
import Footer from './Footer';

const MobileNav = ({ user }: MobileNavProps) => {
  const location = useLocation();

  return (
    <section className="w-full max-w-[264px]">
      <Sheet>
        <SheetTrigger>
          <img
            src="/icons/hamburger.svg"
            alt="hamburger menu"
            width={30}
            height={30}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent side="left" className="border-none bg-white">
          <nav className="flex flex-col gap-4">
            <Link to="/" className="flex items-center gap-1 px-4">
              <img src="/icons/logo.svg" alt="Logo" width={34} height={34} />
              <h1 className="text-26 ibm-plex-serif font-bold text-black-1">
                Horizon
              </h1>
            </Link>

            <div className="mobilenav-sheet">
              <SheetClose asChild>
                <nav className="flex h-full flex-col gap-6 pt-16 text-white">
                  {sidebarLinks.map((item) => {
                    const isActive =
                      location.pathname === item.route ||
                      location.pathname.startsWith(`${item.route}/`);
                    return (
                      <SheetClose asChild key={item.route}>
                        <Link
                          to={item.route}
                          key={item.label}
                          // className={cn('sidebar-link', { 'bg-bankGradient': isActive })}
                          className={`mobilenav-sheet_close w-full ${
                            isActive ? 'bg-bankGradient' : ''
                          }`}
                        >
                          <img
                            src={item.imgURL}
                            alt={item.label}
                            width={20}
                            height={20}
                            className={`${
                              isActive ? 'brightness-[3] invert-0' : ''
                            }`}
                          />

                          <p
                            className={`text-16 font-semibold text-black-2 ${
                              isActive ? '!text-white' : ''
                            }`}
                          >
                            {item.label}
                          </p>
                        </Link>
                      </SheetClose>
                    );
                  })}
                  USER
                </nav>
              </SheetClose>
              <Footer user={user} type="mobile" />
            </div>
          </nav>
        </SheetContent>
      </Sheet>
    </section>
  );
};

export default MobileNav;
