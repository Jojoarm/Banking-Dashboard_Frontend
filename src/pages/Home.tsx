import { accounts, transactions } from '@/assets/assets';
import HeaderBox from '@/components/HeaderBox';
import RecentTransactions from '@/components/RecentTransactions';
import RightSideBar from '@/components/RightSideBar';
import { useAppContext } from '@/context/AppContext';

const Home = () => {
  const { currentUser } = useAppContext();
  // const currentPage = Number(page as string) || 1;
  const defaultDisplay = accounts[0]._id;

  return (
    <section className="home">
      <div className="home-content">
        <header className="home-header">
          <HeaderBox
            type="greeting"
            title="Welcome"
            user={currentUser?.firstName}
            subtext="Access and manage your account and transactions efficiently."
            accounts={accounts}
          />
        </header>

        <RecentTransactions
          transactions={transactions}
          accounts={accounts}
          defaultDisplay={defaultDisplay}
        />
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
