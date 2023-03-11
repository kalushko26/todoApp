//* Компонент формы для добавления

import React, { Component } from 'react';
import './NewTaskForm.css';

export default class NewTaskForm extends Component {

    render() {

        return (
            <form className="header">
                <h1>todos</h1>
                <label>
                    <input
                        className='new-todo'
                        placeholder="Добавить задачу"
                        autoFocus
                        onClick={() => this.props.addTodoItem('Hello world')} />
                </label>
            </form>
        );
    }
}

