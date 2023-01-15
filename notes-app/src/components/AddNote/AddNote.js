import React from "react";

function AddNote({ value, id, removeNote }) {
    const date = (new Date).toLocaleString('he-IL');

    return (
        <div className="card m-2" id={id}>
            <button onClick={() => removeNote(id)} className="btn btn-outline-secondary">x</button>
            <div className="card-body">
                <h5 className="card-title">{date}</h5>
                <p className="card-text">{value}</p>
            </div>
        </div>
    )
};

export default AddNote;
