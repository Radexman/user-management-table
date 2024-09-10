import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './pages/users/Users';
import Error from './pages/error/Error';

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path='/'
					element={<Users />}
				/>
				<Route
					path='*'
					element={<Error />}
				/>
			</Routes>
		</BrowserRouter>
	);
}

export default App;
