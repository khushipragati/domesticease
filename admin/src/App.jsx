import React, { useContext } from 'react'
import { HelperContext } from './context/HelperContext';
import { AdminContext } from './context/AdminContext';
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import Dashboard from './pages/Admin/Dashboard';
import AllAppointments from './pages/Admin/AllAppointments';
import AddHelper from './pages/Admin/AddHelper';
import HelpersList from './pages/Admin/HelpersList';
import Login from './pages/Login';
import HelperAppointments from './pages/Helper/HelperAppointments';
import HelperDashboard from './pages/Helper/HelperDashboard';
import HelperProfile from './pages/Helper/HelperProfile';

const App = () => {

  const { dToken } = useContext(HelperContext)
  const { aToken } = useContext(AdminContext)

  return dToken || aToken ? (
    <div className='bg-[#F8F9FD]'>
      <ToastContainer />
      <Navbar />
      <div className='flex items-start'>
        <Sidebar />
        <Routes>
          <Route path='/' element={<></>} />
          <Route path='/admin-dashboard' element={<Dashboard />} />
          <Route path='/all-appointments' element={<AllAppointments />} />
          <Route path='/add-helper' element={<AddHelper />} />
          <Route path='/helper-list' element={<HelpersList />} />
          <Route path='/helper-dashboard' element={<HelperDashboard />} />
          <Route path='/helper-appointments' element={<HelperAppointments />} />
          <Route path='/helper-profile' element={<HelperProfile />} />
        </Routes>
      </div>
    </div>
  ) : (
    <>
      <ToastContainer />
      <Login />
    </>
  )
}

export default App