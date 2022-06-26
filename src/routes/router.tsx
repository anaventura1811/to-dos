import { Routes, Route } from 'react-router-dom';
import { Dashboard } from '../pages/dashboard';
import { Home } from '../pages/home';

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  )
}
