import React from 'react';
import Modal from 'react-bootstrap/Modal';
import NoteForm from '../NoteForm/NoteForm';
import './NoteModal.css'

function NoteModal({ showModal, handleCloseModal, modalIndex, noteObj, changeNoteObj, handleSubmit, handleUpdate }) {
    return (
        <Modal size="sm" show={showModal} onHide={handleCloseModal}>
            <NoteForm
                noteObj={noteObj}
                changeNoteObj={changeNoteObj}
                handleSubmit={handleSubmit}
                modalIndex={modalIndex}
                handleUpdate={handleUpdate}
            />
        </Modal>
    );
}

export default NoteModal
