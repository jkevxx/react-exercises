// import ApiRickAndMorty from "./components/consumeApiRickAndMorty/ApiRickAndMorty";
// import Form from "./components/Form/Form";
// import CrudApp from "./components/CRUDApp/CrudApp";

// import { CrudApi } from "./crudAPI/components/CrudApi";

// Exercise React Router
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
// import { Navbar } from "./reactRouter/components/Navbar";
// import { AboutPage } from "./reactRouter/pages/AboutPage";
// import { Dashboard } from "./reactRouter/pages/Dashboard";
// import { HomePage } from "./reactRouter/pages/HomePage";
// import { NotFoundPage } from "./reactRouter/pages/NotFoundPage";
// import { UserPage } from "./reactRouter/pages/UserPage";
// import { UsersPage } from "./reactRouter/pages/UsersPage";

// Exercise Protected Routes
import Landing from './protectedRoutes/pages/Landing';
import Home from './protectedRoutes/pages/Home';
import Dashboard from './protectedRoutes/pages/Dashboard';
import Analytic from './protectedRoutes/pages/Analytic';
import Admin from './protectedRoutes/pages/Admin';
import { Navbar } from './protectedRoutes/components/Navbar';
import { useState } from 'react';
import ProtectedRoute from './protectedRoutes/components/ProtectedRoute';

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
    // <div>
    //   {/* <ApiRickAndMorty /> */}
    //   {/* <Form /> */}
    //   {/* <CrudApp /> */}
    //   {/* <CrudApi /> */}
    // </div>

    // Exercise React Router
    // <BrowserRouter>
    //   <Navbar />
    //   <Routes>
    //     <Route path="/" element={<HomePage />} />
    //     <Route path="/about" element={<AboutPage />} />
    //     <Route path="/users" element={<UsersPage />} />
    //     <Route path="/usuarios" element={<Navigate to="/users" />} />
    //     <Route path="/users/:id" element={<UserPage />} />

    //     <Route path="/dashboard/*" element={<Dashboard />}>
    //       <Route path="welcome" element={<p>Welcome</p>} />
    //     </Route>

    //     <Route path="*" element={<NotFoundPage />} />
    //   </Routes>
    // </BrowserRouter>

    // Exercise Protected Routes
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
