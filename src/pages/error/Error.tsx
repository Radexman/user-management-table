import { Link } from 'react-router-dom';
import { IoIosWarning as WarningIcon } from 'react-icons/io';

const Error = () => {
  return (
    <div>
      <div className="flex flex-col items-center justify-center space-y-2 text-center">
        <WarningIcon
          size={120}
          data-testid="error-icon"
        />
        <h1 className="text-6xl font-bold tracking-wide">404</h1>
        <h2 className="text-3xl font-semibold">Page Not Found</h2>
        <p>Oops! The resource you are looking for does not exist.</p>
        <Link to="/">
          <button
            type="button"
            className="btn btn-outline btn-wide mt-5"
          >
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Error;
