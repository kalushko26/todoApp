//* Главный компонент верстки

import React from 'react';
import './app.css';

import Footer from '../Footer';
import NewTaskForm from '../NewTaskForm';
import Task from '../Task';
// import TaskFilter from '../TaskFilter';

const App = () => {

    const todoData = [
        { label: 'Сделать webpack', important: false, id: 1 },
        { label: 'Выучить JS', important: false, id: 2 },
        { label: 'Выучить React', important: true, id: 3 }
    ];

    return (
        <section className='todoapp'>
            <NewTaskForm toDo={1} done={3} />
            <section className='main'>
                <Task todos={todoData} />
                <Footer />
            </section>
        </section>

    );
}

export default App;