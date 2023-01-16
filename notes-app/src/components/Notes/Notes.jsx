import React, { useState } from "react";
import './Notes.css'
import NoteForm from "../NoteForm/NoteForm";
import AddNote from "../AddNote/AddNote";

let count = 0;

function Notes() {
    const [inputList, setInputList] = useState([]);
    const [inputText, setInputText] = useState('');
    const [noteTitle, setNoteTitle] = useState('');

    function handleInputChange(event) {
        setInputText(event.target.value);
    };
    
    function handleTitleChange(event) {
        setNoteTitle(event.target.value);
    };

    function handleClick() {
        if (inputText === '') {
            return
        }
        setInputList(inputList.concat(
            {
                title: noteTitle,
                value: inputText,
                id: count
            }
        ));
        count++;
        setInputText('');
        setNoteTitle('');
    };

    function removeNote(noteId) {
        if (window.confirm('Are you sure?')) {
            setInputList(inputList.filter((note) => {
                if (note.id !== noteId) {
                    return note
                }
            }));
        }
    }

    return (
        <div>
            <NoteForm
                handleInputChange={handleInputChange}
                handleTitleChange={handleTitleChange}
                handleClick={handleClick}
                inputText={inputText}
                noteTitle={noteTitle}
            />

            <div className="d-flex flex-wrap">
                {inputList.map((note) => {
                    return (<AddNote
                        title={note.title}
                        value={note.value}
                        id={note.id}
                        key={note.id}
                        removeNote={removeNote}
                    />)
                })}
            </div>
        </div>
    )
}

export default Notes;