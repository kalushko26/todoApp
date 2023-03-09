//* Компонент футера с информацией и кнопками

import React from 'react';
import './Footer.css';

import TasksFilter from '../TasksFilter';

const Footer = () => {
    return (
        <footer className="footer">
            <span className="todo-count">Всего задач: 1</span>
            <TasksFilter />
            <button className="clear-completed">Очистить выполненные</button>
        </footer>
    );
}

export default Footer;