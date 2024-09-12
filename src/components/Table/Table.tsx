import { type TableProps } from './Table.type';
import { useFetchUsers } from '../../hooks/useFetchUsers';
import { FaUserAltSlash as NoUserIcon } from 'react-icons/fa';
import TableRow from '../TableRow/TableRow';

const Table = ({ users }: TableProps) => {
  const { userStatus } = useFetchUsers();

  return (
    <div className="overflow-x-auto rounded-lg">
      {userStatus === 'succeeded' && (
        <>
          {/* Display Collapsable Cards On Small Screen */}
          <div className="mx-2 block space-y-2 md:hidden">
            {users.map((user) => {
              const { id, name, username, email, phone } = user;
              return (
                <div
                  key={id}
                  className="collapse collapse-arrow rounded-sm bg-base-200 shadow-md"
                >
                  <input
                    type="radio"
                    name="my-accordion-1"
                    defaultChecked
                  />
                  <div className="collapse-title text-xl font-medium">{name}</div>
                  <div className="collapse-content text-sm">
                    <p>
                      <b>Number:</b> {id}
                    </p>
                    <p>
                      <b>Name:</b> {name}
                    </p>
                    <p>
                      <b>Username:</b> {username}
                    </p>
                    <p>
                      <b>Email:</b> {email}
                    </p>
                    <p>
                      <b>Phone:</b> {phone}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* Display Table On Large Screen */}
          <table className="table table-zebra hidden md:table">
            <thead>
              <tr>
                <th>Number</th>
                <th>Name & City</th>
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
        </>
      )}
      {users.length === 0 && userStatus === 'succeeded' && (
        <div className="flex flex-col items-center justify-center py-6">
          <NoUserIcon size={50} />
          <p className="text-2xl">No users found</p>
        </div>
      )}
    </div>
  );
};

export default Table;
