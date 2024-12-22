import React, {useState, useCallback} from "react";
import { Input } from "../atoms/input/Input"
import { RegisterButton } from "../atoms/button/RegisterButton"

export const InputArea = ({ onAddTask }) => {
    const [task, setTask] = useState("");
    const [personInCharge, setPersonInCharge] = useState("");

    const handleTaskChange = useCallback((event) => {
        setTask(event.target.value);
    }, []);

    const handlePersonInChargeChange = useCallback((event) => {
        setPersonInCharge(event.target.value);
    }, []);

    const handleRegister = () => {
        onAddTask(task, personInCharge);
        setTask("");
        setPersonInCharge("");
    }

   return (
        <div>
            <h2>New Task</h2>
            <Input placeholder="A new task" value={task} onChange={handleTaskChange} />
            <Input placeholder="Person in charge" value={personInCharge} onChange={handlePersonInChargeChange} />
            <RegisterButton onClick={handleRegister} />
        </div>
    )
}