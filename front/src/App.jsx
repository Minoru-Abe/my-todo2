import React, { useState, useEffect } from "react";
import axios from "axios";
import { InputArea } from "./molecules/InputArea";
import { CompleteButton } from "./atoms/button/CompleteButton";
import { RevertButton } from "./atoms/button/RevertButton";
import { RemoveButton } from "./atoms/button/RemoveButton";

function App() {
  const [incompletedTasks, setIncompletedTasks] = useState([]);
  const [completedTasks, setCompletedTasks] = useState([]);
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL;

  useEffect(() => {
    const fetchIncompleteTasks = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/tasks/incomplete`
        );
        setIncompletedTasks(response.data);
      } catch (error) {
        console.error("Error fetching incomplete tasks:", error);
      }
    };

    const fetchCompleteTasks = async () => {
      try {
        const response = await axios.get(
          `${API_BASE_URL}/tasks/complete`
        );
        setCompletedTasks(response.data);
      } catch (error) {
        console.error("Error fetching complete tasks:", error);
      }
    };

    fetchIncompleteTasks();
    fetchCompleteTasks();
  }, []);

  const addTask = async (name, assignee) => {
    try {
      const response = await axios.post(`${API_BASE_URL}/tasks`, {
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

  const completeTask = async (id) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/tasks/complete/${id}`
      );

      console.log(response);

      if (response.status === 200) {
        const taskToComplete = incompletedTasks.find((task) => task.id === id);
        setCompletedTasks([...completedTasks, taskToComplete]);
        setIncompletedTasks(incompletedTasks.filter((task) => task.id !== id));
      } else {
        console.error("Failed to complete task:", response.data);
      }
    } catch (error) {
      console.error("Error completing task:", error);
    }
  };

  const revertTask = async (id) => {
    try {
      const response = await axios.put(
        `${API_BASE_URL}/tasks/revert/${id}`
      );
      console.log(response);

      if (response.status === 200) {
        const taskToRevert = completedTasks.find((task) => task.id === id);
        setIncompletedTasks([...incompletedTasks, taskToRevert]);
        setCompletedTasks(completedTasks.filter((task) => task.id !== id));
      } else {
        console.error("Failed to revert task:", response.data);
      }
    } catch (error) {
      console.error("Error reverting task:", error);
    }
  };

  const removeTask = async (id) => {
    try {
      const response = await axios.delete(`${API_BASE_URL}/tasks/${id}`);
      console.log(response);
      if (response.status === 200) {
        setIncompletedTasks(incompletedTasks.filter((task) => task.id !== id));
      } else {
        console.error("Failed to remove task:", response.data);
      }
    } catch (error) {
      console.error("Error removing task:", error);
    }
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
