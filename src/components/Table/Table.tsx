import { type TableProps } from './Table.types';
import { useAppSelector } from '../../app/hooks';
import { FaUserAltSlash as NoUserIcon } from 'react-icons/fa';
import { selectUserStatus } from '../../features/users/usersSlice';
import TableRow from '../TableRow/TableRow';

const Table = ({ users }: TableProps) => {
  const userStatus = useAppSelector(selectUserStatus);

  return (
    <div className="overflow-x-auto rounded-lg">
      {userStatus === 'succeeded' && (
        <table className="table table-zebra">
          {users.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-6">
              <NoUserIcon size={50} />
              <p className="text-2xl">No users found</p>
            </div>
          ) : (
            <thead>
              <tr>
                <th>Number</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Phone</th>
              </tr>
            </thead>
          )}
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
      )}
    </div>
  );
};

export default Table;
