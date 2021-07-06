// reference: https://medium.com/tinyso/how-to-create-a-modal-component-in-react-from-basic-to-advanced-a3357a2a716a
import React from 'react';
import './Editor.css';

function Editor({onClose, show, title, setTitle, inputText, setInputText, setJournals, journals}) {
    const today = new Date();
    const today_date = today.getFullYear() + '.' + (today.getMonth() + 1)
    + '.' + today.getDate();

    const titleHandler = (e) => {
        setTitle(e.target.value);
    }
    const inputTextHandler = (e) => {
        setInputText(e.target.value);   
    }

    const addJournal = (e) => {
        e.preventDefault();
        var new_journal = {
            date: today_date,
            title: title,
            text: inputText,
            id: journals.length
        };
        setJournals([...journals, new_journal]);
        setInputText('');
      }
    
    if (show === false) {
        return null;
    }

    return (
        <div className="modal">
            <div className="modal-content">
                <header className="date">
                    {today_date}
                </header>
                <div className="writing">
                    <div className="title">
                        <a>Title? </a>
                        <input className="title-text" type="text" placeholder="Describe your day in one word" onChange={titleHandler}></input>
                    </div>
                    <textarea 
                        cols="60" 
                        rows="25" 
                        placeholder="Tell us about your day"
                        onChange={inputTextHandler}>
                    </textarea>
                </div>
                <div className="saving">
                    <button 
                        className="save" 
                        type="submit" 
                        onClick={addJournal}>
                        Save!
                    </button>
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

export default Editor;