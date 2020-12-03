import logo from './logo.svg';
import './App.css';
import CarComponent from "./components/CarComponent";
import {cars} from "./data";


function App() {
  return (
    <div>
      {
        cars.map((car, index) => {
          let name = 'usual';
          if (car.power > '200hp') {
            name = 'powerful';
          }
          return (<CarComponent item={car} key={index} clsName={name}/>)
        })
      }
    </div>

  );

}

export default App;
