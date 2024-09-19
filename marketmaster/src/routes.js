import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from "./pages/Main";
import MenuPage from './pages/Setting/Menu'

export default (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Main />}>
        <Route path='/setting/menu' element={<MenuPage />}></Route>
        <Route path='/business' element={<h1>Business Management</h1>}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)