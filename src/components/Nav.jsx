import React, { useContext } from 'react';
import { NoteContext } from '../NoteContext';
import '../css/Nav.css';

const Nav = () => {
    const [notes] = useContext(NoteContext);
    return (
        <nav className="Nav">
            <h3>Unicorn Kanban</h3>
            <p>You've got {notes.length > 0 && <span className="tasks-number">{notes.length}</span>} {notes.length === 1 ? "task" : notes.length === 0 ? "no tasks" : "tasks"} on the wall</p>
        </nav>
    );
}

export default Nav;