import React, { useContext } from 'react';
import { Routes, Route, Navigate} from "react-router-dom"
import LandingPage from "./pages/LandingPage";
import Test from "./pages/Test";
import Signup from "./pages/Signup";
import Signin from "./pages/Signin";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Application from "./pages/Application";
import Activation from "./pages/Activation";
import Support from "./pages/Support";
import License from "./pages/License";
import Wallet from "./pages/Wallet";
import Payout from "./pages/Payout";

// import PrivateRoute from "./PrivateRoute"
import { AuthContext } from './AuthContext';







const App = () => {
  const { isAuthenticated } = useContext(AuthContext);

  const PrivateRoute = ({ path, element }) => {
    return isAuthenticated() ? element : <Navigate to="/signin" replace />;
  };

  return (
    <div className="">
      <Routes>
      <Route exact path='/' element={<LandingPage/>} />
      <Route  path='/test' element={<Test/>} />
      <Route  path='/signup' element={<Signup/>} />
      <Route  path='/signin' element={<Signin/>} />
      <Route path="*" element={<NotFoundPage />} />
      {/* <Route path="/home" element={<PrivateRoute element={<HomePage />} />} /> */}
      <Route path='/home' element={<HomePage />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/activation' element={<Activation />} />
        <Route path='/application' element={<Application />} />
        <Route path='/support' element={<Support />} />
        <Route path='/license' element={<License />} />
        <Route path='/payout' element={<Payout />} />
        <Route path='/wallet' element={<Wallet />} />
      </Routes>
    </div>
  )
}

export default App



