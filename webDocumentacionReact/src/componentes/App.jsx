import { Link } from "react-router-dom";
import Footer from "./estaticos/Footer";
import Header from "./estaticos/Header";

/*

PREGUNTAR METER ANIMACIONES Y ESO

*/
function App() {
  return (
    <>
      <Header></Header>
      <main>
        <h1>Aprende React con Pedro</h1>
        <div class="queaprenderemos">
          <h2>Que vamos a aprender</h2>
          <div>
            En este curso aprenderemos lo siguiente
            <p />
            <li>
              <Link to="/crearComponente">Como crear un componente</Link>
            </li>
            <li>
              <Link to="/boton">Como crear un botón contador</Link>
            </li>
            <li>
              <Link to="/mostrardatos">Como mostrar datos</Link>
            </li>
            <li>
              <Link to="/renderizar">Renderizado de listas</Link>
            </li>
            <li>
              <Link to="/evento">Responder a eventos</Link>
            </li>
            <li>
              <Link to="/3enraya">3 en raya</Link>
            </li>
          </div>
        </div>
        <Footer></Footer>
      </main>
    </>
  );
}

export default App;
