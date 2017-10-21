import React, { Component } from 'react';

export default ({ task , onDelete}) => (
    <div>
        <span>{ task }</span>
        <button onClick ={onDelete}>X</button>
    </div>
);
