import React, { useState } from 'react';
import AddNote from '../AddNote/AddNote';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function NoteModal({ show, handleClose, inputList, modalId }) {
    const i = inputList.findIndex(item => item.id === modalId);
    const { noteTitle, noteText } = inputList[i];

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
