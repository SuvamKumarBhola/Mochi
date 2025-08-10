import React, { useState } from 'react';
import EntryPanel from './components/EntryPanel';
import CongratsMessage from './components/CongratsMessage';
import MainLayout from './components/MainLayout';
import './index.css';


function App() {
  const [category, setCategory] = useState('');
  const [theme, setTheme] = useState('blue'); // default
  const [hasPassedEntry, setHasPassedEntry] = useState(false);
  const [showCongrats, setShowCongrats] = useState(false);

  const handleEntryComplete = (selectedCategory, selectedTheme) => {
    setCategory(selectedCategory);
    setTheme(selectedTheme);

    if (selectedCategory === 'chibi') {
      const answer = prompt("what's the my fav nickname").toLocaleUpperCase();
      if (answer !== 'MOCHI') {
        alert("Wrong answer. Try again.");
        return;
      }
    }
    setShowCongrats(true);
  };

  const handleCongratsDone = () => {
    setShowCongrats(false);
    setHasPassedEntry(true);
  };

  return (
    <div className={`min-h-screen ${theme}-theme`}>
      {!hasPassedEntry ? (
        showCongrats ? (
          <CongratsMessage onDone={handleCongratsDone} />
        ) : (
            <EntryPanel onSubmit={handleEntryComplete} theme={theme} />
        )
      ) : (
        <MainLayout category={category} theme={theme} />
      )}
    </div>
  );
}

export default App;