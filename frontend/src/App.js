import Appbar from './components/Appbar';
import { Route, BrowserRouter, Routes } from 'react-router-dom';
import Task from './components/Task';
import NewTask from './components/NewTask';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Appbar />} />
        <Route path='/newTask' element={ <NewTask /> } />
        <Route path='/:id' element={ <Task />} />
      </Routes>
    </BrowserRouter>
  );
}
