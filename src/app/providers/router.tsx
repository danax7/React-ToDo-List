import { createBrowserRouter, createRoutesFromElements, Outlet, Route } from 'react-router-dom';
import { MainPage } from '@pages/MainPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Outlet />}>
      <Route index element={<MainPage />} />
    </Route>
  )
);

export default router;
