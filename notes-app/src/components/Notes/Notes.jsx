import React, { useState } from "react";
import './Notes.css'
import NoteForm from "../NoteForm/NoteForm";
import AddNote from "../AddNote/AddNote";

let count = 0;

function Notes() {
    const [inputList, setInputList] = useState([]);
    const [inputText, setInputText] = useState('');

    function handleChange(event) {
        setInputText(event.target.value);
    };

    function handleClick() {
        if (inputText === '') {
            return
        }
        setInputList(inputList.concat(
            {
                value: inputText,
                id: count
            }
        ));
        count++;
        setInputText('')
    };

    function removeNote(noteId) {
        if (window.confirm('are you sure?')) {
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
                handleChange={handleChange}
                handleClick={handleClick}
                inputText={inputText}
            />

            <div className="d-flex flex-wrap">
                {inputList.map((note) => {
                    return (<AddNote
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