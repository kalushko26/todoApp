//* Компонент фильтра в футере

import React, { Component } from 'react';
import './TasksFilter.css';

export default class TasksFilter extends Component {
    render() {
        return (
            <ul className="filters">
                <li>
                    <button className="selected">Все</button>
                </li>
                <li>
                    <button>Активно</button>
                </li>
                <li>
                    <button>Выполнено</button>
                </li>
            </ul>
        );
    }
} 
