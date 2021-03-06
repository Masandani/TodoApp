import React from 'react'
import { TaskItem } from '../'

import './TaskList.css'

const TaskList = ({ tasks, deleteTask, handleChangeStatus }) => (
    <div className="TaskList">
        <ul>
            {tasks.map(task => <TaskItem key={`key-${task.id}`}
                task={task}
                deleteTask={deleteTask}
                handleChangeStatus={handleChangeStatus}
            />
            )}
        </ul>

    </div>

);

export default TaskList;