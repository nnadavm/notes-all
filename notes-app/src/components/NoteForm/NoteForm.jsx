import React from "react";

function NoteForm({ handleChange, handleClick, inputText }) {
    return (
        <div className="form-container d-flex flex-column shadow bg-body-tertiary">
            <textarea
                value={inputText}
                onChange={handleChange}
                className='m-2 rounded border'
                cols="40"
                rows="5"
                placeholder="Your note...">
            </textarea>

            <button
                onClick={handleClick}
                className="m-2 btn btn-light border bg-white">
                Add</button>
        </div>

    )
}

export default NoteForm;