import React from "react";

function AddNote({ value }) {
    const date = (new Date).toLocaleString('he-IL');
    return (
        <div className="card m-2">
            <div className="card-body">
                <h5 className="card-title">{date}</h5>
                <p className="card-text">{value}</p>
            </div>
        </div>
    )
};

export default AddNote;
