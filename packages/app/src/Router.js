import { Routes, Route, Switch } from 'react-router-dom';

import About from './pages/About';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import NoMatch from './pages/NoMatch';
import Welcome from './pages/Welcome';

const Router = () => {
  return (
    <Routes>
      <Route path="/about" element={<About />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/" element={<Welcome />} />
      <Route path="*" element={ <NoMatch />} />
    </Routes>
  );
};

export default Router;