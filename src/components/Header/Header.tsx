import { FaUserCircle as UserIcon } from 'react-icons/fa';
import ThemeToggler from '../../ui/ThemeToggler';

const Header = () => {
  return (
    <div className="flex items-center justify-center p-4 sm:justify-between">
      <div className="flex flex-col items-center sm:flex-row">
        <UserIcon
          className="mr-2 mt-1 text-5xl sm:text-3xl"
          data-testid="user-icon"
        />
        <h1 className="text-2xl font-semibold tracking-wide sm:text-3xl">User Management Table</h1>
      </div>
      <ThemeToggler />
    </div>
  );
};

export default Header;
