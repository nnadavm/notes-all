import React from "react";

function NoteForm({ handleInputChange, handleTitleChange, handleClick, inputText, noteTitle }) {
    return (
        <div className="form-container d-flex flex-column shadow bg-body-tertiary">
            <input
            type="text"
            placeholder="Title"
            value={noteTitle}
            onChange={handleTitleChange}
            className='m-2 rounded border'
            />
            
            <textarea
                value={inputText}
                onChange={handleInputChange}
                className='m-2 rounded border'
                cols="40"
                rows="5"
                placeholder="Your note..."/>

            <button
                onClick={handleClick}
                className="m-2 btn btn-light border bg-white">
                Add</button>
        </div>

    )
}

export default NoteForm;