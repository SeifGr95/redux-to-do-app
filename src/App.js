import logo from './logo.svg';
import './App.css';
import {useSelector,useDispatch} from 'react-redux';
import React, { useState } from 'react';
import {addTask} from './actions/index';
import AddTask from './Components/AddTask';
import ListTask from './Components/ListTask';

function App() {
   const a=useSelector(state=>state.add) 
  
  
  
  return (
    <div className="App">
  <AddTask/>
  <ListTask/>
    </div>
  );
}

export default App;
