import { FaUserCircle as UserIcon } from 'react-icons/fa';
import ThemeToggler from '../../ui/ThemeToggler';

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <div className="flex items-center justify-center">
        <UserIcon
          size={28}
          className="mr-2 mt-1"
        />
        <h1 className="font-semiobold text-2xl tracking-wide sm:text-3xl">User Management Table</h1>
      </div>
      <ThemeToggler />
    </div>
  );
};

export default Header;
