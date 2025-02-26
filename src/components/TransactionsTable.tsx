import { formatAmount } from '@/lib/utils';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from './ui/table';

const TransactionsTable = ({ transactions }: TransactionHistoryTableProps) => {
  return (
    <Table>
      <TableHeader className="bg-gray-100">
        <TableRow className=" font-bold">
          <TableHead className="px-2">Transaction</TableHead>
          <TableHead className="px-2">Amount</TableHead>
          <TableHead className="px-2">Status</TableHead>
          <TableHead className="px-2">Date</TableHead>
          <TableHead className="px-2 max-md:hidden">Channel</TableHead>
          <TableHead className="px-2 max-md:hidden">Category</TableHead>
        </TableRow>
      </TableHeader>

      <TableBody>
        {transactions.map((transaction: Transaction) => {
          const amount = formatAmount(transaction.amount);
          const isDebit = transaction.type === 'debit';
          const isCredit = transaction.type === 'credit';

          return (
            <TableRow
              key={transaction._id}
              className={`${isDebit ? 'bg-red-50' : 'bg-green-50'}`}
            >
              <TableCell>
                <h2 className="text-14 truncate font-semibold text-[#344054]">
                  {transaction.name}
                </h2>
              </TableCell>

              <TableCell
                className={`pl-2 pr-10 font-semibold ${
                  isDebit || amount[0] === '-'
                    ? 'text-red-500'
                    : 'text-green-500'
                }`}
              >
                {isDebit ? `-${amount}` : isCredit ? amount : amount}
              </TableCell>

              <TableCell
                className={`capitalize ${
                  transaction.status === 'success'
                    ? 'text-green-500'
                    : transaction.status === 'declined'
                    ? 'text-red-500'
                    : 'text-gray-500'
                }`}
              >
                <p>{transaction.status}</p>
              </TableCell>

              <TableCell className="min-w-32 pl-2 pr-10">
                {transaction.date}
              </TableCell>

              <TableCell className="pl-2 pr-10 capitalize min-w-24 max-md:hidden">
                {transaction.paymentChannel}
              </TableCell>

              <TableCell className="pl-2 pr-10 capitalize min-w-24 max-md:hidden">
                {transaction.category}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default TransactionsTable;
