import AnimatedCounter from './AnimatedCounter';
import DoughnutChart from './DoughnutChart';

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
  totalAvailableBalance,
}: TotalBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        {/* Doughnut Chart */}
        <DoughnutChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Accounts: {totalBanks} </h2>
        <div className="flex flex-col gap-2">
          <p className="total-balance-label">Total Current Balance: </p>
          <div className="total-balance-amount flex-center gap-2 text-blue-700">
            <AnimatedCounter amount={totalCurrentBalance} />
          </div>
          <p className="total-balance-label">Total Available Balance: </p>
          <div className="total-balance-amount flex-center gap-2 text-green-700">
            <AnimatedCounter amount={totalAvailableBalance} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
