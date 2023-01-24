import '@tremor/react/dist/esm/tremor.css';
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import BizPlanPage from './pages/BizPlanPage';
import Login from './pages/Login';
import TestPage from './pages/TestPage';

const MainLayout = React.lazy(() => import('./components/layouts/MainLayout'));


export default function App() {
  return (
    <React.Suspense>
      <Routes>
      <Route path='/' element={<Navigate to='/login' replace />} />
      <Route path='/login'  element={<Login />} />
        <Route element={<MainLayout />}>
        <Route path='/test' element={<TestPage />}></Route>
        <Route path='/biz-plan' element={<BizPlanPage />}></Route>
        </Route>
      </Routes>
    </React.Suspense>
  );
}
