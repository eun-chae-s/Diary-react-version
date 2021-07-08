import React, {useState, useEffect} from 'react';
import Journals from './components/Journals';
import Editor from './components/Editor';
import './App.css';

function App() {
  const [inputText, setInputText] = useState('');
  const [journals, setJournals] = useState([]);
  const [show, setShow] = useState(false);
  const [showProgress, setShowProgress] = useState(false);
  const [title, setTitle] = useState('');
  const [song, setSong] = useState('');
  
  
  const saveLocalJournals = () => {
    localStorage.setItem('journals', JSON.stringify(journals));
  };

  const getLocalJournals  = () => {
    if (localStorage.getItem('journals') === null) {
      localStorage.setItem('journals', JSON.stringify([]));
    }else{
      // data represents the list of todos we've already done
      let data = JSON.parse(localStorage.getItem('journals'));
      setJournals(data);
    }
  };

  // RUN ONCE when the app starts
  useEffect(()=>{
    getLocalJournals();
  }, []);

  useEffect(()=>{
    saveLocalJournals();
  }, [journals]);

  return (
    <div className="App">
      <header className="App-header">
        Today's feeling
      </header>
      <div className="write">
        <button
          className="w-button"
          onClick={() => setShow(true)}>
            How was your day? &#9997; 
        </button>
        
      </div>
      <Editor 
        onClose={() => setShow(false)}
        show={show}
        title={title}
        setTitle={setTitle}
        inputText={inputText}
        setInputText={setInputText} 
        journals={journals} 
        setJournals={setJournals}
        song={song}
        setSong={setSong}/>
      <div className="check">
        <button
          className="c-button"
          onClick={() => setShowProgress(true)}>
          Want to hear your story? &#9203; 
        </button>
      </div>
      <Journals 
        onClose={() => setShowProgress(false)}
        showProgress={showProgress}
        journals={journals}
        setJournals={setJournals}>
      </Journals>
    </div>
  );
}

export default App;
