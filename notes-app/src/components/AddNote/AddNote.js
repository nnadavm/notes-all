import React from "react";
import { useState } from "react";

function AddNote({ title, value, id, removeNote, handleShow , setModalId }) {
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
                        <button onClick={(e) => handleRemove(e)} className="btn btn-outline-secondary px-1 py-0 ms-1">✖</button>
                    </div>
                    <p className="card-text">{value}</p>
                    <p style={{ fontSize: '14px' }}>{date}</p>
                </div>
            </div>
    )
};

export default AddNote;
