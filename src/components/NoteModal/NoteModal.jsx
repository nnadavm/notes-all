import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

function NoteModal({ showModal, handleCloseModal, notesArray, modalId }) {
    const i = notesArray.findIndex(item => item.id === modalId);
    const { noteTitle, noteText, noteDate } = notesArray[i];

    return (
        <>
            <Modal show={showModal} onHide={handleCloseModal}>
                <Modal.Header closeButton>
                    <Modal.Title>{noteTitle}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{noteText}</Modal.Body>
                <Modal.Footer className='d-flex justify-content-between'>
                    <div>{noteDate}</div>
                    <Button variant="secondary" onClick={handleCloseModal}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    );
}

export default NoteModal
