import { useState } from "react";
import Footer from "./estaticos/Footer";
import Header from "./estaticos/Header";

const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};
function MostrarDatos() {
  return (
    <>
      <Header></Header>
      <main>
        <h3>Explicación</h3>
        <div>
          JSX te permite poner marcado dentro de JavaScript. Las llaves te
          permiten “escapar de nuevo” hacia JavaScript de forma tal que puedas
          incrustar una variable de tu código y mostrársela al usuario.
        </div>
        <div>
          <h3>Código</h3>
          <p>
            Por ejemplo, esto mostrará <span className="p">user.name</span>:
          </p>
          <div class="code-box">
            <pre>
              <code>
                {`return (
  <h1>
    {user.name}
  </h1>
);`}
              </code>
            </pre>
          </div>
          <p />
          También puedes “escaparte hacia JavaScript” en los atributos JSX, pero
          tienes que utilizar llaves en lugar de comillas. Por ejemplo,
          <span className="p">className="avatar"</span> pasa la cadena{" "}
          <span className="p">"avatar"</span> como la clase CSS, pero{" "}
          <span className="p">{"src={user.imageUrl}"}</span> lee el valor de la
          variable de JavaScript <span className="p">user.imageUrl</span> y
          luego pasa el valor como el atributo <span className="p">src</span>:
          <p />
          <div class="code-box">
            <pre>
              <code>
                {`return (
  <img
    className="avatar"
    src={user.imageUrl}
  />
);`}
              </code>
            </pre>
          </div>
          <p />
          Puedes también poner expresiones más complejas dentro de llaves, por
          ejemplo,
          <a
            href="https://javascript.info/operators#string-concatenation-with-binary"
            target="_blank"
          >
            {" "}
            concatenación de cadenas
          </a>
          :
        </div>
        <h4>Resultados:</h4>
        <p />
        <div class="code-box">
          <pre>
            <code>{`const user = {
  name: 'Hedy Lamarr',
  imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={'Foto de ' + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize
        }}
      />
    </>
  );
}`}</code>
          </pre>
        </div>
        <div>
          <h3>Ejecución</h3>
          <h5>{user.name}</h5>
          <img
            className="avatar"
            src={user.imageUrl}
            alt={"Foto de " + user.name}
            style={{
              width: user.imageSize,
              height: user.imageSize,
            }}
          />{" "}
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default MostrarDatos;
