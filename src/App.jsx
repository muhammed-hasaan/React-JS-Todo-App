import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [count, setCount] = useState(0)
  function clicked(){
  var input = document.getElementById("input");
  document.getElementById("div").innerHTML +=` ${input.value} <hr/> `;
  input.value = ""
 
}



const delthis = ()=>{
  document.getElementById("div").innerHTML = ""

}
  return (
    <>

     <div class="container">
      <h1>Todo App</h1>
        <div class="form">
            <input type="text" class="input" id='input'  />
            <input type="submit" class="add" value="Add Task"  onClick={clicked}/>
        </div>
        <div id='div' class="tasks">
        {/* <FontAwesomeIcon icon="fa-solid fa-trash" /> */}
        
        </div>
        <div  onClick={delthis}  class="delete-all">Delete all</div>
        </div>
    </>
  )
}

export default App
