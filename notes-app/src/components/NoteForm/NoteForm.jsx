import React, { useState } from "react";
import './NoteForm.css'
import AddNote from "../AddNote/AddNote";

function NoteForm() {
    const [inputList, setInputList] = useState([]);
    const [inputText, setInputText] = useState('');

    function handleChange(event) {
        setInputText(event.target.value);
      };

    function handleClick() {
        if (inputText === '') {
            return
        }
        setInputList(inputList.concat(<AddNote value={inputText} key={inputList.length} />));
        setInputText('')
    };

    return (
        <div>
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
            <div className="d-flex flex-wrap">
                {inputList}
            </div>
        </div>
    )
}

export default NoteForm;