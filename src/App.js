import React, { useState } from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
import Dashboard from './Components/Dashboard';

function App() {
  const [isSideBar, setSideBar] = useState(false);

  return (
    <div className={isSideBar?"nav-sm":"nav-md"}>
      <div className="container App">
        <Sidebar onToggleSidebar={()=>setSideBar(!isSideBar)}/>
        <Navbar onToggleSidebar={()=>setSideBar(!isSideBar)}/>
        <div className="clearfix"></div>
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
