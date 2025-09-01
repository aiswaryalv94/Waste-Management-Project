import React from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import Userloginpage from './pages/Userloginpage/Userlogin/Userloginpage'
// import Userregistrationpage from './pages/Userloginpage/Userregistrationpage/Userregistrationpage'

import Header from './components/header/Header'
import Footer from './components/Footer/Footer'
// import WasteCollecters from './pages/Userloginpage/WasteCollectersLogin/WasteCollecters'
import Topheader from './components/Topheader/Topheader'
import LandingPage from './pages/Landingpage/LandingPage'
// import AdminLogin from './pages/Userloginpage/AdminLogin/AdminLogin'
// import CollecterReg from './pages/Userloginpage/collectr registration/CollecterReg'
// import AdminDashboard from './pages/Userloginpage/Admindashboard/AdminDashboard'
// import CollecterDashboard from './pages/collecterdashboard/CollecterDashboard'
// import Contact from './pages/Contact/Contact'
// import Sustainability from './pages/sustainability/sustainability'





function App() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path='/landingpage' element={<><Topheader/><Header/><LandingPage/><Footer/></>}></Route>
                     {/* <Route path='/userlogin' element={<><Userloginpage /></>}></Route> */}
                     {/* <Route path='/userregistration' element={<><Userregistrationpage/></>}></Route> */}
                     {/* <Route path='/landingpage' element={<><Topheader/><Header/><Landingpage/><Footer/></>}></Route> */}
                     {/* <Route path='/header' element={<><Header/></>}></Route> */}
                     {/* <Route path='/footer' element={<><Footer/></>}></Route>  */}
                     {/* <Route path='/wastecollecterlogin' element={<><Topheader/><Header/><WasteCollecters /><Footer/></>}></Route> */}
                     {/* <Route path='/adminlogin' element={<><Topheader/><Header/><AdminLogin /><Footer/></>}></Route> */}
                     {/* <Route path='/collecterreg' element={<><Topheader/><Header/><CollecterReg /><Footer/></>}></Route> */}
                     {/* <Route path='/admindashboard' element={<><AdminDashboard/></>}></Route>  */}
                     {/* <Route path='/collecterdashboard' element={<><CollecterDashboard/></>}></Route> */}
                     {/* <Route path='/contact' element={<><Topheader/><Header/><Contact/><Footer/></>}></Route> */}
                     {/* <Route path='/sustain' element={<><Topheader/><Header/><Sustainability/><Footer/></>}></Route> */}
                </Routes>   
            </BrowserRouter>
        </div>
    )
}

export default App

