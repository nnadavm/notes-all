import React, { useState } from 'react';
import AddNote from '../AddNote/AddNote';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';


function NoteModal({ show, handleClose, handleShow, inputList, setInputList, modalId }) {

    const { noteTitle, noteText } = inputList[modalId];

    // function saveData(newTitle, newValue) {
    //     const i = inputList.findIndex(item => item.id === modalId);
    //     console.log(i)
    //     inputList[i].noteTitle = newTitle;
    //     inputList[i].noteText = newValue;
    //     setInputList(inputList);
    // }

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{noteTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{noteText}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NoteModal
