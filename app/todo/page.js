"use client"

import { Montserrat } from 'next/font/google'
import { useState } from 'react'
import "../globals.css"

const montserrat = Montserrat({
    subsets: ["latin"],
    weight: ['100', '300', '400', '600', '900'],
    style: ["italic", "normal"],
})

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [done, setDone] = useState([]);
    const [selectedOption, setSelectedOption] = useState('')
    const [newXP, setXP] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        setTodos([...todos, newTodos]);
        setNewTodo("");
    };

    const handleDelete = (index) => {
        const itemToMove = todos[index];
        const newTodos = [...todos];
        newTodos.splice(index, 1);
        setTodos(todos.filter((item, i) => i !== index))
        setDone([...done, itemToMove])
        setTodos(newTodos);
        setXP(newXP + 10)
    };

    return (
        <div className={montserrat.className}>
            <h1>Tasks' List</h1>
            <form onSubmit={handleSubmit} className="todo-items">
                <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
                    <option value="Select">Select</option>
                    <option value="Walk">Walk</option>
                    <option value="Car Pool">Car Pool</option>
                    <option value="Go Office on Bike">Go Office on Bike</option>
                    <option value="Use Public Transport">Use Public Transport</option>
                    <option value="Use Solar Energy">Use Solar Energy</option>
                    <option value="Use Wind Energy">Use Wind Energy</option>
                    <option value="Use Geothermal Energy">Use Geothermal Energy</option>
                    <option value="Use Hydro Energy">Use Hydro Energy</option>
                    <option value="Use Less Water">Use Less Water</option>
                    <option value="Use Less Electricity">Use Less Electricity</option>
                    <option value="Use Less Gas">Use Less Gas</option>
                    <option value="Use Less Plastic">Use Less Plastic</option>
                    <option value="Use Less Paper">Use Less Paper</option>
                    <option value="Use Less Wood">Use Less Wood</option>
                    <option value="Reduce Carbon Diet">Reduce Carbon Diet</option>
                </select>
                <button onClick={() => setTodos([...todos, selectedOption])}>Add Todo</button>
            </form>
            <div className='todo-headings'>
                <h2>Tasks To-Do</h2>
                <h2>{newXP ? `XP ${newXP}` : ''}</h2>
            </div>
            <ul className="todo">
                {todos.map((todo, index) => (
                    <li key={index} className='todo-list'>
                        {todo}
                        <button onClick={() => handleDelete(index)}>✓</button>
                    </li>
                ))}
            </ul>
            <div className='todo-headings'>
                <h2>Tasks Completed</h2>
            </div>
            <ul className='done-tasks'>
                {done.map((item, index) => (
                    <li key={index} className='todo-list'>
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
