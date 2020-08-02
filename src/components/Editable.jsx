import React, { useContext } from 'react';
import { NoteContext } from '../NoteContext';

const Editable = ({ className, value, editing, onClick, id, propName }) => {
    const [notes, setNotes] = useContext(NoteContext)

    const finishEdit = (e) => {
        setNotes(notes.map(note => {
            if (note.id === id) {
                if (e.target.value !== "") {
                    note[propName].editing = false;
                    note[propName].value = e.target.value;
                } else note[propName].editing = false;
            } return note;
        }))
    }

    const checkEnter = (e) => {
        if (e.key === 'Enter') {
            finishEdit(e)
        }
    }

    if (editing)
        return (
            <input
                className={`editable ${className}`}
                type="text"
                autoFocus={true}
                defaultValue={value}
                onBlur={finishEdit}
                onKeyPress={checkEnter}

            />
        )
    else return (
        <span className={className} onClick={onClick}>
            <span className="edit-value">{value}</span>
            <span className="edit-icon">
                <i className="fas fa-pencil-alt"></i>
            </span>
        </span>
    )
}

export default Editable;