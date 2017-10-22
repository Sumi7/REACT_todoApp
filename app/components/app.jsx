import React, { Component } from 'react';
import uuid from 'uuid';

import Notes from './notes';

const notes = [
  {
      id: uuid.v4(),
    task: 'Learn React'
  },
  {
      id: uuid.v4(),
    task: 'Do laundry'
  }
];

export default class App extends Component{
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

    deleteTask = (id) => {
        console.log('del')
        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        });
    }

    editTask = (id) => {
        this.setState({
            notes: this.state.notes.map(note => {
                if(note.id === id){
                    note.editing = true;
                }
                return note;
            })
        });
    }

    activateTaskEdit = (id, task) => {
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

        return <div>
                <button onClick = {this.addNote}>+</button>
                <Notes
                    notes = {this.state.notes}
                    onDelete = {this.deleteTask}
                    onEdit = {this.editTask}
                    onTaskClick = {this.activateTaskEdit}
                />
            </div>
    }
}
