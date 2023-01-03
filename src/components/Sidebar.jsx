import React from "react";
import "./Sidebar.css";

const Sidebar = ({onAddNote, notes}) => {
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
                <div className="app-sidebar-note">
                    <div className="sidebar-note-title">
                        <strong>{note.title}</strong>
                        <button>Delete</button>
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