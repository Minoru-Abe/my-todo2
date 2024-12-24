import React, {useState, useCallback} from "react";
import { Input } from "../atoms/input/Input"
import { RegisterButton } from "../atoms/button/RegisterButton"

export const InputArea = ({ onAddTask }) => {
    const [name, setName] = useState("");
    const [assignee, setAssignee] = useState("");

    const handleNameChange = useCallback((event) => {
        setName(event.target.value);
    }, []);

    const handleAssigneeChange = useCallback((event) => {
        setAssignee(event.target.value);
    }, []);

    const handleRegister = () => {
        onAddTask(name, assignee);
        setName("");
        setAssignee("");
    }

   return (
        <div>
            <h2>New Task</h2>
            <Input placeholder="Task name" value={name} onChange={handleNameChange} />
            <Input placeholder="Assignee" value={assignee} onChange={handleAssigneeChange} />
            <RegisterButton onClick={handleRegister} />
        </div>
    )
}