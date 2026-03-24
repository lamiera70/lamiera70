
import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import AddItem from './components/AddItem/AddItem'
import ItemList from './components/ItemList/ItemList'

export default function App() {

  const [items, setItems] = useState([])
  
  
  
  
  useEffect(() => {
        
      
    const data = JSON.parse(localStorage.getItem('localItems')) || []
       
    setItems(data)
   
  }, [])
  
  
  function addItem(text) {
    const newItem = {id: crypto.randomUUID(), testo: text}
    setItems([...items, newItem])
  }
  
  useEffect(() => {

    if (items.length !== 0) {

      localStorage.setItem('localItems', JSON.stringify(items))
    }

     
  }, [items])

  function editItem(id) {
    
    setSelectId(id)
   
    

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

            <ItemList items={items}/>

          </div>

        </div>

      </div>
    </div>
    
    </>
  )
}


