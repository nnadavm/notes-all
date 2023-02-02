import React from "react";
import { useState, useEffect, useRef } from "react";
import './NoteForm.css'

function NoteForm({ changeNoteObj, noteObj, handleSubmit, handleUpdate , modalIndex }) {
    const { noteText, noteTitle } = noteObj
    const [textAreaHeight, setTextAreaHeight] = useState(30);
    const [expand, setExpand] = useState(false);
    const [isModal , setIsModal] = useState(false);
    const ref = useRef(null);

    function changeTextAreaHeight(event) {
        if (event.target.scrollHeight > textAreaHeight) { setTextAreaHeight(event.target.scrollHeight) }
    };

    function handleClickOutside(event) {
        if (!ref.current.contains(event.target)) {
            setExpand(false);
        }
    };

    function dateUpdate() {
        const date = new Date().toLocaleString('he-IL')
        !isModal ? changeNoteObj('noteDate', date) : changeNoteObj('editDate', date);
    }

    useEffect(() => {
        if (modalIndex === undefined) {
            document.addEventListener('click', handleClickOutside)
        } else {
            setIsModal(true)
        }
    }, [])

    return (
        <div
            className="form-container d-flex flex-column bg-body-tertiary rounded border"
            onChange={dateUpdate}
            ref={ref}>

            {expand || isModal ?
            <input
                type="text"
                placeholder="Title"
                value={noteTitle}
                onChange={(e) => changeNoteObj('noteTitle', e.target.value)}
                className='m-2 border-0'
                style={{ outline: 'none' }}
            />
            : ''}

            <textarea
                value={noteText}
                onFocus={() => setExpand(true)}
                onChange={(e) => {
                    changeNoteObj('noteText', e.target.value);
                    changeTextAreaHeight(e);
                }}
                className='m-2 border-0 textarea'
                rows='1'
                placeholder="Take a note..."
                style={{
                    resize: 'none',
                    height: `${textAreaHeight}px`,
                    overflow: 'hidden',
                    outline: 'none'
                }}
                />

            {expand && !isModal ?
            <button
                onClick={handleSubmit}
                className="m-2 btn btn-light border bg-white">
                Add</button>
                : ''}
            
            {isModal ?
            <button
                onClick={handleUpdate}
                className="m-2 btn btn-light border bg-white">
                Update</button>
                : ''}
        </div>
    )
}

export default NoteForm;
