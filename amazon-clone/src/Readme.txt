
@brennankelly1
1 year ago
If anyone else is having a similar problem at 1:37:05 due to the update from react router v5 to v6, I've included the my code down below for App.js. This is the closest code I've seen to the actual tutorial. This is working as of 3/2/2022:

Updated react router dom.

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    // BEM
    <Router>
      <div className="app">
        <Routes>
          <Route path="/checkout" element={[<Header />, <h1>I am a checkout page</h1>]}/>
          <Route path="/" element={[<Header />, <Home />]}/>
        </Routes>
      </div>
    </Router>
  );
}