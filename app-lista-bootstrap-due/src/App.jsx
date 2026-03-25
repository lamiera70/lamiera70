
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import AddItem from './components/AddItem/AddItem'
import ItemList from './components/ItemList/ItemList'

export default function App() {

  const [items, setItems] = useState([])
  const [selectId, setSelectId] = useState(null)
  const [editText, setEditText] = useState("")
  
    
  
  useEffect(() => {
       
    const data = JSON.parse(localStorage.getItem('localItems')) || []
       
    setItems(data)
   
  }, [])
  
  
  useEffect(() => {

    localStorage.setItem('localItems', JSON.stringify(items))
  
  }, [items])


  function addItem(text) {

    const newItem = {id: crypto.randomUUID(), testo: text, isCheck: false}
    setItems([...items, newItem])
  }
  


  function handleCheck(id) {
    
    setItems(items.map((item) =>
      item.id === id ? { ...item, isCheck: !item.isCheck } : item ));
  }

  function handleEditText(id, value) {
    
    setItems(items.map((item) =>
      item.id === id ? { ...item, testo: value } : item ));
    setSelectId(null)
  }


  function handleEditItem(item) {

    setSelectId(item.id)
    setEditText(item.testo)
  }
  
  function handleDeleteItem(id) {

    setItems(items.filter((item) =>item.id !== id));
  }


 


  return (
    <>

    <div className="container mt-5">
      <div className="row justify-content-center">

        <div className="col-12 col-md-8 col-lg-6">

          <div className="card p-4 shadow-sm">

            <Header message={"Lista della spesa"}/>
       
          </div>

        </div>

      </div>

       <div className="row justify-content-center">

        <div className="col-12 col-md-8 col-lg-6">

          <div className="card p-4 shadow-sm">
                
            <AddItem addText={addItem}/>

          </div>

        </div>

      </div>

       <div className="row justify-content-center">

        <div className="col-12 col-md-8 col-lg-6">

          <div className="card p-4 shadow-sm">

            <ItemList
             items={items}
             selectId={selectId}
             editText={editText}
             setEditText={setEditText}
             handleCheck={handleCheck}
             handleEditText={handleEditText}
             handleEditItem={handleEditItem}
             handleDeleteItem={handleDeleteItem}
            
            />

          </div>

        </div>

      </div>
    </div>
    
    </>
  )
}


