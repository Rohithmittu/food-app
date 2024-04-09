
import "./App.css";
import Navbar from "./Components/Navbar";

import {Outlet} from "react-router-dom"






function App() {
  return (

    <>
    
    
      <div className="min-h-screen p-6 bg-white text-gray-600 text-lg">
        <Navbar />
        <Outlet />
        
      </div>
    </>
    
  );
}

export default App;
