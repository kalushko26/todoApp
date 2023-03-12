//* Компонент задачи

import React from 'react';
import './TaskList.css';

import Task from '../Task/Task';

function TaskList({ todoData, onDeleted, onToggleDone }) {

    const elements = todoData.map((item) => {
        const { id, ...itemProps } = item;

        return (
            <Task {...itemProps}
                key={item.id}
                onDeleted={() => onDeleted(item.id)}
                completed={item.completed}
                onToggleDone={() => onToggleDone(item.id)}
            />
        )
    })

    return (
        <ul className="todo-list">
            {elements}
        </ul>
    )
}

export default TaskList;

    // return (
    //     <ul className='todo-list'>
    //         {(todoData.map((data) => {
    //             return (
    //                 <Task
    //                     key={data.id}
    //                     completed={data.completed}
    //                 />
    //             );
    //         })
    //         )}
    //     </ul>);


// const elements = todos.map((item) => {
//     const { id, ...itemProps } = item;

//     return (
//         <li
//             key={id}>
//             <Task {...itemProps} />
//         </li>
//     );
// })

// return (
//     <ul className="todo-list">
//         {elements}
//     </ul>
// );


/* <li className="completed">
<li className="editing">
<input type="text" className="edit" value="Editing task" /> */