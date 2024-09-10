import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { fetchUsers, selectUserStatus, selectUsers } from '../../features/users/usersSlice';
import TableRow from '../TableRow/TableRow';

const Table = () => {
  const users = useAppSelector(selectUsers);
  const userStatus = useAppSelector(selectUserStatus);

  const dispatch = useAppDispatch();

  useEffect(() => {
    if (userStatus === 'idle') {
      dispatch(fetchUsers());
    }
  }, [userStatus, dispatch]);

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra">
        <thead>
          <tr>
            <th>Number</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            const { id, name, username, email, phone } = user;
            return (
              <TableRow
                key={id}
                number={id}
                name={name}
                username={username}
                email={email}
                phone={phone}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
