//* Компонент футера с информацией и кнопками

import React, { Component } from 'react';
import PropTypes from 'prop-types'

import './Footer.css';

import TasksFilter from '../TasksFilter';

export default class Footer extends Component {
    static defaultProps = {
        onDelete: () => { },
        onFilterChange: () => { },
        todoData: [],
        todoCount: 0,
        filter: 'all',
    }


    render() {
        const { todoCount, filter } = this.props;


        return (
            <footer className="footer">
                <span className="todo-count">Всего задач: {todoCount}</span>
                <TasksFilter
                    filter={filter} />
                <button className="clear-completed">Очистить выполненные</button>
            </footer>
        );
    }
}