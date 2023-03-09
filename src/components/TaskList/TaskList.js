//* Компонент списка задач

import React from 'react';
import './TaskList.css';

const TaskList = ({ label, important = false }) => {

    const style = {
        color: important ? 'steelblue' : 'black',
        fontWeight: important ? 'bold' : 'normal'
    };

    return (
        <div className="view">
            <input className="toggle" type="checkbox" />
            <label
                style={style}>
                {label}
                <span className="description">Редактировать задачу</span>
                <span className="created">создана 5 мин. назад</span>
            </label>


            <button className="icon icon-edit"></button>
            <button className="icon icon-destroy"></button>
        </div>
    );
}

export default TaskList;