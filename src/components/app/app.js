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
        ],
        term: 'JS',
        filter: 'all' // active , all, done
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

    // Функция поиска search для search
    search(items, term) {
        if (term.length === 0) {
            return items;
        }

        return items.filter((item) => {
            return item.label.indexOf(term) > -1;
        });
    }

    // Реализация filter
    filter(items, filter) {

        switch (filter) {
            case 'all':
                return items;
            case 'active':
                return items.filter((item) => !item.done);
            case 'done':
                return items.filter((item) => item.done);
            default:
                return items;
        };
    }

    render() {
        const { todoData, term, filter } = this.state
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;

        const filterItems = this.filter(this.search(todoData, term), filter);

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
