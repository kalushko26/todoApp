//* Компонент формы для добавления

import React, { Component } from 'react';
import './NewTaskForm.css';

export default class NewTaskForm extends Component {

    state = {
        label: ''
    }

    // Достаём текущее значение поля onLabelChange
    onLabelChange = (e) => {
        this.setState({
            label: e.target.value
        });
    }

    // Добавляем новое значение onSubmit
    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodoItem(this.state.label)
        this.setState({
            label: ''
        });
    }

    render() {

        return (
            <form
                className="header"
                onSubmit={this.onSubmit}>

                <h1>todos</h1>
                <input
                    className='new-todo'
                    placeholder="Добавить задачу"
                    autoFocus
                    onChange={this.onLabelChange}
                    value={this.state.label}
                />
            </form>
        );
    }
}

