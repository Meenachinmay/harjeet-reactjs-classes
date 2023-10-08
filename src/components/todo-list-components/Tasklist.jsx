import React, { useState } from "react";
import Task from "./Task";
import "../../App.css";

import { tasks } from "../../mock-data/tasks.data";

const Tasklist = () => {
  const [inHouseTasks, setInHouseTasks] = useState(tasks);

  const handleDelete = (id) => {
    console.log('id handleDelete', id)
    const updatedTasks = inHouseTasks.filter((task) => task.id !== id);
    setInHouseTasks(updatedTasks);
  };

  const handleDone = (id) => {
    console.log('id handleDone', id)
    const updatedTasks = inHouseTasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: true };
      }
      return task;
    });

    const _updatedTasks = updatedTasks.filter(task => task.status === false);

    setInHouseTasks(_updatedTasks);
  };

  return (
    <div className="task__list">
      {inHouseTasks.map((task) => (
        <Task title={task.title} id={task.id} key={task.id} status={task.status} handleDelete={handleDelete} handleDone={handleDone} />
      ))}
    </div>
  );
};

export default Tasklist;
