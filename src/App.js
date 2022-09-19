import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch } from 'react-redux';
import { IncreNum } from './Action/Action';
import { DecreNum } from './Action/Action'


function App() {

  const changeTheNumber = useSelector(state=>state.changeTheNumber);
  
  const disptach  = useDispatch();

  return (
    <div className="App">
     <h2>React Redux </h2>
     <button onClick={()=>disptach(DecreNum(3))}>-</button>
     <span>{changeTheNumber}</span>
     {/* <input type='text' value={changeTheNumber}/> */}
     <button onClick={()=>disptach(IncreNum(5))}>+</button>
    </div>
  );
}

export default App;
