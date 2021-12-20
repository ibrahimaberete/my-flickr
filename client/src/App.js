import './App.css';
import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import User from './routers/user';
import Photo from './routers/photo';
import Navbar from './component/Navbar';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar/>
        <div>
        <Routes>
            <Route path="/user" element={<User/>}/>
            <Route path="/photo" element={<Photo/>}/>


        </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
