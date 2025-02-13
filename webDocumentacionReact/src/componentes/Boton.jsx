import { useState } from "react";
import Footer from "./estaticos/Footer";
import Header from "./estaticos/Header";

function Boton() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header></Header>
      <main>
        <h3>Explicación</h3>
        <div>
          <span className="p">const [count, setCount] = useState(0):</span>
          &nbsp; Se declara una variable count que empieza en 0. <p />
          <span className="p">setCount:</span> &nbsp;Es una función para
          actualizar el valor de count.
          <p />
          <span className="p">
            button onClick={() => setCount(count + 1)}&gt;:
          </span>
          &nbsp; Se crea un botón que, cuando se hace clic, incrementa el valor
          de count en 1.
          <p />
          <span className="p">[count is {count}]:</span> &nbsp; Muestra en
          pantalla el valor actual de count.
        </div>
        <div>
          <h3>Código</h3>
          <div class="code-box">
            <pre>
              <code>
                {`const [count, setCount] = useState(0);\n\n<button onClick={() => setCount((count) => count + 1)}>\n   count is {count}\n</button>`}
              </code>
            </pre>
          </div>
        </div>
        <div>
          <h3>Ejecución</h3>
          <div class="card centrar">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
          </div>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Boton;
