import React, { useState, useContext } from 'react';
import styles from './Input.module.css';
import { addTask, showTasks } from '../actions';
import { TasksContext } from '../TasksContext';

const Input = (props) => {
    const [ input, setInput ] = useState('')
    const { setTasks } = useContext(TasksContext)

    const onChange = (e) => {
        setInput(e.target.value)
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        addTask(input)
        setInput('')
        showTasks(setTasks)
    }

    return (
        <form onSubmit={onSubmit} className={styles.form}> 
            <input 
            value={input} 
            onChange={onChange} 
            className={styles.inputTask} 
            placeholder='Type your task here'/>
            <button className={styles.button} >submit</button>
        </form>
    )
    
}

export default Input;