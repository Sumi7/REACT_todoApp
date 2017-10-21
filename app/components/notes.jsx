import React from 'react';
import Task from './task'

export default ({notes, onDelete}) => (
    <ul>
        {notes.map(note=>
            <li key = {note.id}>
                <Task task = {note.task} onDelete = {onDelete.bind(note.id)}/>
            </li>
        )}
    </ul>
)
