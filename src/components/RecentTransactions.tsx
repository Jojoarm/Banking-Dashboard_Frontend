import { Tabs, TabsContent, TabsList, TabsTrigger } from '@radix-ui/react-tabs';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import TransactionsTable from './TransactionsTable';
import BankInfo from './BankInfo';

const RecentTransactions = ({
  transactions,
  accounts,
  defaultDisplay,
}: RecentTransactionsProps) => {
  const [itemId, setItemId] = useState('checking1');

  const recentTransactions = transactions
    .filter((item) => item?.accountId === itemId)
    .slice(0, 10);

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <h1 className="font-semibold text-2xl">Recent Transactions</h1>
        <Link
          className="px-3 py-1 border-2 rounded-md shadow border-gray-200 text-sm text-gray-800"
          to="/transaction-history"
        >
          See All
        </Link>
      </div>

      <Tabs defaultValue={defaultDisplay} className="w-full">
        <TabsList className="recent-transactions-tablist">
          {accounts.map((account) => (
            <TabsTrigger key={account._id} value={account._id}>
              <div
                className={` border-b-2 flex gap-2 px-2 sm:px-4 py-2 transition-all shadow rounded ${
                  itemId === account._id ? ' border-blue-600' : ''
                }`}
                // key={account._id}
                onClick={() => setItemId(account._id)}
              >
                <p
                  className={`text-16 line-clamp-1 flex-1 font-medium ${
                    itemId === account._id ? ' text-blue-600' : 'text-gray-500'
                  }`}
                >
                  {account.name}
                </p>
              </div>
            </TabsTrigger>
          ))}
        </TabsList>
        {accounts.map((account) => (
          <TabsContent
            value={account._id}
            key={account._id}
            className="space-y-4"
          >
            <BankInfo account={account} itemId={itemId} />
            <TransactionsTable transactions={recentTransactions} />
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default RecentTransactions;
