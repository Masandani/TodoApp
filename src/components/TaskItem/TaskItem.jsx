import React from 'react'
// import { FaTrashAlt } from 'react-icons/fa';
import './TaskItem.css'

const TaskItem = ({ task, deleteTask, handleChangeStatus }) => (
    <div>
        <li className="TaskItem">
            <input onChange={() => handleChangeStatus(task.id)} type="checkbox" checked={task.status} />
            <h2>{task.title}</h2>
            <button onClick={() => deleteTask(task.id)}>X</button>
        </li>
    </div>
);

export default TaskItem;
