// import ApiRickAndMorty from "./components/consumeApiRickAndMorty/ApiRickAndMorty";
// import Form from "./components/Form/Form";
// import CrudApp from "./components/CRUDApp/CrudApp";

// import { CrudApi } from "./crudAPI/components/CrudApi";

import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { Navbar } from "./reactRouter/components/Navbar";
import { AboutPage } from "./reactRouter/pages/AboutPage";
import { Dashboard } from "./reactRouter/pages/Dashboard";
import { HomePage } from "./reactRouter/pages/HomePage";
import { NotFoundPage } from "./reactRouter/pages/NotFoundPage";
import { UserPage } from "./reactRouter/pages/UserPage";
import { UsersPage } from "./reactRouter/pages/UsersPage";

function App() {
  return (
    // <div>
    //   {/* <ApiRickAndMorty /> */}
    //   {/* <Form /> */}
    //   {/* <CrudApp /> */}
    //   {/* <CrudApi /> */}
    // </div>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/users" element={<UsersPage />} />
        <Route path="/usuarios" element={<Navigate to="/users" />} />
        <Route path="/users/:id" element={<UserPage />} />

        <Route path="/dashboard/*" element={<Dashboard />}>
          <Route path="welcome" element={<p>Welcome</p>} />
        </Route>

        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
