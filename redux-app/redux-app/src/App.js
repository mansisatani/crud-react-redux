import './App.css';
import React from 'react';
import {useSelector,useDispatch} from 'react-redux';
import {increment,decrement} from './actions';


function App() {
const counter = useSelector(state => state.counter);
const dispatch = useDispatch();
return (
    <>
    <h1>counter{counter}</h1>

    <button onClick={()=> dispatch(increment(5))}>+</button>
    <button onClick={()=>dispatch(decrement())}>-</button>
    </>
  );
}

export default App;
