import React, { Component } from 'react';
import Editable from "./Editable";

class NoteContent extends Component {

    render() {
        const { task, info, id, startEditTask, startEditInfo, handleDelete, handleMoveForward, handleMoveBack, stage } = this.props;
        return (
            <React.Fragment>
                {window.innerWidth <= 500 ?
                    <React.Fragment>
                        <Editable className="note-task" id={id} propName="task" value={task.value} editing={task.editing} onClick={startEditTask} />
                        <Editable className="note-info" id={id} propName="info" value={info.value} editing={info.editing} onClick={startEditInfo} />
                        <span className="delete-icon" onClick={handleDelete}><i className="fas fa-times"></i></span>
                        {stage !== "done" && <span className="move-icon-right" onClick={handleMoveForward}><i class="fas fa-chevron-right"></i></span>}
                        {stage !== "to do" && <span className="move-icon-left" onClick={handleMoveBack}><i className="fas fa-chevron-left"></i></span>}
                    </React.Fragment> :
                    <React.Fragment>
                        <Editable className="note-task" id={id} propName="task" value={task.value} editing={task.editing} onClick={startEditTask} />
                        <Editable className="note-info" id={id} propName="info" value={info.value} editing={info.editing} onClick={startEditInfo} />
                        <span className="delete-icon" onClick={handleDelete}><i className="fas fa-times"></i></span>
                    </React.Fragment>
                }

                {/* <React.Fragment>
                <Editable className="note-task" id={id} propName="task" value={task.value} editing={task.editing} onClick={startEditTask} />
                <Editable className="note-info" id={id} propName="info" value={info.value} editing={info.editing} onClick={startEditInfo} />
                <span className="delete-icon" onClick={handleDelete}><i className="fas fa-times"></i></span>
            </React.Fragment> */}

            </React.Fragment>
        );
    }
}

export default NoteContent;