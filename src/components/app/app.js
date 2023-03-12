//* Главный компонент верстки

import React, { Component } from 'react';
import './app.css';

import Footer from '../Footer';
import NewTaskForm from '../NewTaskForm';
import TaskList from '../TaskList';
// import TaskFilter from '../TaskFilter';

export default class App extends Component {
    // Генерация ID
    maxId = 4;

    // Форма ввода данных
    createTodoItem(label) {
        return ({
            label,
            done: false,
            id: this.maxId++
        });
    };

    // Исходный массив данных (задач)
    state = {
        todoData: [
            this.createTodoItem('Сделать webpack'),
            this.createTodoItem('Выучить JS'),
            this.createTodoItem('Выучить React')
        ]
    };

    // Удаление элемента из массива
    deleteItem = (id) => {
        this.setState(({ todoData }) => {
            const idx = todoData.findIndex((el) => el.id === id);
            // console.log(idx)

            const newArray = [
                ...todoData.slice(0, idx),
                ...todoData.slice(idx + 1)
            ];

            return {
                todoData: newArray
            };
        });
    };

    // Добавление элемента в массив
    addTodoItem = (text) => {
        const newItem = this.createTodoItem(text);

        this.setState(({ todoData }) => {
            const newArr = [
                ...todoData,
                newItem
            ];

            return {
                todoData: newArr
            };
        });
    };

    toggleProperty(arr, id, propName) {
        const idx = arr.findIndex((el) => el.id === id);

        const oldItem = arr[idx];
        const newItem = {
            ...oldItem,
            [propName]: !oldItem[propName]
        };

        return [
            ...arr.slice(0, idx),
            newItem,
            ...arr.slice(idx + 1)
        ];
    }

    // Реакция при нажатии на кнопку done
    onToggleDone = (id) => {
        this.setState(({ todoData }) => {
            return {
                todoData: this.toggleProperty(todoData, id, 'done')
            }
        });
    };

    render() {
        const { todoData } = this.state
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        return (
            <section className='todoapp'>
                <NewTaskForm addTodoItem={this.addTodoItem} />
                <TaskList
                    todoData={todoData}
                    onDeleted={this.deleteItem}
                    onToggleDone={this.onToggleDone} />
                <Footer
                    todoData={todoData}
                    toDo={todoCount} />
            </section>
        );
    }
}
