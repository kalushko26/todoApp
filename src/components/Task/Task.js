//* Компонент списка задач

import React, { Component } from 'react';
import './Task.css';

export default class Task extends Component {

    /*
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
    */

    render() {

        const { label, onDeleted, done, onToggleDone } = this.props;
        // const { done } = this.state;

        let classNames = '';

        // const style = {
        //     color: important ? 'steelblue' : 'black',
        //     fontWeight: important ? 'bold' : 'normal'
        // };

        return (
            <li className={done ? (classNames += 'completed') : classNames}>
                <div className='view'>
                    <input
                        className="toggle"
                        type="checkbox" />
                    <label
                        // style={style}
                        onClick={onToggleDone}>

                        <span className="description">{label}</span>
                        <span className="created">создана 5 мин. назад</span>
                    </label>

                    <button
                        type="button"
                        className="icon icon-edit"

                    ></button>
                    <button
                        type="button"
                        className="icon icon-destroy"
                        onClick={onDeleted}
                        value
                    ></button>
                </div>
            </li>
        );
    }
}
