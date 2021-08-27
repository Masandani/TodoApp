import React, { useState } from 'react'
import './AddTaskForm.css'

const AddTaskForm = ({addTask}) => {

    const [getTask, setGetTask] = useState('');

    const handleChangeAddTask = (event) => {
        if (event) event.preventDefault();
        setGetTask(event.target.value);
    };

    const handleSubmit = (event) => {
        if (event) event.preventDefault();
        if(!getTask || getTask === ''){
            return
        }
        addTask(getTask);
    }
    
    return (
        <div className="AddTaskForm">
            <form onSubmit={handleSubmit}>
                <input  onChange={handleChangeAddTask} type="text" placeholder="What needs to be done?">
                </input>
                <button tupe="submit">
                    Add
                </button>
            </form>
        </div>
    )
}


export default AddTaskForm;