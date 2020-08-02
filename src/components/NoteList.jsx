import React, { useContext, useState } from 'react';
import Note from './Note';
import Modal from './Modal';
import { NoteContext } from '../NoteContext';
import { CSSTransition } from 'react-transition-group';
import "../css/NoteList.css"


const NoteList = () => {
    const [notes, setNotes] = useContext(NoteContext);
    const [show, setShow] = useState(false);

    const toDo = notes.filter(note =>
        note.stage === "to do"
    );

    const inProgress = notes.filter(note =>
        note.stage === "in progress"
    );

    const done = notes.filter(note =>
        note.stage === "done"
    );

    const clearAll = () => {
        setNotes([])
        setShow(!show)
    }

    const showModal = () => {
        setShow(!show)
    }

    return (
        <div className="note-list">

            <div className="column">
                <h2>to do ({toDo.length})</h2>
                {toDo.map(n => (
                    <Note key={n.id} id={n.id} className="blue" task={n.task} info={n.info} priority={n.priority} stage={n.stage} />
                ))}
            </div>
            <div className="column">
                <h2>in progress ({inProgress.length})</h2>
                {inProgress.map(n => (
                    <Note key={n.id} id={n.id} className="green" task={n.task} info={n.info} priority={n.priority} stage={n.stage} />
                ))}
            </div>
            <div className="column">
                <h2>done ({done.length})</h2>
                {done.map(n => (
                    <Note key={n.id} id={n.id} className="red" task={n.task} info={n.info} priority={n.priority} stage={n.stage} />
                ))}
            </div>
            {notes.length > 0 && <div className="delete-footer">
                <button onClick={showModal} className="delete-all-btn">
                    <p className="trash-icon"><i className="fas fa-trash-alt"></i></p>
                    <p className="trash-text">Delete all</p>
                </button></div>}

            <CSSTransition
                in={show}
                timeout={300}
                classNames="modal"
                unmountOnExit>
                <Modal>
                    <p className="modal-message">Do you want to delete all notes?</p>
                    <div className="btns">
                        <button className="btn-yes" onClick={clearAll}>yes</button>
                        <button className="btn-no" onClick={() => setShow(false)}>no</button>
                    </div>
                </Modal>
            </CSSTransition>
            <CSSTransition
                in={show}
                timeout={300}
                classNames="overlay"
                unmountOnExit>
                <div className="overlay"></div>
            </CSSTransition>
        </div>
    )

}

export default NoteList;