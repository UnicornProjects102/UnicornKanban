import React, { useState } from 'react';
import { NoteProvider } from './NoteContext';
import { CSSTransition } from 'react-transition-group';
import NoteList from './components/NoteList';
import Nav from './components/Nav';
import AddNote from './components/AddNote';
import './css/App.css';


function App() {
  const [showAdd, setShowAdd] = useState(true);
  const [showBtn, setShowBtn] = useState(false);

  return (
    <NoteProvider>
      <div className="App">
        <Nav />
        <div className="content">
          {showBtn && <button className="add-btn-main" onClick={() => setShowAdd(true)}>
            <i className="fas fa-plus"></i>
          </button>}
          <CSSTransition
            in={showAdd}
            timeout={300}
            classNames="add"
            unmountOnExit
            onEnter={() => setShowBtn(false)}
            onExited={() => setShowBtn(true)}>
            <AddNote onClose={() => setShowAdd(false)} />
          </CSSTransition>

          <NoteList />
        </div>
      </div>
    </NoteProvider>
  )
}

export default App;