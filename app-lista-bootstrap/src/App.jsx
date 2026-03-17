import "./App.css";
import { useState } from "react";
import AddItem from "./components/AddItem/AddItem";
import ItemList from "./components/ItemList/ItemList";
import Header from "./components/Header/Header";

export default function App() {
  const [items, setItems] = useState([]);
  const [editText, setEditText] = useState("");
  const [editingId, setEditingId] = useState(null);

  
  
  function addItem(text) {
    setItems([...items, { id: crypto.randomUUID(), testo: text, done: false }]);
  }

  function handleToggleDone(id) {

    setItems(items.map((item) => item.id === id ? { ...item, done: !item.done } : item));

  }


  function handleClickEditId(item) {
    setEditingId(item.id);
    setEditText(item.testo);
  }

  function handleClickCancel() {

    setEditingId(null)
    setEditText("")
   

  }

  // function handleClickdefinire(item) {

  //   if(listaIdEdit.includes(item.id))
  //     { setListaIDEdit(listaIdEdit.filter(lista => lista !== item.id))
  //     } else {
  //       setListaIDEdit([...listaIdEdit, item.id])
  //     }

  // }
  
  
  
  
  
  
  function handleClickDelete(id) {
    
    
    setItems(items.filter(item => item.id !== id ))

  }

  function handleClickSave(id, editText) {

    
    setItems(items.map((item) => (item.id === id ? {...item, testo: editText} : item)));
    setEditingId(null)

  

  }


  function saveList() {

  const name = prompt("Nome della lista:");

  if (!name) return;

  localStorage.setItem(name, JSON.stringify(items));

  }


  function loadList() {

  const name = prompt("Nome della lista da caricare:");

  if (!name) return;

  const data = localStorage.getItem(name);

  if (data) {
    setItems(JSON.parse(data));
  } else {
    alert("Lista non trovata");
  }

  }


  function clearList() {

  if (confirm("Vuoi cancellare la lista?")) {
    setItems([]);
  }

  }

  

  return (
    <>
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card p-4 shadow-sm">

              <Header
                message="Lista della spesa"
                saveList={saveList}
                loadList={loadList}
                clearList={clearList}
               />

              <AddItem addItem={addItem} />

              <ItemList
               items={items}
               handleClickEditId={handleClickEditId}
               handleToggleDone={handleToggleDone}
               handleClickCancel={handleClickCancel}
               handleClickDelete={handleClickDelete}
               handleClickSave={handleClickSave}
               editText={editText}
               editingId={editingId}
               setEditText={setEditText}
               
              
              />

            </div>
          </div>
        </div>
      </div>
    </>
  );
}
