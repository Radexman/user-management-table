import type { TableRowProps } from './TableRow.types';

const TableRow = ({ number, name, username, email, phone }: TableRowProps) => {
  return (
    <tr>
      <th>{number}</th>
      <td className="font-semibold">{name}</td>
      <td>{username}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
};

export default TableRow;
