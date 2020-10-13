import React, { Component } from 'react';
import Editable from "./Editable";

class NoteContent extends Component {

    render() {
        const { task, info, stage, priority, id, index, startEditTask, startEditInfo, handleDelete } = this.props;
        return (
            <React.Fragment>
                <Editable className="note-task" id={id} propName="task" value={task.value} editing={task.editing} onClick={startEditTask} />
                <Editable className="note-info" id={id} propName="info" value={info.value} editing={info.editing} onClick={startEditInfo} />
                <span className="delete-icon" onClick={handleDelete}><i className="fas fa-times"></i></span>
            </React.Fragment>
        );
    }
}

export default NoteContent;