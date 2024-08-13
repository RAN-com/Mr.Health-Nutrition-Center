import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Sidebar from './Compontents/Dashboard/Sidebar';
import TopNavbar from './Compontents/Dashboard/Topnavbar';
import  Downline from './Compontents/Dashboard/Navgation/Downline'
import User from './Compontents/Dashboard/Navgation/user'
import Bmi from './Compontents/Dashboard/Navgation/Bmi'
import Bmr from './Compontents/Dashboard/Navgation/Bmr'
import Customer from './Compontents/Dashboard/Navgation/Cusomer'
import AboutPage from './Compontents/Dashboard/Aboutpage'
import UserList from './Compontents/Dashboard/UserList'
// import Register from './Auth/Register'
// import Login from './Auth/Login'
// import PrivateRoute from './Auth/Private'
import FirebaseImageUpload from './Compontents/Upload/Img'
import Layout from './Compontents/Layout/Layout'
import Health from './Compontents/Dashboard/Navgation/Health'


function App() {
  return (
    <div><Layout/></div>
    
      // <div className="flex">
      //   <TopNavbar />
      //   <Sidebar />
      //   <div className="ml-64 mt-16 flex-1 p-10">
      //     <Routes>
      //     <Route path="/" element={<h2 className="text-4xl font-bold mb-6"><Downline/></h2>} />
      //       <Route path="/downline" element={<h2 className="text-4xl font-bold mb-6"><FirebaseImageUpload/></h2>} />
          
      //       <Route path="/customer" element={<h2 className="text-4xl font-bold mb-6"><Customer/></h2>} />
      //       <Route path="/bmi-calculator" element={<h2 className="text-4xl font-bold mb-6"><Bmi /></h2>} />
      //       <Route path="/bmr-calculator" element={<h2 className="text-4xl font-bold mb-6"><Health/> </h2>} />     
      //         <Route path="/about/:userId" element={<AboutPage />} />
      //         <Route path="/user" element={<UserList />} />

      //     </Routes>
      //   </div>
      // </div>
      
    //   <div className={`flex flex-col items-center p-6`}>
    //   <Routes>
    //     <Route path="/register" element={<Register />} />
    //     <Route path="/login" element={<Login />} />
    //     <Route
    //       path="/"
    //       element={<PrivateRoute element={<UserList />} />}
    //     />
    //   </Routes>
    // </div>
    
    
  );
}

export default App;
