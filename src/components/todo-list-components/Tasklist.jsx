import React from 'react'
import Task from './Task';
import '../../App.css'

const Tasklist = () => {
    return (
        <div className='task__list'>
            <Task />
            <Task />
            <Task />
            <Task />
        </div>
    )
}

export default Tasklist;