import { useState, useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchUsers } from '../../features/users/usersSlice';
import { selectUserStatus, selectUsers } from '../../features/users/usersSlice';
import Header from '../../components/Header/Header';
import Table from '../../components/Table/Table';
import Filter from '../../components/Filter/Filter';
import FailedFetch from '../../components/FailedFetch/FailedFetch';
import Loading from '../../components/Loading/Loading';

const Users = () => {
  const userStatus = useAppSelector(selectUserStatus);
  const users = useAppSelector(selectUsers);

  const [filter, setFilter] = useState('');
  const [filterType, setFilterType] = useState('name');
  const [filteredUsers, setFilteredUsers] = useState(users);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(fetchUsers());
    }
  }, [userStatus, dispatch]);

  useEffect(() => {
    const newFilteredUsers = users.filter((user) => {
      const searchTerm = filter.toLowerCase();
      if (filterType === 'name') {
        return user.name.toLowerCase().includes(searchTerm);
      } else if (filterType === 'username') {
        return user.username.toLowerCase().includes(searchTerm);
      } else if (filterType === 'email') {
        return user.email.toLowerCase().includes(searchTerm);
      } else if (filterType === 'phone') {
        return user.phone.toLowerCase().includes(searchTerm);
      }
      return false;
    });
    setFilteredUsers(newFilteredUsers);
  }, [filter, filterType, users]);

  return (
    <div className="container h-screen rounded-lg shadow-2xl sm:h-auto">
      <Header />
      <div className="mx-4 h-[1px] bg-slate-600" />
      <Filter
        filter={filter}
        filterType={filterType}
        setFilterType={setFilterType}
        setFilter={setFilter}
      />
      <div className="flex items-center justify-center">
        {userStatus === 'loading' && <Loading />}
        {userStatus === 'failed' && <FailedFetch />}
      </div>
      <Table users={filteredUsers} />
    </div>
  );
};

export default Users;
