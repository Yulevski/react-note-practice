import React from "react";
import "./Sidebar.css";

const Sidebar = ({onAddNote, notes, onDeleteNote,activeNote,setActiveNote}) => {
    console.log("Snotes is ", notes);
  return (
    <div className="app-sidebar">
        <div className="app-sidebar-header">
            <h1>NOTE</h1>
            <button onClick={onAddNote}>ADD</button>
        </div>
        <div className="app-sidebar-notes">
            {/* ↓notesの値をnoteへ */}
            {notes.map((note)=>(
                <div className="app-sidebar-note active" key={note.id} onClick{()=>setActiveNote(note.id)}>
                    <div className="sidebar-note-title">
                        <strong>{note.title}</strong>
                        {/* arrow関数で書きリロードしたときに作動しないように,引数をとる時 */}
                        <button onClick={()=>onDeleteNote(note.id)}>Delete</button>
                    </div>
                    <p>{note.content}</p>
                    <small>{new Date(note.modDate).toLocaleDateString("ja-JP",{
                        hour: "2-digit",
                        minute:"2-digit",
                    })}</small>
                </div>

            ))}
           
        </div>
    </div>
 
  );
};

export default Sidebar;