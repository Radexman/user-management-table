import { useAppSelector } from '../../app/hooks';
import { selectUserStatus } from '../../features/users/usersSlice';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';

const Users = () => {
  const userStatus = useAppSelector(selectUserStatus);

  return (
    <div className="container h-screen rounded-lg bg-secondary-content shadow-2xl sm:h-auto">
      <Header />
      <h2>
        {userStatus === 'loading' && 'Loading...'}
        {userStatus === 'failed' && 'Failed to fetch users'}
      </h2>
      <Table />
    </div>
  );
};

export default Users;
