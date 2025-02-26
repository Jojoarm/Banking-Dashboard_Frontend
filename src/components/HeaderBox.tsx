import { formatAmount } from '@/lib/utils';
import TotalBalanceBox from './TotalBalanceBox';

const HeaderBox = ({
  type = 'title',
  title,
  subtext,
  user,
  accounts,
}: HeaderBoxProps) => {
  const currentBalance = accounts
    .map((item) => item.currentBalance)
    .reduce((a, b) => a + b);

  const availableBalance = accounts
    .map((item) => item.availableBalance)
    .reduce((a, b) => a + b);

  return (
    <div className="header-box">
      <h1 className="header-box-title">
        {title}
        {type === 'greeting' && (
          <span className="text-bankGradient">&nbsp;{user}</span>
        )}
      </h1>
      <p className="header-box-subtext">{subtext}</p>

      <TotalBalanceBox
        accounts={[]}
        totalBanks={accounts.length}
        totalCurrentBalance={currentBalance}
        totalAvailableBalance={availableBalance}
      />
    </div>
  );
};

export default HeaderBox;
