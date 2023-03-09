//* Компонент фильтра в футере

import React from 'react';
import './TasksFilter.css';

const TasksFilter = () => {
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

export default TasksFilter;