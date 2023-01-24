import React, { useState, useEffect } from "react";
import './Notes.css'
import NoteForm from "../NoteForm/NoteForm";
import AddNote from "../Note/Note";
import NoteModal from "../NoteModal/NoteModal";

function Notes() {
    const [inputList, setInputList] = useState([]);
    const [count, setCount] = useState(0);
    const [noteObj, setNoteObj] = useState({
        noteText: '',
        noteTitle: '',
        id: count
    });
    const [modalId, setModalId] = useState();
    const [show, setShow] = useState(false);
    const handleClose = () => {
        setModalId(undefined);
        setShow(false);
    };
    const handleShow = (id) => {
        setModalId(id);
        setShow(true);
    }

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
        setInputList(inputList.concat(noteObj));
        setNoteObj({
            noteText: '',
            noteTitle: '',
            id: count
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

    useEffect(() => {
        setCount(count + 1);
    }, [inputList])

    return (
        <div>
            {inputList.length > 0 && modalId !== undefined ?
                <NoteModal
                    show={show}
                    handleClose={handleClose}
                    inputList={inputList}
                    modalId={modalId}
                />
                : ''}

            <NoteForm
                noteObj={noteObj}
                changeNoteObj={changeNoteObj}
                handleClick={handleClick}
            />

            <div className="d-flex flex-wrap">
                {inputList.map((note) => {
                    return (<AddNote
                        title={note.noteTitle}
                        value={note.noteText}
                        id={note.id}
                        key={note.id}
                        removeNote={removeNote}
                        handleShow={handleShow}
                    />)
                })}
            </div>
        </div>
    )
}

export default Notes;
