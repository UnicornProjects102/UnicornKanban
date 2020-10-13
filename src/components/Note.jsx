import React, { useContext } from 'react';
import { NoteContext } from '../NoteContext';
import { Draggable } from 'react-beautiful-dnd';
import "../css/Note.css";
import NoteContent from './NoteContent';


const Note = ({ task, info, stage, priority, id, index }) => {

    const [notes, setNotes] = useContext(NoteContext)

    const handleDelete = () => {
        setNotes(notes.filter(n => n.id !== id))
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
        <Draggable draggableId={`${id}`} index={index} >
            {(provided, snapshot) => (
                <div ref={provided.innerRef} className={`note ${colorClassName}`} {...provided.draggableProps} {...provided.dragHandleProps}
                >
                    <NoteContent task={task} info={info} startEditTask={startEditTask} startEditInfo={startEditInfo} handleDelete={handleDelete}
                        isDragging={snapshot.isDragging}
                    />
                </div>
            )
            }
        </Draggable >
    );
}

export default Note;