import React, { useState, useEffect } from "react";
import axios from "axios";
import { InputArea } from "./molecules/InputArea";
import { CompleteButton } from "./atoms/button/CompleteButton";
import { RevertButton } from "./atoms/button/RevertButton";
import { RemoveButton } from "./atoms/button/RemoveButton";

function App() {
  const [incompletedTasks, setIncompletedTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);

  useEffect(() => {
    const fetchIncompleteTasks = async () => {
      try {
        const response = await axios.get("http://localhost:8080/tasks/incomplete");
        setIncompletedTasks(response.data);
      } catch (error) {
        console.error("Error fetching incomplete tasks:", error);
      }
    };

    fetchIncompleteTasks();
  }, [])

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

  const completeTask = (id) => {
    const taskToComplete = incompletedTasks.find(task => task.id === id);
    setCompletedTasks([...completedTasks, taskToComplete]);
    setIncompletedTasks(incompletedTasks.filter(task => task.id !== id));
  };

  const revertTask = (id) => {
    const taskToRevert = completedTasks.find(task => task.id === id);
    setIncompletedTasks([...incompletedTasks, taskToRevert]);
    setCompletedTasks(completedTasks.filter(task => task.id !== id));
  };

  const removeTask = (id) => {
    setIncompletedTasks(incompletedTasks.filter(task => task.id !== id));
  };

  return (
    <div className="App">
      <InputArea onAddTask={addTask} />
      <div>
        <h2>Incomplete Tasks</h2>
        <ul>
          {incompletedTasks.map((task) => (
            <li key={task.id}>
              {task.id} - {task.name} - {task.assignee}
              <CompleteButton onClick={() => completeTask(task.id)} />
              <RemoveButton onClick={() => removeTask(task.id)} />
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Complete Tasks</h2>
        <ul>
          {completedTasks.map((task) => (
            <li key={task.id}>
              {task.id} - {task.name} - {task.assignee}
              <RevertButton onClick={() => revertTask(task.id)} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;