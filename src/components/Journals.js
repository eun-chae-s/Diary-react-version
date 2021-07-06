import React from 'react';
import Journal from './Journal';
import './Journals.css';

function Journals({onClose, showProgress, journals, setJournals}) {
    
    if (showProgress === false) {
        return null;
    }

    return (
        <div className="journals-container">
            
            <ul className="journal-list">
                {journals.map(journal => (
                    <Journal 
                        journal={journal} 
                        journals={journals}
                        setJournals={setJournals}/>
                ))}
            </ul>
            <button
                className="close-button" 
                onClick={onClose}>
                    Close!
            </button>
        </div>
    );
}

export default Journals;