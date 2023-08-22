import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from './navbar';
import Greeting from './greeting';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />}>
          <Route index element={<Greeting />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App;