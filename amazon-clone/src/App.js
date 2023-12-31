import React from 'react';
import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import { BrowserRouter, Routes, Route } from "react-router-dom";



const App = () => {
  return (<>
    <BrowserRouter>
      <div className="App">
      <Header/>
      <Routes>
      <Route path="/checkout" element={[ <Checkout /> ]}/>
      <Route path="/" element={[ <Home />]}/>
        </Routes>
      </div>
    </BrowserRouter>
    </>
  )
}

export default App
