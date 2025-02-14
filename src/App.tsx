import './App.css'
import Header from "./components/Header";
import Table from "./components/Table";

function App() {

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
        </a>
        <a href="https://react.dev" target="_blank">
        </a>
      </div>
      <Header text={'BattleShips'}/>
        <img alt='Simpsons gif' src='https://media1.tenor.com/m/n0UdUfqG94sAAAAd/you-sunk-my-battleship-simpsons.gif'/>
        <h1>main page</h1>
        <Table />
    </>
  )
}

export default App
