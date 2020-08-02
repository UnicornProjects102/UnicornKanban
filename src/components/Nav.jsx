import React, { useContext } from 'react';
import { NoteContext } from '../NoteContext';
import '../css/Nav.css';

const Nav = () => {
    const [notes] = useContext(NoteContext);
    return (
        <nav className="Nav">
            <h3>Panda Kanban</h3>
            <p>Number of notes: {notes.length}</p>
        </nav>
    );
}

export default Nav;