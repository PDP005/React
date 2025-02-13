import { useState } from "react";
import Footer from "./estaticos/Footer";
import Header from "./estaticos/Header";
import Game from "./Game";

function JuegoTresEnRaya() {
  return (
    <>
      <Header></Header>
      <main>
        <h3>Explicación</h3>
        <div>
          Este código representa un juego de tres en raya en React. Utiliza el
          estado para manejar los movimientos y determina el ganador.
        </div>
        <p>
          También puedes “escaparte hacia JavaScript” en los atributos JSX, pero
          tienes que utilizar llaves en lugar de comillas. Por ejemplo,
        </p>
        <p>
          <span className="p">className="avatar"</span> pasa la cadena{" "}
          <span className="p">"avatar"</span> como la clase CSS, pero{" "}
          <span className="p">{"src={user.imageUrl}"}</span> lee el valor de la
          variable de JavaScript <span className="p">user.imageUrl</span> y
          luego pasa el valor como el atributo <span className="p">src</span>:
        </p>
        <div className="code-box">
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

        <h3>Square Component</h3>
        <div className="code-box">
          <pre>
            <code>
              {`function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}`}
            </code>
          </pre>
        </div>
        <p>
          <strong>Descripción:</strong> Este componente representa una casilla
          del tablero de juego. Es un botón que muestra un valor (ya sea "X",
          "O" o null).
        </p>
        <p>
          <strong>Props:</strong>
          <ul>
            <li>
              <strong>value:</strong> Contiene el valor actual de la casilla (X,
              O o null).
            </li>
            <li>
              <strong>onSquareClick:</strong> Función que se ejecuta cuando la
              casilla es clickeada.
            </li>
          </ul>
        </p>
        <p>
          <strong>Uso:</strong> Utiliza el atributo <code>className</code> para
          aplicar estilos CSS y el manejador de eventos <code>onClick</code>{" "}
          para manejar la interacción del usuario.
        </p>

        <h3>Board Component</h3>
        <div className="code-box">
          <pre>
            <code>
              {`function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? "X" : "O";
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status = winner ? "Ganador: " + winner : "Siguiente jugador: " + (xIsNext ? "X" : "O");

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}`}
            </code>
          </pre>
        </div>
        <p>
          <strong>Descripción:</strong> Este componente representa el tablero
          del juego, que contiene las casillas y maneja la lógica del juego.
        </p>
        <p>
          <strong>Props:</strong>
          <ul>
            <li>
              <strong>xIsNext:</strong> Booleano que indica si es el turno de
              "X".
            </li>
            <li>
              <strong>squares:</strong> Array que representa el estado actual de
              las casillas.
            </li>
            <li>
              <strong>onPlay:</strong> Función que actualiza el estado del
              juego.
            </li>
          </ul>
        </p>
        <p>
          <strong>Funciones:</strong>
          <ul>
            <li>
              <strong>handleClick(i):</strong> Maneja el clic en una casilla.
              Verifica si hay un ganador o si la casilla ya está ocupada.
              Actualiza el estado de las casillas.
            </li>
          </ul>
        </p>
        <p>
          <strong>Renderizado:</strong> Muestra el estado del juego y las
          casillas del tablero.
        </p>

        <h3>Game Component</h3>
        <div className="code-box">
          <pre>
            <code>
              {`export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>
          {history.map((_, move) => (
            <li key={move}>
              <button onClick={() => jumpTo(move)}>
                {move ? "Ir al movimiento #" + move : "Ir al inicio del juego"}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}`}
            </code>
          </pre>
        </div>
        <p>
          <strong>Descripción:</strong> Este es el componente principal que
          gestiona el estado del juego y la historia de los movimientos.
        </p>
        <p>
          <strong>Estado:</strong>
          <ul>
            <li>
              <strong>history:</strong> Array que guarda el estado de cada
              movimiento del juego.
            </li>
            <li>
              <strong>currentMove:</strong> Índice del movimiento actual.
            </li>
          </ul>
        </p>
        <p>
          <strong>Funciones:</strong>
          <ul>
            <li>
              <strong>handlePlay(nextSquares):</strong> Actualiza la historia y
              el movimiento actual cuando se realiza un nuevo movimiento.
            </li>
            <li>
              <strong>jumpTo(move):</strong> Permite retroceder a un movimiento
              anterior.
            </li>
          </ul>
        </p>
        <p>
          <strong>Renderizado:</strong> Muestra el tablero y una lista de
          movimientos pasados, permitiendo al jugador regresar a movimientos
          anteriores.
        </p>

        <h3>calculateWinner Function</h3>
        <div className="code-box">
          <pre>
            <code>
              {`function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}`}
            </code>
          </pre>
        </div>
        <p>
          <strong>Descripción:</strong> Función que determina si hay un ganador
          en el juego.
        </p>
        <p>
          <strong>Lógica:</strong> Comprueba todas las combinaciones posibles de
          ganadores (filas, columnas y diagonales). Si encuentra una línea
          ganadora, devuelve el valor del ganador (X o O). Si no hay ganador,
          devuelve <code>null</code>.
        </p>

        <h3>Código</h3>
        <p>El código del juego es el siguiente:</p>
        <div className="code-box">
          <pre>
            <code>
              {`import { useState } from 'react';

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]) {
      return;
    }
    const nextSquares = squares.slice();
    nextSquares[i] = xIsNext ? 'X' : 'O';
    onPlay(nextSquares);
  }

  const winner = calculateWinner(squares);
  let status = winner ? 'Ganador: ' + winner : 'Siguiente jugador: ' + (xIsNext ? 'X' : 'O');

  return (
    <>
      <div className="status">{status}</div>
      <div className="board-row">
        {squares.map((square, i) => (
          <Square key={i} value={square} onSquareClick={() => handleClick(i)} />
        ))}
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  function jumpTo(move) {
    setCurrentMove(move);
  }

  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>
          {history.map((_, move) => (
            <li key={move}>
              <button onClick={() => jumpTo(move)}>
                {move ? 'Ir al movimiento #' + move : 'Ir al inicio del juego'}
              </button>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
}

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8],
    [0, 3, 6], [1, 4, 7], [2, 5, 8],
    [0, 4, 8], [2, 4, 6]
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}`}
            </code>
          </pre>
        </div>
        <div>
          <h3>Ejecución</h3>
          <p>A continuación, se muestra el tablero inicial del juego:</p>
          <Game />
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}

export default JuegoTresEnRaya;
