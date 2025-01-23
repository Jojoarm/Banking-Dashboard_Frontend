import HeaderBox from '@/components/HeaderBox';
import RightSideBar from '@/components/RightSideBar';
import { useAppContext } from '@/context/AppContext';

const Home = () => {
  const { currentUser } = useAppContext();

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={currentUser?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
        </header>
      </div>

      <RightSideBar
        user={currentUser}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 145.8 }]}
      />
    </section>
  );
};

export default Home;
