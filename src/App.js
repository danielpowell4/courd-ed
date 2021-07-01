import './App.css';
import courdoroy from './courdoroy.jpg';

const GRID_SIZE = 12;

function App() {
  return (
    <div className="App" style={{ backgroundColor: "blue", padding: 10 }}>
      <header className="App-header">
        <h1>Courdoroy Ed</h1>
      </header>
      <main
      style={{display: "grid",
    gridTemplateColumns: `repeat(${GRID_SIZE}, 100px)`,
    margin: "0 auto 2rem",
    maxWidth: GRID_SIZE * 100,
    width: "100%"}}>
      {Array(GRID_SIZE).fill("").map((_, rowIndex) => Array(GRID_SIZE).fill("").map((_, columnIndex) =>{
          let style = {
            animation: `hueRotation 3.5s linear 200ms infinite`,
          }
          style[`-webkit-filter`] = `hue-rotate(${(rowIndex + columnIndex) * 15}deg)`
          style[`filter`] = `hue-rotate(${(rowIndex + columnIndex) * 15}deg)`

          let rotation = 0;

          /* odd row, even column */
          if (rowIndex % 2 && columnIndex % 2 === 0) {
            rotation = 90
          }

          /* even row, odd column */
          if ((rowIndex % 2 === 0) && columnIndex % 2) {
            rotation = 90
          }


          style.transform = `rotate(${rotation}deg)`

          return (
            <img key={`${rowIndex}-${columnIndex}`} src={courdoroy} alt="Courdoroy" height={100} width={100} style={style}/>
          )
        } ))}
      </main>
      <p>Home of the High Five 🙏</p>
    </div>
  );
}

export default App;
