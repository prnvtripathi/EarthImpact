"use client"

import React, { useState } from "react";
import "../globals.css"
function TodoList() {
    const [todos, setTodos] = useState([]);
    const [selectedOption, setSelectedOption] = useState('')
    const [newXP, setXP] = useState(0);

    //   const handleInputChange = (event) => {
    //     setNewTodo(event.target.value);
    //   };
    // todos = [
    //     "drive less",
    //     "car pool",
    //     "fly less"
    // ]
    const handleSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, newTodo]);
        setNewTodo("");
    };

    const handleDelete = (index) => {
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(newTodos);
        setXP(newXP + 10)
    };

    return (
        <div>
            <h1>Tasks' List</h1>
            <form onSubmit={handleSubmit}>
                <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                    <option value="Option 0">Select an option</option>
                    <option value="Option 1">Option 1</option>
                    <option value="Option 2">Option 2</option>
                    <option value="Option 3">Option 3</option>
                </select>
                <button onClick={() => setTodos([...todos, selectedOption])}>Add Todo</button>
            </form>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>
                        {todo}
                        <button onClick={() => handleDelete(index)}>Completed</button>
                    </li>
                ))}
            </ul>
            <h1>XP {newXP}</h1>
        </div>
    );
}

export default TodoList;
