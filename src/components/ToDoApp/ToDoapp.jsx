import React from 'react'
import { AddTaskForm, TaskList, FilterFooter } from '..'

const ToDoApp = () => (
    <div className="To">
        <AddTaskForm />
        <TaskList />
        <FilterFooter />
    </div>
);

export default ToDoApp;