import "./styles/colors.css"
import "./styles/uitilities.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./pages/Authentication";
import Home from "./pages/Home";
import './index.css'
import Profile from "./pages/Home/component/Profile/profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Authentication />}/>
        <Route  path="/home" element={<Home />}/>
        <Route  path="/profile" element={<Profile />}/>
      </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;