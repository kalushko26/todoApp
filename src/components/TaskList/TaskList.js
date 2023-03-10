//* Компонент задачи

import React from 'react';
import './TaskList.css';

import Task from '../Task/Task';

const TaskList = ({ todos }) => {

    const elements = todos.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <li
                key={id}>
                <Task {...itemProps} />
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

export default TaskList;

