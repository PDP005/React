import { useState } from "react";
import Footer from "./estaticos/Footer";
import Header from "./estaticos/Header";
import ShoppingList from "./ShoppingList";

function Renderizar() {
  const products = [
    { title: "Col", isFruit: false, id: 1 },
    { title: "Ajo", isFruit: false, id: 2 },
    { title: "Manzana", isFruit: true, id: 3 },
  ];

  return (
    <>
      <Header></Header>
      <main>
        <h3>Explicación</h3>
        <div>
          Dependerás de funcionalidades de JavaScript como los{" "}
          <a
            href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/for"
            target="_blank"
          >
            {" "}
            bucles <span className="p">for</span>{" "}
          </a>
          y la{" "}
          <a
            href="https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/map"
            target="_blank"
          >
            función map() de los arreglos
          </a>{" "}
          para renderizar listas de componentes. Por ejemplo, digamos que tienes
          un arreglo de productos:
        </div>
        <div>
          <h3>Código</h3>
          <div class="code-box">
            <pre>
              <code>
                {`const products = [
  { title: 'Col', id: 1 },
  { title: 'Ajo', id: 2 },
  { title: 'Manzana', id: 3 },
];`}
              </code>
            </pre>
          </div>
          <p />
          Dentro de tu componente, utiliza la función{" "}
          <span className="p">map()</span> para transformar el arreglo de
          productos en un arreglo de elementos{" "}
          <span className="p">{"<li>"}</span>:
          <p />
          <div class="code-box">
            <pre>
              <code>
                {`const listItems = products.map(product =>
  <li key={product.id}>
    {product.title}
  </li>
);

return (
  <ul>{listItems}</ul>
);`}
              </code>
            </pre>
          </div>
          <p />
          Nota que <span className="p">{"<li>"}</span> tiene un atributo{" "}
          <span className="p">key</span> (llave). Para cada elemento en una
          lista, debes pasar una cadena o un número que identifique ese elemento
          de forma única entre sus hermanos. Usualmente, una llave debe provenir
          de tus datos, como un ID de una base de datos. React dependerá de tus
          llaves para entender qué ha ocurrido si luego insertas, eliminas o
          reordenas los elementos.
        </div>
        <h4>Resultados:</h4>
        <p />
        <div class="code-box">
          <pre>
            <code>{`const products = [
  { title: 'Col', isFruit: false, id: 1 },
  { title: 'Ajo', isFruit: false, id: 2 },
  { title: 'Manzana', isFruit: true, id: 3 },
];

export default function ShoppingList() {
  const listItems = products.map(product =>
    <li
      key={product.id}
      style={{
        color: product.isFruit ? 'magenta' : 'darkgreen'
      }}
    >
      {product.title}
    </li>
  );

  return (
    <ul>{listItems}</ul>
  );
}`}</code>
          </pre>
        </div>
        <div>
          <h3>Ejecución</h3>

          <ShoppingList></ShoppingList>
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default Renderizar;
