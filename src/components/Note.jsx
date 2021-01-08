import React, { useContext } from 'react';
import { NoteContext } from '../NoteContext';
import { Draggable } from 'react-beautiful-dnd';
import "../css/Note.css";
import NoteContent from './NoteContent';


const Note = ({ task, info, priority, id, index, stage }) => {

    const [notes, setNotes] = useContext(NoteContext)

    const handleDelete = () => {
        setNotes(notes.filter(n => n.id !== id))
    }

    const handleMoveForward = () => {
        setNotes(notes.map(note => {
            if (note.id === id) {
                if (note.stage === "to do") note.stage = "in progress";
                else if (note.stage === "in progress") note.stage = "done"
            } return note;
        }))
    }

    const handleMoveBack = () => {
        setNotes(notes.map(note => {
            if (note.id === id) {
                if (note.stage === "in progress") note.stage = "to do";
                else if (note.stage === "done") note.stage = "in progress"
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
        <React.Fragment>
            {window.innerWidth <= 500 ? <div className={`note ${colorClassName}`}>
                <NoteContent task={task} info={info} stage={stage} startEditTask={startEditTask} startEditInfo={startEditInfo} handleDelete={handleDelete} handleMoveForward={handleMoveForward} handleMoveBack={handleMoveBack} id={id}
                />
            </div> :
                <Draggable draggableId={`${id}`} index={index} >
                    {(provided, snapshot) => (
                        <div ref={provided.innerRef} className={`note ${colorClassName}`} {...provided.draggableProps} {...provided.dragHandleProps}
                        >
                            <NoteContent task={task} info={info} startEditTask={startEditTask} startEditInfo={startEditInfo} handleDelete={handleDelete} isDragging={snapshot.isDragging} id={id}
                            />
                        </div>
                    )
                    }
                </Draggable >
            }
        </React.Fragment>

        // <Draggable draggableId={`${id}`} index={index} >
        //     {(provided, snapshot) => (
        //         <div ref={provided.innerRef} className={`note ${colorClassName}`} {...provided.draggableProps} {...provided.dragHandleProps}
        //         >
        //             <NoteContent task={task} info={info} startEditTask={startEditTask} startEditInfo={startEditInfo} handleDelete={handleDelete}
        //                 isDragging={snapshot.isDragging} id={id}
        //             />
        //         </div>
        //     )
        //     }
        // </Draggable >
    );
}

export default Note;