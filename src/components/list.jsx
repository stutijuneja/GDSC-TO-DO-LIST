import React from "react";
import ListTime from "./time";

function Listitems(props) {
  return (
    <div>
      <li onClick={props.handleClick} onDoubleClick={props.handleImportant}>
        <i
          className="fa-solid fa-trash"
          onClick={() => props.Delete(props.id)}
        ></i>
        {props.Listval}
      </li>
      <ListTime />
    </div>
  );
}

export default Listitems;
