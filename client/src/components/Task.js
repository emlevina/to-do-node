import React from 'react';
import styles from './Task.module.css';
import { useState, useContext } from 'react';
import { checkTask, deleteTask, showTasks } from '../actions';
import { TasksContext } from '../TasksContext';

const Task = ({ task }) => {
    const [isCompleted, setIsCompleted] = useState(task.completed)
    const { setTasks } = useContext(TasksContext)

    const onChange = async (e) => {
        checkTask(task._id, isCompleted)
        setIsCompleted(!isCompleted)
    };

    const onClick = (e) => {
        e.currentTarget.disabled = true;
        deleteTask(task._id)
        showTasks(setTasks)
    }

    return (
        <div className={styles.task}>
            <input type="checkbox" defaultChecked={isCompleted} onChange={onChange} /><span className={isCompleted ? styles.taskDone : styles.taskUndone}>{task.name}</span>
            <button onClick={onClick} className={styles.button}>Delete</button>
        </div>
    )
}

export default Task;