import React from "react";
import { useState } from "react";
import Listitems from "./list";

function Input() {
  const [toDo, settoDo] = useState([]);

  const [newTask, setnewTask] = useState("");

  const addTask = () => {
    settoDo([...toDo, newTask]);
    setnewTask("");
  };

  const delTask = (id) => {
    settoDo((toDo) => {
      return toDo.filter((arrElem, index) => {
        return index !== id;
      });
    });
  };
  const handleClick = (e) => {
    if (e.target.style.textDecoration) {
      e.target.style.removeProperty("text-decoration");
    } else {
      e.target.style.setProperty("text-decoration", "line-through");
    }
  };
  const handleImportant = (e) => {
    if (e.target.style.backgroundColor) {
      e.target.style.removeProperty("background-color");
    } else {
      e.target.style.setProperty("background-color", "#FBFFB1");
    }
  };

  return (
    <div className="inputArea container-fluid">
      <ol>
        {toDo.map((itemval, index) => {
          return (
            <Listitems
              key={index}
              id={index}
              Listval={itemval}
              Delete={delTask}
              handleClick={handleClick}
              handleImportant={handleImportant}
            />
          );
        })}
      </ol>

      <div className="add-element">
        <input
          id="inp"
          type="text"
          className="add-element"
          value={newTask}
          onChange={(e) => setnewTask(e.target.value)}
        />
        <div class="icons2">
          <i class="fa-regular fa-pen-to-square "></i>
          <i class="fa-solid fa-circle-plus" onClick={addTask}></i>
        </div>
      </div>
    </div>
  );
}
export default Input;
