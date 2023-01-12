import { useState } from 'react'
import './App.css';
import Main from './components/Main';
import Sidebar from './components/Sidebar';
import uuid from "react-uuid";

function App() {
  //ノートを追加する為配列として保持
  //notesが複数のノートを保持 setNotesでnotes更新
  const [notes, setNotes] = useState(JSON.parse(localStorage.getItem("notes")||[]));
  //ノートの状態を判定する falseなので何もされない
  const [activeNote,setActiveNote]=useState(false);
  
  useEffect(()=>{
    //save at the local strage
    setActiveNote(notes[0].id);
  },[]);

  const onAddNote=()=>{
    //console.log("new note");
    //ノートの持つ内容を指定
    //id をランダムに設定uuid
    const newNote ={
      id:uuid(),
      title: "new note",
      content: "new content",
      modDate: Date.now(),
    };
    //新しいノートを追加するよ
    setNotes([...notes,newNote]);
    //setNotes(newNote);
    console.log("notes is",notes);
  };

  const onDeleteNote=(id)=>{
    // id以外のノートが残る(idのノートが削除される)
    // notesの変数をnoteに入れる noteのnote.idとidで判定
    const filterNotes = notes.filter((note)=>note.id!==id);
    //notesの配列の値を更新
    setNotes(filterNotes);
  };

  //activeなnotesのオブジェクトを取得
    const getActiveNote=()=>{
      //activeNoteのidと一致するときのnotesを返す
      return notes.find((note)=>note.id===activeNote)
    };

  const onUpdateNote=(updatedNote)=>{
    //修正された新しいノートの配列を返す。
    const updatedNotesArray=notes.map((note)=>{
      if(note.id === updatedNote.id){
        return updatedNote;
      } else {
        return note;
      }
    });
    setNotes(updatedNotesArray);
  };

  return (
    <div className="App">
        <Sidebar 
        onAddNote={onAddNote} 
        notes={notes} 
        onDeleteNote={onDeleteNote}
        activeNote={activeNote}
        setActiveNote={setActiveNote}
        />
        <Main activeNote={getActiveNote()}
        onUpdatedNote={onUpdateNote}/>
    </div>
  )
}

export default App;
