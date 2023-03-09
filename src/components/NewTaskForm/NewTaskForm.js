//* Компонент формы для добавления

import React from 'react';
import './NewTaskForm.css';

const NewTaskForm = ({toDo, done}) => {
    return (
        <header className="header">
            <h1>todos</h1>
            <label>
                <input
                    className='new-todo'
                    placeholder="Добавить задачу"
                    autoFocus />
            </label>
        </header>
    );
}

export default NewTaskForm;