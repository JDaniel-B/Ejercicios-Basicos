import "./App.css";
import { Route, Routes } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
import Home from "./pages/Home";
import Ejercicio1 from "./pages/Ejercicio1";
import Ejercicio2 from "./pages/Ejercicio2";
import Ejercicio3 from "./pages/Ejercicio3";
import Ejercicio5 from "./pages/Ejercicio5";
import Ejercicio6 from "./pages/ejercicio6";
import Ejercicio4 from "./pages/Ejercicio4";
import Register from "./pages/Register";

function App() {
  library.add(fas);
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Ejercicio1" element={<Ejercicio1 />} />
        <Route path="/Ejercicio2" element={<Ejercicio2 />} />
        <Route path="/Ejercicio3" element={<Ejercicio3 />} />
        <Route path="/Ejercicio4" element={<Ejercicio4 />} />
        <Route path="/Ejercicio5" element={<Ejercicio5 />} />
        <Route path="/Ejercicio6" element={<Ejercicio6 />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
