import React, { useState, useEffect } from "react";
import './Notes.css'
import NoteForm from "../NoteForm/NoteForm";
import Note from "../Note/Note";
import NoteModal from "../NoteModal/NoteModal";

function Notes() {
    const [notesArray, setNotesArray] = useState([]);
    const [count, setCount] = useState(0);
    const [noteObj, setNoteObj] = useState({
        noteText: '',
        noteTitle: '',
        noteDate: '',
        id: count
    });
    const [modalId, setModalId] = useState();
    const [showModal, setShowModal] = useState(false);

    function handleCloseModal() {
        setModalId(undefined);
        setShowModal(false);
    };

    function handleShowModal(id) {
        setModalId(id);
        setShowModal(true);
    }

    function changeNoteObj(key, value) {
        setNoteObj((prev) => {
            return {
                ...prev,
                [key]: value
            }
        })
    }

    function handleSubmit() {
        if (noteObj.noteText === '') {
            return
        }
        setNotesArray(notesArray.concat(noteObj));
        setNoteObj({
            noteText: '',
            noteTitle: '',
            noteDate: '',
            id: count
        })
    };

    function removeNote(noteId) {
        if (window.confirm('Are you sure?')) {
            setNotesArray(notesArray.filter((note) => {
                if (note.id !== noteId) {
                    return note
                }
            }));
        }
    }

    useEffect(() => {
        setCount(count + 1);
    }, [notesArray])

    return (
        <div>
            {notesArray.length > 0 && modalId !== undefined ?
                <NoteModal
                    show={showModal}
                    handleClose={handleCloseModal}
                    inputList={notesArray}
                    modalId={modalId}
                />
                : ''}

            <NoteForm
                noteObj={noteObj}
                changeNoteObj={changeNoteObj}
                handleClick={handleSubmit}
            />

            <div className="d-flex flex-wrap">
                {notesArray.map((note) => {
                    return (<Note
                        title={note.noteTitle}
                        text={note.noteText}
                        date={note.noteDate}
                        id={note.id}
                        key={note.id}
                        removeNote={removeNote}
                        handleShow={handleShowModal}
                    />)
                })}
            </div>
        </div>
    )
}

export default Notes;
