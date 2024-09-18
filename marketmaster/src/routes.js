import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from "./pages/Main";
import imgUrl from './assets/images/welcome.gif'
export default (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path='/setting/menu' element={<h1>Menu Management</h1>}></Route>
        <Route path='/business' element={<h1>Business Management</h1>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)