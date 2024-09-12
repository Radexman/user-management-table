import { useAppSelector } from '../../app/hooks';
import { selectFilter, selectFilterType } from '../../features/filter/filterSlice';
import { useFetchUsers } from '../../hooks/useFetchUsers';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import Filter from '../../components/Filter/Filter';
import FailedFetch from '../../components/FailedFetch/FailedFetch';
import Loading from '../../components/Loading/Loading';

const Users = () => {
  const { users, userStatus } = useFetchUsers();
  const filter = useAppSelector(selectFilter);
  const filterType = useAppSelector(selectFilterType);

  const filteredUsers = users.filter((user) => {
    const searchTerm = filter.toLowerCase();
    switch (filterType) {
      case 'name':
        return user.name.toLowerCase().includes(searchTerm);
      case 'username':
        return user.username.toLowerCase().includes(searchTerm);
      case 'email':
        return user.email.toLowerCase().includes(searchTerm);
      case 'phone':
        return user.phone.toLowerCase().includes(searchTerm);
      default:
        return false;
    }
  });

  return (
    <div className="container relative h-screen rounded-lg shadow-2xl sm:h-auto">
      <Header />
      <div className="mx-4 h-[1px] bg-slate-600" />
      <Filter />
      <div className="flex items-center justify-center">
        {userStatus === 'loading' && <Loading />}
        {userStatus === 'failed' && <FailedFetch />}
      </div>
      {userStatus === 'succeeded' && <Table users={filteredUsers} />}
    </div>
  );
};

export default Users;
