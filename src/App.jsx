import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Heading from './components/Heading';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { ContextProvider } from './components/context/GlobalContext';

function App() {
  return (
    <BrowserRouter>
      <div className="h-screen text-white text-center p-10">
        <div className="container mx-auto h-full">
          <ContextProvider>
            <Heading />
            <Routes>
              <Route path="/" element={<TaskList />} />
              <Route path="/add" element={<TaskForm />} />
              <Route path="/edit/:id" element={<TaskForm />} />
            </Routes>
          </ContextProvider>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
