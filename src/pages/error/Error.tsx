import { Link } from 'react-router-dom';
import { IoIosWarning } from 'react-icons/io';

const Error = () => {
	return (
		<div className='error-page'>
			<div className='error-container'>
				<IoIosWarning
					className='error-icon'
					data-testid='error-icon'
				/>
				<h1 className='error-code'>404</h1>
				<h2 className='error-title'>Page Not Found</h2>
				<p className='error-message'>Oops! The resource you are looking for does not exist.</p>
				<button>
					<Link to='/'>Back to Home</Link>
				</button>
			</div>
		</div>
	);
};

export default Error;
