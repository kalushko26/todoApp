//* Компонент задачи

import React from 'react';
import './Task.css';

import TaskList from '../TaskList';

const Task = ({ todos }) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li
                key={id}
                className="completed">
                <TaskList {...itemProps} />
            </li>
        );
    })

    return (
        <ul className="todo-list">
            {elements}
        </ul>
    );
}

/* <li className="completed">
<li className="editing">
<input type="text" className="edit" value="Editing task" /> */

export default Task;

