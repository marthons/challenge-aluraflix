import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './index.css'
import NovoVideo from './page/NovoVideo';
import HomePage from './page/HomePage';
import PaginaBase from './page/PaginaBase';

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<PaginaBase />}>
          <Route exact path="/" element={HomePage} />
          <Route path="/novo-video" element={NovoVideo} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
