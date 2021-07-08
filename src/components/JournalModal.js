import React from 'react';
import './JournalModal.css';

function JournalModal({onClose, journal, showJournal}) {
    if (showJournal === false) {
        return null;
    }
    return (
        <div className="journal-modal">
            <div className="modal-content">
                <header className="date">
                    {journal.date}
                </header>
                <div className="text">
                    <div className="title">
                        <a>{journal.title}</a>
                    </div>
                    <div className="music">
                        <a> &#127911; {journal.song}</a>
                    </div>
                    <div className="content">
                        <p>{journal.text}</p>
                    </div>
                </div>
                <div className="closing">
                    <button
                        className="close"
                        onClick={onClose}
                        >Close!
                    </button>
                </div>
            </div>
        </div>
    );
}

export default JournalModal;