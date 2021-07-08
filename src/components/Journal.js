import React, {useState} from 'react';
import JournalModal from './JournalModal';
import './Journal.css';

function Journal({journal, journals, setJournals}) {
    const [showJournal, setShowJournal] = useState(false);
    const playHandler = () => {
        setShowJournal(true);
    }

    const deleteHandler = () => {
        setJournals(journals.filter((el) => (el.id !== journal.id)));
    }
    return (
        <div className="journal" id={journal.id}>
            <li className="journal-item">
                <a id="d"><b>{journal.date}</b></a>
                <a id="t">
                    <i>{journal.title}</i>
                </a>
                
            </li>
            <button className="play"
                    type="submit"
                    onClick={playHandler}>
                <i className="fas fa-play"></i>
            </button>
            <button className="delete"
                    type="submit"
                    onClick={deleteHandler}>
                <i className="fas fa-trash"></i>
            </button>
            <JournalModal
                onClose={()=>setShowJournal(false)}
                journal={journal}
                showJournal={showJournal}/>
        </div>
    );
}

export default Journal;