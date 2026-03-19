import { useState } from "react";
import "./AddItem.css";

function AddItem({ addItem }) {
  
  const [text, setText] = useState("");

  const suggestions = [
    "pollo",
    "pomodori",
    "porri",
    "pane",
    "pasta",
    "tavor 1mg",
    "tachipirina 500",
    "tachipirina 1000",
    "collirio ozodrop",
    "collirio alocross gocce",
    "patatine",
    "limoni",
    "candeggina",
    "aceto domestico",
    "detersivo nelsen verde",
    "detersivo dash classico",
    "prosciutto raspini",
    "pizza",
    "prosciutto",
    "capocollo",
  ];

  const filtered =
    text.length > 1
      ? suggestions.filter((s) =>
          s.toLowerCase().includes(text.toLowerCase())
        )
      : [];

  function handleAdd() {
    if (text.trim() === "") {
      return alert("inserisci del testo");
    }
    addItem(text);
    setText("");
  }

  return (
    <div className="mb-3 position-relative">

      <div className="input-group">
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

      {filtered.length > 0 && (
        <ul className="list-group suggestion-box">
          {filtered.map((s, index) => (
            <li
              key={index}
              className="list-group-item suggestion"
              onClick={() => setText(s)}
            >
              {s}
            </li>
          ))}
        </ul>
      )}

    </div>
  );
}

export default AddItem;