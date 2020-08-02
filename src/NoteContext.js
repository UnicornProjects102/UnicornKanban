import React, { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const NoteContext = createContext()

export const NoteProvider = (props) => {
    const [notes, setNotes] = useState(
        JSON.parse(window.localStorage.getItem("notes")) ||
        [{
            task: { value: "Task example - low priority", editing: false },
            info: { value: "task description" },
            id: uuidv4(),
            stage: "to do",
            priority: "low"
        },
        {
            task: { value: "Task example - normal priority" },
            info: { value: 'task description' },
            id: uuidv4(),
            stage: "in progress",
            priority: "normal"
        },
        {
            task: { value: "Task example - high priority" },
            info: { value: 'task description' },
            id: uuidv4(),
            stage: "done",
            priority: "high"
        }
        ]);

    return (
        <NoteContext.Provider value={[notes, setNotes]}>
            {props.children}
        </NoteContext.Provider>
    );
}