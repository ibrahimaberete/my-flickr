import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import User from './routers/user';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <Routes>
            <Route path="/user" element={<User/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
