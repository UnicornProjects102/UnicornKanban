import React, { useContext, useState } from 'react';
import Note from './Note';
import Modal from './Modal';
import { NoteContext } from '../NoteContext';
import { CSSTransition } from 'react-transition-group';
import SwipeableViews from 'react-swipeable-views';
import "../css/NoteList.css"


const NoteListMobile = () => {

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


    let noteHandler = (notes) => {
        let sortedNotes = notes.sort((a, b) => (a.sortingVal > b.sortingVal) ? 1 : -1)
        return sortedNotes.map((note, index) => <Note index={index} key={note.id} id={note.id} task={note.task} info={note.info} priority={note.priority} stage={note.stage} />)
    }

    return (
        <div className="note-list">
            <SwipeableViews>
                <div className="column dark">
                    <h2>to do ({toDo.length})</h2>
                    {noteHandler(toDo)}
                </div>

                <div className="column light">
                    <h2>in progress ({inProgress.length})</h2>
                    {noteHandler(inProgress)}
                </div>

                <div className="column dark">
                    <h2>done ({done.length})</h2>
                    {noteHandler(done)}
                </div>
            </SwipeableViews>

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
                        <button className="btn-yes" onClick={clearAll}><p>yes</p></button>
                        <button className="btn-no" onClick={() => setShow(false)}><p>no</p></button>
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

export default NoteListMobile;