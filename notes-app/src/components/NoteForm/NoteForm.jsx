import React from "react";
import { useState } from "react";

function NoteForm({ handleClick, changeNoteObj, noteObj}) {
    const { noteText, noteTitle } = noteObj
    const [textAreaHeight, setTextAreaHeight] = useState(60);

    function changeTextAreaHeight(event) {
        if (event.target.scrollHeight > textAreaHeight) { setTextAreaHeight(event.target.scrollHeight) }
    };


    return (
        <div className="form-container d-flex flex-column shadow bg-body-tertiary">
            <input
                type="text"
                placeholder="Title"
                value={noteTitle}
                onChange={(e) => changeNoteObj('noteTitle', e.target.value)}
                className='m-2 rounded border'
            />

            <textarea
                value={noteText}
                onChange={(e) => {
                    changeNoteObj('noteText', e.target.value)
                    changeTextAreaHeight(e)
                }}
                className='m-2 rounded border'
                rows='1'
                placeholder="Your note..."
                style={{
                    resize: 'none',
                    height: `${textAreaHeight}px`
                }} />

            <button
                onClick={handleClick}
                className="m-2 btn btn-light border bg-white">
                Add</button>
        </div>

    )
}

export default NoteForm;