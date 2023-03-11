//* Компонент фильтра в футере

import React, { Component } from 'react';
import './TasksFilter.css';

export default class TasksFilter extends Component {
    render() {
        return (
            <ul className="filters">
                <li>
                    <button
                        type="button"
                        className="selected">Все</button>
                </li>
                <li>
                    <button
                        type="button">Активно</button>
                </li>
                <li>
                    <button
                        type="button">Выполнено</button>
                </li>
            </ul>
        );
    }
} 
