import React from "react";
import { useState, useEffect, useRef } from "react";
import './NoteForm.css'

function NoteForm({ changeNoteObj, noteObj, handleSubmit, handleUpdate , modalIndex }) {
    const { noteText, noteTitle } = noteObj
    const [textAreaHeight, setTextAreaHeight] = useState(30);
    const [isExpand, setIsExpand] = useState(false);
    const [isModal , setIsModal] = useState(false);
    const parentDivRef = useRef(null);

    function changeTextAreaHeight(event) {
        if (event.target.scrollHeight > textAreaHeight) { setTextAreaHeight(event.target.scrollHeight) }
    };

    function handleClickOutside(event) {
        if (!parentDivRef.current.contains(event.target)) {
            setIsExpand(false);
        }
    };

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
            ref={parentDivRef}>

            {isExpand || isModal ?
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
                onFocus={() => setIsExpand(true)}
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

            {isExpand && !isModal ?
            <button
                onClick={() => {
                    handleSubmit(isModal);
                    setTextAreaHeight(30);
                }}
                className="m-2 btn btn-light border bg-white">
                Add</button>
                : ''}
            
            {isModal ?
            <button
                onClick={() => {
                    handleUpdate(isModal)
                    setTextAreaHeight(30);
                }}
                className="m-2 btn btn-light border bg-white">
                Update</button>
                : ''}
        </div>
    )
}

export default NoteForm;
