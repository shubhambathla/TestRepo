import './App.css';
import Usestate from './Components/Usestate';
import DisableButton from './Components/DisableButton';
import Useeffect from './Components/Useeffect';
import UseContext from './Components/UseContext';
import Counter from './Components/ChildComponents/Counter';
import Airbnb from './Components/Airbnb';
import MemeGenerator from './Components/MemeGenerator';

function App() {

  return (
    <div className="App">
      {/* <Airbnb/> */}
    <MemeGenerator/>
      {/* <Usestate/>
      <Useeffect/>
      <UseContext/>
      <Counter/>
      <DisableButton/> */}
    </div>
  );
}

export default App;
