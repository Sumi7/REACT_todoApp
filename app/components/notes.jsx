import React from 'react';
import Task from './task';
import Editable from './editable';

export default ({notes, onDelete=() => {}, onEdit=() => {}, onTaskClick=() => {}}) => (
    <ul>
        {notes.map(note=>
            <li key = {note.id}>
                <Task onTaskClick = {onTaskClick.bind(null, note.id)}>
                    <Editable editing = {note.editing} value = {note.task} onEdit = {onEdit.bind(null, note.id)}></Editable>
                    <button onDelete = {onDelete.bind(null, note.id)}>X</button>
                </Task>
            </li>
        )}
    </ul>
)
