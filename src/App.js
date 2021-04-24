import React, { useState } from "react";

const App=()=>{

  const [inputList,setInputList] = useState("buy apple");
  const [items,setItems]= useState([]);

  const itemEvent=(event)=>{
    setInputList(event.target.value);
  };

  const deleteItems = () => {
    return(
      <>
      <p>Deleted</p>
      </>
    )
  }

  const listOfItems=()=>{
    setItems((olditems) => {
      return [...olditems, inputList];
    });
    setInputList("");
  };
  return(
    <>
    <div className="main_div">
      <div className="center_div">
        <br/>
        <h1> TODO LIST</h1>
        <br/>
        <input type="text" placeholder="Add a Items" onChange={itemEvent} value={inputList} />
        <button onClick={listOfItems}> + </button>

        <ol>
          {/* <li> {inputList} </li> */}
          {
          items.map((itemval)=> {
            return (
            <div className="todo_style">
              <p class="fa fa-times" aria-hidden="true" onClick={deleteItems}>X</p>
              <li>{itemval}</li></div>)
          })
        }
        </ol>
      </div>
    </div>
    </>
  )
};

export default App;