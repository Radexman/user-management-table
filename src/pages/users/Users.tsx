import { useAppSelector } from '../../app/hooks';
import { selectUserStatus } from '../../features/users/usersSlice';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import FailedFetch from '../../components/FailedFetch/FailedFetch';
import Loading from '../../components/Loading/Loading';

const Users = () => {
  const userStatus = useAppSelector(selectUserStatus);

  return (
    <div className="container h-screen rounded-lg bg-secondary-content shadow-2xl sm:h-auto">
      <Header />
      <div className="mx-4 h-[1px] bg-slate-600" />
      <div className="flex items-center justify-center">
        {userStatus === 'loading' && <Loading />}
        {userStatus === 'failed' && <FailedFetch />}
      </div>
      <Table />
    </div>
  );
};

export default Users;
