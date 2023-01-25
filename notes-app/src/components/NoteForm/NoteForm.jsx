import React from "react";
import { useState, useEffect, useRef } from "react";
import './NoteForm.css'

function NoteForm({ handleSubmit, changeNoteObj, noteObj }) {
    const { noteText, noteTitle } = noteObj
    const [textAreaHeight, setTextAreaHeight] = useState(30);
    const [submitClicked , setSubmitClicked] = useState(false);
    const [show, setShow] = useState(false);
    const ref = useRef(null);

    function changeTextAreaHeight(event) {
        if (event.target.scrollHeight > textAreaHeight) { setTextAreaHeight(event.target.scrollHeight) }
    };

    function handleClickOutside(event) {
        if (!ref.current.contains(event.target)) {
            setShow(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
    }, [])

    useEffect(handleSubmit, [submitClicked])

    return (
        <div
            className="form-container d-flex flex-column bg-body-tertiary rounded border"
            ref={ref}>

            {show && <input
                type="text"
                placeholder="Title"
                value={noteTitle}
                onChange={(e) => changeNoteObj('noteTitle', e.target.value)}
                className='m-2 border-0'
                style={{ outline: 'none' }}
            /> }

            <textarea
                value={noteText}
                onFocus={() => setShow(true)}
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
                }} />

            {show && <button
                onClick={() => {
                    changeNoteObj('noteDate', new Date().toLocaleString('he-IL'));
                    setSubmitClicked(prevState => !prevState)
                }}
                className="m-2 btn btn-light border bg-white">
                Add</button>}
        </div>
    )
}

export default NoteForm;
