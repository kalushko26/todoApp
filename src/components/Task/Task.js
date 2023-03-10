//* Компонент списка задач

import React, { Component } from 'react';
import './Task.css';

export default class Task extends Component {

    constructor() {
        super();
        // В state хранятся свойства обьекта
        this.state = {
            done: false
        };

        // Обработчик событий при нажатии на задачу
        this.onLabelClick = () => {
            this.setState({
                done: true
            });
        };
    }

    render() {

        const { label, important = false } = this.props;
        const { done } = this.state;

        let classNames = 'todo-list';
        if (done) {
            classNames += 'completed';
        }

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <div className='view'>
                <input className="toggle" type="checkbox" />
                <label
                    style={style}
                    onClick={this.onLabelClick}>
                    {label}
                    <span className="description">Редактировать задачу</span>
                    <span className="created">создана 5 мин. назад</span>
                </label>


                <button className="icon icon-edit"></button>
                <button className="icon icon-destroy"></button>
            </div>
        );
    }
}
