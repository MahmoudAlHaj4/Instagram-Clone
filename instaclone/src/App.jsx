import "./styles/colors.css"
import "./styles/uitilities.css"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Authentication from "./pages/Authentication";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Authentication />}/>
      </Routes>
    </BrowserRouter>
      
    
  );
}

export default App;