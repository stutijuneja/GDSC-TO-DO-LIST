import React from "react";

function ListTime() {
  let newDate = new Date();
  let hour = newDate.getHours();
  let minutes = newDate.getMinutes();
  let time = "";
  if (hour <= 12) {
    time = "AM";
  } else {
    time = "PM";
  }

  return (
    <div>
      <p className="list-time">
        Today at {hour}:{minutes} {time}
      </p>
    </div>
  );
}

export default ListTime;
