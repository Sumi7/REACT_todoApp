import React from 'react';
import Task from './task';
import Editable from './editable';

export default ({notes, onDelete=() => {}, onEdit=() => {}, onTaskClick=() => {}}) => (
    <ul>
        {notes.map(note =>
            <li key = {note.id}>
                <Task onClick = {onTaskClick.bind(null, note.id)}>
                    <Editable editing = {note.editing} value = {note.task} onEdit = {onEdit.bind(null, note.id)} />
                    <button onClick = {onDelete.bind(null, note.id)}>X</button>
                </Task>
            </li>
        )}
    </ul>
)
