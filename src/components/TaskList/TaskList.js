//* Компонент списка задач

import React, { Component } from 'react';
import './TaskList.css';

export default class TaskList extends Component {

    constructor() {
        super();

        // Обработчик событий при нажатии на задачу
        this.onLabelClick = () => { 
            console.log(`Done: ${this.props.label}`) };
    }

    render() {

        const { label, important = false } = this.props;

        const style = {
            color: important ? 'steelblue' : 'black',
            fontWeight: important ? 'bold' : 'normal'
        };

        return (
            <div className="view">
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
