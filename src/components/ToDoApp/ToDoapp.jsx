import React, { useState, useEffect } from 'react'
import { v4 as uuidv4 } from 'uuid';
import { AddTaskForm, TaskList, FilterFooter } from '../'
import './ToDoApp.css'
const ToDoApp = () => {
    const [tasks, setTasks] = useState([])
    const [filteredTasks, setfilteredTasks] = useState([])
    const [filter, setFilter] = useState('all')
    const [refresh, setRefresh] = useState(0)

    useEffect(() => {
        let storedTaskList = localStorage.getItem('tasks');
        if(storedTaskList) {
            storedTaskList = JSON.parse(storedTaskList)
        }
        setTasks(storedTaskList)
    }, [])

    useEffect(() => {
            if (filter === 'all') {
            setfilteredTasks(tasks)
        }
        if (filter === 'completed') {
            const newCompletedFilterTasks = tasks.filter(task => task.status)
            setfilteredTasks(newCompletedFilterTasks)
        }
        if (filter === 'active') {
            const newActivedFilterTasks = tasks.filter(task => !task.status)
            setfilteredTasks(newActivedFilterTasks)
        }

    }, [filter, tasks, refresh])

    const addTask = (taskTitle) => {
        const newTasks=[
            ...tasks,
            {
                id: uuidv4(),
                title: taskTitle,
                status: false,
            }
        ]
        setTasks(newTasks)
        localStorage.setItem('tasks',JSON.stringify(newTasks))
    }

    const deleteTask = (taskId) => {
        let newTaskList = tasks
        delete newTaskList[tasks.findIndex((task) => task.id === taskId)]
        newTaskList = newTaskList.filter(item => item);
        setTasks(newTaskList)
        localStorage.setItem('tasks',JSON.stringify(newTaskList))
    }

    const handleChangeStatus = (taskId) => {
        console.log(taskId)
        let newTaskList = tasks
        const taskIndex = tasks.findIndex((task) => task.id === taskId);
        newTaskList[taskIndex].status = !newTaskList[taskIndex].status;
        setTasks(newTaskList);
        localStorage.setItem('tasks',JSON.stringify(newTaskList))
        setRefresh(refresh + 1);
        
    }

    return (
        <div className="ToDoApp">
            <AddTaskForm addTask={addTask} />
            <TaskList tasks={filteredTasks}
                deleteTask={deleteTask}
                handleChangeStatus={handleChangeStatus}
            />
            <FilterFooter updateFilter={setFilter} tasks={tasks} />
        </div>
    )
}

export default ToDoApp;