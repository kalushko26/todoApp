//* Компонент фильтра в футере

import React, { Component } from 'react';
import './TasksFilter.css';

export default class TasksFilter extends Component {

    buttons = [
        { name: 'all', label: 'Все' },
        { name: 'active', label: 'Активно' },
        { name: 'done', label: 'Выполнено' }
    ];

    render() {
        const { filter } = this.props;
        
        const buttons = this.buttons.map(({ name, label }) => {
            const isActive = filter === name;
            const clazz = isActive ? 'selected' : ''

            return (
                <li>
                    <button
                        type="button"
                        className={clazz}
                        key={name}>
                        {label}
                    </button>
                </li>
            )
        })

        return (
            <ul className="filters">
                {buttons}
            </ul>
        );
    }
} 
