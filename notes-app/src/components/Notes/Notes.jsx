import React, { useState } from "react";
import './Notes.css'
import NoteForm from "../NoteForm/NoteForm";
import AddNote from "../AddNote/AddNote";

function Notes() {
    const [inputList, setInputList] = useState([]);
    const [count, setCount] = useState(0);
    const [noteObj, setNoteObj] = useState({
        noteText: '',
        noteTitle: '',
    });

    function changeNoteObj(key, value) {
        setNoteObj((pre) => {
            return {
                ...pre,
                [key]: value
            }
        })
    }

    function handleClick() {
        if (noteObj.noteText === '') {
            return
        }
        setInputList(inputList.concat(
            {
                title: noteObj.noteTitle,
                value: noteObj.noteText,
                id: count
            }
        ));
        setCount(count + 1);
        setNoteObj({
            noteText: '',
            noteTitle: '',
        })
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
                noteObj={noteObj}
                changeNoteObj={changeNoteObj}
                handleClick={handleClick}
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