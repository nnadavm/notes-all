import React, { useState, useEffect } from "react";
import './Notes.css'
import NoteForm from "../NoteForm/NoteForm";
import Note from "../Note/Note";
import NoteModal from "../NoteModal/NoteModal";
import { v4 as uuid } from 'uuid';

function Notes() {
    const [notesArray, setNotesArray] = useState([]);
    const [count, setCount] = useState(0);
    const [noteObj, setNoteObj] = useState({
        noteText: '',
        noteTitle: '',
        noteDate: '',
        editDate: '',
        id: uuid()
    });
    const [showModal, setShowModal] = useState(false);
    const [modalIndex, setModalIndex] = useState();

    function handleCloseModal() {
        setModalIndex(null);
        setShowModal(false);
    };

    function handleShowModal(id) {
        const index = notesArray.findIndex(item => item.id === id);
        setModalIndex(index);
        setNoteObj(notesArray[index])
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
        console.log(notesArray);
        if (noteObj.noteText === '') {
            alert('Add note text!')
            return
        }
        setNotesArray(notesArray.concat(noteObj));
        setNoteObj({
            noteText: '',
            noteTitle: '',
            noteDate: '',
            editDate: '',
            id: uuid()
        })
    };

    function handleUpdate() {
        if (noteObj.noteText === '') {
            return
        }
        notesArray[modalIndex] = noteObj;
        setNotesArray(notesArray);
        setNoteObj({
            noteText: '',
            noteTitle: '',
            noteDate: '',
            editDate: '',
            id: uuid()
        })
        handleCloseModal();
    }

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
        const localstorage = JSON.parse(localStorage.getItem('notesStorage'));
        if (localstorage !== null) {
            setNotesArray(localstorage);
        } 
    }, [])

    useEffect(() => {
        setCount(uuid());
        localStorage.setItem('notesStorage', JSON.stringify(notesArray));
    }, [notesArray])

    return (
        <>
            <NoteForm
                noteObj={noteObj}
                changeNoteObj={changeNoteObj}
                handleSubmit={handleSubmit}
                handleUpdate={handleUpdate}
                modalIndex={modalIndex}
            />

            <div className="d-flex flex-wrap">
                {notesArray.map((note) => {
                    return (<Note
                        title={note.noteTitle}
                        text={note.noteText}
                        date={note.noteDate}
                        editDate={note.editDate}
                        id={note.id}
                        key={note.id}
                        removeNote={removeNote}
                        handleShowModal={handleShowModal}
                    />)
                })}
            </div>

            {notesArray.length > 0 && modalIndex !== undefined ?
                <NoteModal
                    showModal={showModal}
                    handleCloseModal={handleCloseModal}
                    notesArray={notesArray}
                    modalIndex={modalIndex}
                    noteObj={noteObj}
                    changeNoteObj={changeNoteObj}
                    handleSubmit={handleSubmit}
                    handleUpdate={handleUpdate}
                />
                : ''}

        </>
    )
}

export default Notes;
