import React from "react";
import './NoteForm.css'
import { useRef } from 'react';
import { useState } from "react";

function NoteForm() {
    const inputRef = useRef(null);
    const [inputList, setInputList] = useState([]);

    function AddNote() {
        return <div>{inputRef.current.value}</div>
    };

    function handleClick() {
        setInputList(inputList.concat(<AddNote key={inputList.length} />));
    };

    return (
        <div>

            <div className="form-container d-flex flex-column shadow bg-body-tertiary">
                <textarea ref={inputRef} className='m-2 rounded border' name="Text1" cols="40" rows="5" placeholder="Your note..."></textarea>
                <button onClick={handleClick} className="m-2 btn btn-light border bg-white">Add</button>
            </div>
            <div>{inputList}</div>
        </div>
    )
}

export default NoteForm;