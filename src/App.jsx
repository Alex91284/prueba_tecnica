import { Routes, Route } from "react-router-dom"
import Inicio from "./components/Inicio"
import About from "./components/About"
import Contacto from "./components/Contacto"
import Registro from "./components/Registro"

function App() {
  return (
      <div>
        <Routes>
          <Route path="/" element={<Inicio/>} exact/>
          <Route path="about" element={<About/>}/>
          <Route path="contact" element={<Contacto/>}/>
          <Route path="register" element={<Registro/>}/>        
        </Routes>
      </div>
  );
}

export default App;
