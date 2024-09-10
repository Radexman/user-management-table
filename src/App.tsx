import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Users from './pages/users/Users';
import Error from './pages/error/Error';

function App() {
  return (
    <BrowserRouter>
      <main className="flex min-h-screen items-center justify-center">
        <Routes>
          <Route
            path="/"
            element={<Users />}
          />
          <Route
            path="*"
            element={<Error />}
          />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
