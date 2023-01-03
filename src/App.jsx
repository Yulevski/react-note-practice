import { useState } from 'react'
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';

function App() {
  //ノートを追加する為配列として保持
  //notesが複数のノートを保持 setNotesでnotes更新
  const [notes, setNotes] = useState([]);

  const onAddNote=()=>{
    console.log("new note");
    //ノートの持つ内容を指定
    const newNote ={
      id:1,
      title: "new note",
      content: "new content",
      modDate: Date.now(),
    };
    //新しいノートを追加するよ
    setNotes([...notes,newNote]);
    //setNotes(newNote);
    console.log("notes is",notes);
  };

  return (
    <div className="App">
        <Sidebar onAddNote={onAddNote} notes={notes}/>
        <Main/>
    </div>
  )
}

export default App;
