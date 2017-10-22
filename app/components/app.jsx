import React from 'react';
import uuid from 'uuid';

import Notes from './notes';


export default class App extends React.Component{
    constructor(props){
        super();
        this.state = {
            notes : [
                {
                  id: uuid.v4(),
                  task: 'Learn React'
                },
                {
                  id: uuid.v4(),
                  task: 'Do laundry'
                }
            ]
        };
    }

    addNote = () => {
        this.setState({
            notes: this.state.notes.concat({
                id: uuid.v4(),
                task: 'new task'
            })
        })
    }

    deleteTask = (id, e) => {
        e.stopPropagation();
        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        });
    }

    activateTaskEdit = (id) => {
        this.setState({
            notes: this.state.notes.map(note => {
                if(note.id === id){
                    note.editing = true;
                }
                return note;
            })
        });
    }

    editTask = (id, task) => {        
        this.setState({
            notes: this.state.notes.map(note => {
                if(note.id === id){
                    note.editing = false;
                    note.task = task
                }
                return note;
            })
        });
    }

    render(){
        return(
            <div>
                <button onClick = {this.addNote}>+</button>
                <Notes
                    notes = {this.state.notes}
                    onDelete = {this.deleteTask}
                    onEdit = {this.editTask}
                    onTaskClick = {this.activateTaskEdit}
                />
            </div>
        )
    }
}
