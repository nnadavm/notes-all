import React from "react";
import { useState } from "react";
import './Note.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function AddNote({ title, value, id, removeNote, handleShow}) {
    const [date] = useState(new Date().toLocaleString('he-IL'))

    const handleRemove = (e) => {
        e.stopPropagation()
        removeNote(id)
    }

    return (
        <div
            className="card m-2"
            onClick={() => {
                handleShow(id)
            }}
            id={id}>

            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title">{title}</h5>
                    <div onClick={(e) => handleRemove(e)} className="px-1 py-0 ms-1 border-0">
                        <FontAwesomeIcon className="icon" icon={faTrash} /></div>
                </div>
                <p className="card-text">{value}</p>
                <p style={{ fontSize: '14px' }}>{date}</p>
            </div>
        </div>
    )
};

export default AddNote;
