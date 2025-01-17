import HeaderBox from '@/components/HeaderBox';
import RightSideBar from '@/components/RightSideBar';

const Home = () => {
  const loggedIn = {
    firstName: 'Jojo',
    lastName: 'Armani',
    email: 'contact@devarmani.pro',
  };
  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={loggedIn?.firstName || 'Guest'}
            subtext="Access and manage your account and transactions efficiently."
          />
        </header>
      </div>

      <RightSideBar
        user={loggedIn}
        transactions={[]}
        banks={[{ currentBalance: 123.5 }, { currentBalance: 145.8 }]}
      />
    </section>
  );
};

export default Home;
