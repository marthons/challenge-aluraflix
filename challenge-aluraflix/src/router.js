import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import NovoVideo from './page/NovoVideo';
import PaginaBase from './page/PaginaBase';
import HomePage from './page/HomePage';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route index element={<HomePage />} />
          <Route path="/novo-video" element={<NovoVideo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
