import { useState } from "react";
import Footer from "./estaticos/Footer";
import Header from "./estaticos/Header";

function CrearComponente() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <main>
        <h3>Explicación</h3>
        <div>
          Las aplicaciones de React están hechas a partir de componentes. <p />
          Un componente es una pieza de UI (siglas en inglés de interfaz de
          usuario) que tiene su propia lógica y apariencia. <p />
          Un componente puede ser tan pequeño como un botón, o tan grande como
          toda una página.
        </div>
        <div>
          <h3>Código</h3>
          <div class="code-box">
            <pre>
              <code>
                {`function MyButton() {
  return (
    <button>Soy un botón</button>
  );
}`}
              </code>
            </pre>
          </div>
          <p />
          Ahora que has declarado <span className="p">MyButton</span> , puedes
          anidarlo en otro componente:
          <p />
          <div class="code-box">
            <pre>
              <code>
                {`export default function MyApp() {
  return (
    <div>
      <h1>Bienvenido a mi aplicación</h1>
      <MyButton />
    </div>
  );
}`}
              </code>
            </pre>
          </div>
          <p />
          Nota que <span className="p">{"<MyButton />"}</span> empieza con
          mayúscula. Así es como sabes que es un componente de React. Los
          nombres de los componentes de React siempre deben comenzar con
          mayúscula, mientras las etiquetas HTML deben estar minúsculas.
        </div>
        <h4>Resultados:</h4>
        <p />
        <div class="code-box">
          <pre>
            <code>{`function MyButton() {
  return (
    <button>
      Soy un botón
    </button>
  );
}

export default function MyApp() {
  return (
    <div>
      <h1>Bienvenido a mi aplicación</h1>
      <MyButton />
    </div>
  );
}`}</code>
          </pre>
        </div>
        <div>
          <h1>Bienvenido a mi aplicación</h1>
          <button>Soy un botón</button>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default CrearComponente;
