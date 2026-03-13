import { useState } from "react";
import "./AddItem.css";

function AddItem({ addItem }) {
  const [text, setText] = useState("");

  function handleAdd() {
    if (text.trim() === "") {
      return alert("inserisci del testo");
    }
    addItem(text);
    setText("");
  }

  return (
    <div className="input-group mb-3">
      <input
        type="text"
        className="form-control"
        placeholder="Inserisci prodotto"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <button className="btn btn-primary" onClick={handleAdd}>
        Aggiungi
      </button>
    </div>
  );
}

export default AddItem;
