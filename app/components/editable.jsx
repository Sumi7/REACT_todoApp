import React from 'react';

export default ({editing, value, onEdit, ...props}) => {
    if(editing){
        return <edit value = {value} onEdit = {onEdit} {...props} />;
    }
    return <span {...props}>{value}</span>
}

const edit = ({value, onEdit, ...props}) => (
    <div onEdit = {onEdit} {...props}>
        <span>edit: {value}</span>
    </div>
);
