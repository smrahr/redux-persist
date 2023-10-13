import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

function App() {
  const count = useSelector(state => state.counter)
  const dispatch = useDispatch()
  useEffect(()=>{console.log(count)}, [count])
  return (
    <div>
      <div>
        <button
          onClick={() => dispatch({type: 'increment'})}
        >
          Increment
        </button>
        <span>{count}</span>
        <button
          onClick={() => dispatch({type: 'decrement'})}
        >
          Decrement
        </button>
      </div>
    </div>
  );
}

export default App;
