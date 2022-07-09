import React from 'react';
import { render } from "react-dom";
//import ReactDOM from 'react-dom';
import reportWebVitals from './reportWebVitals';
//import { BrowserRouter, Route, Switch } from "react-router-dom";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Components:
import Navbar from './components/Navbar/Navbar';
import CompanyList from './components/Company/CompanyList';
import CompanyForm from './components/Company/CompanyForm';
import "bootstrap/dist/css/bootstrap.min.css";
import './index.css';

render(
<BrowserRouter>
   <Navbar/>
   <div className="container my-4">
      <Routes>
         <Route path='/' element={<CompanyList/>}/>
         <Route path='/companyForm' element={<CompanyForm/>} />
         <Route path='/companyForm/:id' element={<CompanyForm/>}/>
      </Routes>
   </div>
</BrowserRouter>
, document.getElementById('root'));


//const root = ReactDOM.createRoot(document.getElementById('root'));
//root.render();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
