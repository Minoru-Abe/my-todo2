import React, { useState } from "react";
import axios from "axios";
import { InputArea } from "./molecules/InputArea";
import { CompleteButton } from "./atoms/button/CompleteButton";
import { RevertButton } from "./atoms/button/RevertButton";
import { RemoveButton } from "./atoms/button/RemoveButton";

function App() {
  const [incompletedTasks, setIncompletedTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  const addTask = async (name, assignee) => {
    try {
      const response = await axios.post("http://localhost:8080/tasks", {
        name: name,
        assignee: assignee,
        status: "incomplete",
      });
      console.log(response);
      setIncompletedTasks([...incompletedTasks, response.data]);
    } catch (error) {
      console.error("Error creating task:", error);
    }
  };

  const completeTask = (index) => {
    const taskToComplete = incompletedTasks[index];
    setCompletedTasks([...completedTasks, taskToComplete]);
    setIncompletedTasks(incompletedTasks.filter((_, i) => i !== index));
  };

  const revertTask = (index) => {
    const taskToRevert = completedTasks[index];
    setIncompletedTasks([...incompletedTasks, taskToRevert]);
    setCompletedTasks(completedTasks.filter((_, i) => i !== index));
  };

  const removeTask = (index) => {
    setIncompletedTasks(incompletedTasks.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <InputArea onAddTask={addTask} />
      <div>
        <h2>Incomplete Tasks</h2>
        <ul>
          {incompletedTasks.map((task, index) => (
            <li key={index}>
              {task.name} - {task.assignee}
              <CompleteButton onClick={() => completeTask(index)} />
              <RemoveButton onClick={() => removeTask(index)} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Complete Tasks</h2>
        <ul>
          {completedTasks.map((task, index) => (
            <li key={index}>
              {task.name} - {task.assignee}
              <RevertButton onClick={() => revertTask(index)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;