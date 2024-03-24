import { Route, Routes } from 'react-router-dom';

import SharedLayout from '../../layout/SharedLayout/SharedLayout';

import Home from '../../pages/Home';
import Catalog from '../../pages/Catalog';
import Favorites from '../../pages/Favorites';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorites />} />

        <Route path="*" element={<div>PageNotFound</div>} />
      </Route>
    </Routes>
  );
}

export default App;
