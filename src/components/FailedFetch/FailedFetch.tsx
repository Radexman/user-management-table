import { IoIosWarning as WarningIcon } from 'react-icons/io';

const FailedFetch = () => {
  return (
    <div className="flex flex-col items-center py-6">
      <WarningIcon size={75} />
      <h2 className="text-2xl">Oops!</h2>
      <p>Failed to fetch users</p>
    </div>
  );
};

export default FailedFetch;
