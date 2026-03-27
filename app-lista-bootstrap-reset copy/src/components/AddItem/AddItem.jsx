import { useState } from "react";
import "./AddItem.css";

export default function AddItem({addText}) {

  const [text, setText] = useState("")

  function handleAdd(text) {
    
    if (!text.trim()) return
    addText(text)
    setText("")
  }

  
  return (

    <>

      <div className="input-group mb-3">

        <input
          type="text"
          className="form-control"
          placeholder="Inserisci prodotto"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={() => handleAdd(text)}
        >
          Aggiungi
        </button>

      </div>

    </>
  )
}


