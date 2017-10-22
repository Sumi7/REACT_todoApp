import React from 'react';
import Task from './task';
import Editable from './editable';

export default ({notes, onDelete, onEdit, onTaskClick}) => (
    <ul>{notes.map(({id, editing, task}) =>
            <li key = {id}>
                <Task onClick = {onTaskClick.bind(null, id)}>
                    <Editable editing = {editing} value = {task} onEdit = {onEdit.bind(null, id)} />
                    <button onClick = {onDelete.bind(null, id)}>x</button>
                </Task>
            </li>
        )}
    </ul>
)
