// import './App.css';

// fonts
import "../src/assets copy/fonts/Lato-Regular.ttf"
import "../src/assets copy/fonts/Lato-Bold.ttf"
import "../src/assets copy/fonts/Inter-Regular.ttf"
import "../src/assets copy/fonts/Inter-Medium.ttf"
import "../src/assets copy/fonts/Inter-SemiBold.ttf"
import "../src/assets copy/fonts/Inter-Bold.ttf"
import "../src/assets copy/fonts/Montserrat-Regular.ttf"
import "../src/assets copy/fonts/Montserrat-Medium.ttf"


import { Routes, Route } from "react-router-dom"
import Homepage from "./pages/Homepage";
import Dashboard from "./pages/Dashboard";
import Application from "./pages/Application";
import Activation from "./pages/Activation";
import Support from "./pages/Support";
import License from "./pages/License";
import Wallet from "./pages/Wallet";
import Payout from "./pages/Payout";



const App = () => {
  return (
    <div className="">
      <Routes>
        <Route exact path='/' element={<Homepage/>} />
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



