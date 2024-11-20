import React, { useState } from "react";
import AddTodoForm from "./AddTodoForm";
import AddTodoList from "./AddTodoList";

function Todocontainer() {
  const [activityArr, setActivityArr] = useState([
    {
      id: 1,
      activity: "go for walk",
    },
    {
      id: 2,
      activity: "Have a break Fast",
    },
    {
      id: 3,
      activity: "Do excersice",
    },
  ]);

  return (
    <div>
      <div className="flex gap-5 flex-wrap">
        <AddTodoForm activityArr={activityArr} setActivityArr={setActivityArr} />
        <AddTodoList activityArr={activityArr} setActivityArr={setActivityArr} />
      </div>
    </div>
  );
}

export default Todocontainer;
