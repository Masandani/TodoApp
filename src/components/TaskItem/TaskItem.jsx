import React from 'react'
import { FiTrash2 } from 'react-icons/fi';
import './TaskItem.css'

const TaskItem = ({ task, deleteTask, handleChangeStatus }) => (
    <div>
        <li className="TaskItem">
            <input onChange={() => handleChangeStatus(task.id)} type="checkbox" checked={task.status} />
            <h2>{task.title}</h2>
            <button onClick={() => deleteTask(task.id)}><FiTrash2 /></button>
        </li>
    </div>
);

export default TaskItem;