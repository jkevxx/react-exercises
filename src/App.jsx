// Exercise React Router
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// Exercise Protected Routes
import Landing from './pages/Landing';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Analytic from './pages/Analytic';
import Admin from './pages/Admin';
import { Navbar } from './components/Navbar';
import { useState } from 'react';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [user, setUser] = useState(null);
  const login = () => {
    setUser({
      id: 1,
      name: 'John',
      permissions: ['analytic'],
      roles: [''],
    });
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <BrowserRouter>
      <Navbar />

      {user ? (
        <button onClick={logout}>Logout</button>
      ) : (
        <button onClick={login}>Login</button>
      )}
      <Routes>
        <Route index path="/" element={<Landing />} />
        <Route path="/landing" element={<Landing />} />
        <Route element={<ProtectedRoute isAllowed={!!user} />}>
          <Route path="/home" element={<Home />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>

        <Route
          path="/analytics"
          element={
            <ProtectedRoute
              isAllowed={!!user && user.permissions.includes('analytic')}
              redirectTo="/home"
            >
              <Analytic />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin"
          element={
            <ProtectedRoute
              isAllowed={!!user && user.roles.includes('admin')}
              redirectTo="/home"
            >
              <Admin />
            </ProtectedRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
