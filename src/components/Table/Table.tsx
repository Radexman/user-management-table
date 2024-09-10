import { type TableProps } from './Table.types';
import TableRow from '../TableRow/TableRow';

const Table = ({ users }: TableProps) => {
  return (
    <div className="overflow-x-auto rounded-lg">
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
