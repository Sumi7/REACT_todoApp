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
        this.setState({
            notes: this.state.notes.filter(note => note.id !== id)
        });
    }
    render(){

        return (
            <div>
                <button onClick = {this.addNote}>+</button>
                <Notes notes = {this.state.notes} onDelete = {this.deleteTask}/>
            </div>
        )
    }
}
