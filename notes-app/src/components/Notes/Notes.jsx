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
        editDate: '',
        id: count
    });
    const [showModal, setShowModal] = useState(false);
    const [modalIndex, setModalIndex] = useState();

    function handleCloseModal() {
        setModalIndex(undefined);
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
        if (noteObj.noteText === '') {
            return
        }
        setNotesArray(notesArray.concat(noteObj));
        setNoteObj({
            noteText: '',
            noteTitle: '',
            noteDate: '',
            editDate: '',
            id: count
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
            id: count
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
        setCount(count + 1);
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
