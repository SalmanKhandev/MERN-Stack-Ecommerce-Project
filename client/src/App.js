import React from 'react';
import {Routes,Route} from "react-router-dom";
import Login from './pages/auth/Login'; 
import Register from './pages/auth/Register';
import Home from './pages/Home';
import Header from './components/nav/Header';
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
   <>
   <Header/>
   <ToastContainer/>
    <Routes>
      <Route exact path="/" element={<Home/>} />
      <Route exact path="/login" element={<Login/>} />
      <Route exact path="/register" element={<Register/>} />
    </Routes>
   </>
  );
}

export default App;
