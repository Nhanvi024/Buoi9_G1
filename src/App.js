import './App.css'
import React,{useEffect,useState} from 'react';
import { Routes, Route } from 'react-router-dom'
import ListPage from './pages/ListPage';
import CreatePage from './pages/CreatePage';
import EditPage from './pages/EditPage';

function App(props) {


  return (
    <div>
      <Routes>
        <Route path='/' element={<ListPage />}></Route>
        <Route path='/create' element={<CreatePage />}></Route>
        <Route path='/edit' element={<EditPage/>}></Route>
      </Routes>
      
    </div>
  );
}

export default App ;
