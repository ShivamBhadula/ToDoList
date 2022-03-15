import React,{useState} from 'react'
import './App.css';
import InputArea from './Components/inputarea';
import ToDoItem  from './Components/ToDoItem' ;

function App() {
  const  [items,setItems]=useState([]);

  const addItems=(inputtext)=>{
    setItems((prevItems)=>{
      return [...prevItems,inputtext]
    })
  }

  const deleteItems=(id)=>{
    setItems((prevItems)=>{
      return prevItems.filter((item,index)=>{
        return index!==id;
      })
    })
  }
  return (
    <div className="container">
      <div className="heading">
      <h1>To-Do list</h1>
      </div>
      <InputArea onAdd={addItems}/>
      <div>
        <ul>{items.map((item,index) =>(
        <ToDoItem key={index} id={index} text={item} onChecked={deleteItems} />
      ))}</ul>
      </div>
      
      
    </div>
  );
}

export default App;
