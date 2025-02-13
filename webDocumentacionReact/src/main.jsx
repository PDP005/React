import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./componentes/App.jsx";
import Boton from "./componentes/Boton.jsx";
import CrearComponente from "./componentes/CrearComponente.jsx";

import MostrarDatos from "./componentes/MostrarDatos.jsx";
import Renderizar from "./componentes/Renderizar.jsx";
import Evento from "./componentes/Eventos";
import JuegoTresEnRaya from "./componentes/3EnRaya";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/boton" element={<Boton />} />
        <Route path="/crearComponente" element={<CrearComponente />} />
        <Route path="/mostrarDatos" element={<MostrarDatos />} />
        <Route path="/renderizar" element={<Renderizar />} />
        <Route path="/evento" element={<Evento />} />
        <Route path="/3enraya" element={<JuegoTresEnRaya />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
