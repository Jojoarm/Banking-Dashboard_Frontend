import { formatAmount } from '@/lib/utils';

const BankInfo = ({ account }: BankInfoProps) => {
  return (
    <div className="hidden sm:flex gap-2 items-center justify-between bg-slate-50 shadow py-4 px-6">
      <div className="flex gap-4 items-center">
        <span className="text-lg sm:text-2xl md:text-3xl font-semibold bg-blue-500 text-white rounded-full p-2 w-10 h-10 flex items-center justify-center">
          {account?.name[0]}
        </span>
        <h2 className=" text-xl line-clamp-1 flex-1 font-bold text-blue-900">
          {account.name}
        </h2>
      </div>
      <div className="flex flex-col gap-1 text-12 sm:text-16 font-medium bg-slate-100 p-4 shadow rounded-lg">
        <div className="flex flex-col sm:flex-row gap-2">
          <p className="font-semibold text-gray-500">Current Balance:</p>
          <p className=" text-blue-700 ">
            {formatAmount(account.currentBalance)}
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-2">
          <p className="font-semibold text-gray-500">Available Balance:</p>
          <p className="text-green-700">
            {formatAmount(account.availableBalance)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BankInfo;
