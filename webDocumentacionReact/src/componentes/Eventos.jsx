import { useState } from "react";
import Footer from "./estaticos/Footer";
import Header from "./estaticos/Header";

function Evento() {
  function handleClick() {
    alert("¡Me hiciste clic!");
  }

  return (
    <>
      <Header />
      <main>
        <h3>Explicación</h3>
        <p>
          Puedes responder a eventos declarando funciones controladoras de
          eventos dentro de tus componentes:
        </p>

        <h3>Código</h3>
        <p>El código será el siguiente:</p>
        <div className="code-box">
          <pre>
            <code>
              {`function MyButton() {
  function handleClick() {
    alert('¡Me hiciste clic!');
  }

  return (
    <button onClick={handleClick}>
      Hazme clic
    </button>
  );
}
`}
            </code>
          </pre>
        </div>

        <h3>Ejecución</h3>
        <button onClick={handleClick}>Hazme clic</button>
      </main>
      <Footer />
    </>
  );
}

export default Evento;
