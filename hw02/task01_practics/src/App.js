import React, {Component} from 'react';
import Men from "./components/MenComponent/Men";
import Women from "./components/WomenComponent/Women";
import MarriedCouples from "./components/CouplesComponent/MarriedCouples";
import './App.css';

class App extends Component {


  render() {
    return (
        <div className={'flex'}>
            <div className={'block'}>
                <Men/>
            </div>
            <div className={'block'}>
                <Women/>
            </div>
            <div className={'block'}>
                <MarriedCouples/>
            </div>
        </div>
    );
  }
}

export default App;

