import React, { useState, useContext, useEffect } from 'react';
import { NoteContext } from '../NoteContext';
import { v4 as uuidv4 } from 'uuid';
import "../css/AddNote.css";

const AddNote = ({ onClose }) => {

    const [notes, setNotes] = useContext(NoteContext);
    const [task, setTask] = useState('');
    const [info, setInfo] = useState('');
    const [priority, setPriority] = useState('')
    const [stage] = useState('to do')

    const updateTask = (e) => {
        setTask(e.target.value)
    }

    const updateInfo = (e) => {
        setInfo(e.target.value)
    }

    const updatePriority = (e) => {
        setPriority(e.target.value)
    }

    const addNote = e => {
        e.preventDefault();
        setNotes(prevNotes => [...prevNotes,
        {
            task: { value: task },
            info: { value: info },
            stage: stage,
            id: uuidv4(),
            priority: `${priority === "" ? "normal" : priority}`
        }]);
        setTask('');
        setInfo('');
        setPriority('');
    }

    useEffect(() => {
        window.localStorage.setItem("notes", JSON.stringify(notes))
    }, [notes])

    return (
        <div className="add-note-container">
            <form className="add-note" onSubmit={addNote}>

                <label>
                    <input className="task-name" placeholder="Task name" type="text" name="task" value={task} onChange={updateTask} required />
                </label>
                <label>
                    <input className="task-info" placeholder="Task description" type="text" name="info" value={info} onChange={updateInfo} required />
                </label>

                <div className="select">
                    <select name="priority" value={priority} onChange={updatePriority}>
                        <option className="default-option" value="" hidden>Priority</option>
                        <option value="low">Low</option>
                        <option value="normal">Normal</option>
                        <option value="high">High</option>
                    </select>
                </div>

                <button className="add-btn">Add</button>

            </form >
            <div onClick={onClose} className="chevron-icon"><i className="fas fa-chevron-up"></i></div>
        </div>

    )
}

export default AddNote;