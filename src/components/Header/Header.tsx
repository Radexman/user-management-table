import ThemeToggler from '../../ui/ThemeToggler';

const Header = () => {
  return (
    <div className="flex items-center justify-between p-4">
      <h1 className="font-semiobold text-3xl tracking-wide">User Management Table</h1>
      <ThemeToggler />
    </div>
  );
};

export default Header;
