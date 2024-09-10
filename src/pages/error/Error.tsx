import { Link } from 'react-router-dom';
import { IoIosWarning } from 'react-icons/io';

const Error = () => {
  return (
    <div>
      <div>
        <IoIosWarning data-testid="error-icon" />
        <h1>404</h1>
        <h2>Page Not Found</h2>
        <p>Oops! The resource you are looking for does not exist.</p>
        <button>
          <Link to="/">Back to Home</Link>
        </button>
      </div>
    </div>
  );
};

export default Error;
