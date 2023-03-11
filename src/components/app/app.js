//* Главный компонент верстки

import React, { Component } from 'react';
import './app.css';

import Footer from '../Footer';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
// import TaskFilter from '../TaskFilter';

export default class App extends Component {
    state = {
        todoData: [
            { label: 'Сделать webpack', id: 1 },
            { label: 'Выучить JS', id: 2 },
            { label: 'Выучить React', id: 3 }
        ]
    };

    // generate id
    maxId = 4;

    // add element in array
    addTodoItem = (text) => {
        const newItem = {
            label: text,
            id: this.maxId++
        };

        this.setState(({ todoData }) => {
            const newArr = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArr
            };
        });
    }

    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            // console.log(idx)

            const before = todoData.slice(0, idx);
            const after = todoData.slice(idx + 1);

            const newArray = [...before, ...after];

            return {
                todoData: newArray
            };
        });
    }

    render() {
        return (
            <section className='todoapp'>
                <NewTaskForm addTodoItem={this.addTodoItem} />
                <TaskList
                    todoData={this.state.todoData}
                    onDeleted={this.deleteItem} />
                <Footer
                    todoData={this.state.todoData} />
            </section>
        );
    }
}
