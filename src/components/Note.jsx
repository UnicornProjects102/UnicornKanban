import React, { useContext } from 'react';
import { NoteContext } from '../NoteContext';
import Editable from "./Editable";
import "../css/Note.css";


const Note = ({ task, info, stage, priority, className, id }) => {
    const [notes, setNotes] = useContext(NoteContext)

    const handleDelete = () => {
        setNotes(notes.filter(n => n.id !== id))
    }

    const handleMoveForward = () => {
        setNotes(notes.map(note => {
            if (note.id === id) {
                if (note.stage === "to do") note.stage = "in progress";
                else note.stage = "done";
            } return note;
        }))
    }

    const handleMoveBack = () => {
        setNotes(notes.map(note => {
            if (note.id === id) {
                if (note.stage === "done") note.stage = "in progress";
                else note.stage = "to do";
            } return note;
        }))
    }

    const startEditTask = () => {
        setNotes(notes.map(note => {
            if (note.id === id) {
                note.task.editing = true;
            } return note;
        }))
    }

    const startEditInfo = () => {
        setNotes(notes.map(note => {
            if (note.id === id) {
                note.info.editing = true;
            } return note;
        }))
    }

    const colorClassName = priority === "high" ? "red" : priority === "normal" ? "yellow" : "green";


    return (
        <div className={`note ${colorClassName}`}>
            <Editable className="note-task" id={id} propName="task" value={task.value} editing={task.editing} onClick={startEditTask} />
            <Editable className="note-info" id={id} propName="info" value={info.value} editing={info.editing} onClick={startEditInfo} />
            {stage === "done" ? "" : <span className="move-icon-right" onClick={handleMoveForward}><i className="fas fa-angle-double-right"></i></span>}
            {stage === "to do" ? "" : <span className="move-icon-left" onClick={handleMoveBack}><i className="fas fa-angle-double-left"></i></span>}
            <span className="delete-icon" onClick={handleDelete}><i className="fas fa-times"></i></span>
        </div>
    );
}

export default Note;