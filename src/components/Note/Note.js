import React from "react";
import './Note.css'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Note({ title, text, date, editDate, id, removeNote, handleShowModal }) {

    function handleRemove(e) {
        e.stopPropagation()
        removeNote(id)
    }

    return (
        <div
            className="card m-2"
            onClick={() => { handleShowModal(id) }}
            id={id}>

            <div className="card-body">
                <div className="d-flex justify-content-between align-items-center">
                    <h5 className="card-title">{title}</h5>
                    <div
                        onClick={(e) => handleRemove(e)}
                        className="px-1 py-0 ms-1 border-0">
                        <FontAwesomeIcon
                            className="icon"
                            icon={faTrash} />
                    </div>
                </div>
                <p className="card-text">{text}</p>
                <p style={{ fontSize: '14px', opacity: '0.5' }}>{date}</p>
                {editDate !== '' ?
                    <p style={{ fontSize: '12px', fontStyle: 'italic', opacity: '0.5' }}>Edited: {editDate}</p>
                    : ''}
            </div>
        </div>
    )
};

export default Note;
