import { useState } from "react";
import "./ItemList.css";

export default function ItemList({items, handleCheck}) {

  
  const [selectId, setSelectId] = useState([])
  


  function handleEdit(id) {
    setSelectId(id)
  }
  
  function handleUndoEdit() {
    setSelectId([])
  }

    

  return (

    <>

      <ul className="list-group">

        {items &&

            items.map((item) => (
    
              selectId === item.id ? (

                   <li 
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <input 
                    className="form-check-input me-2"
                    type="checkbox"
                    checked={item.isCheck}
                    onChange={() => handleCheck(item.id)}
                  />
                  
                  {item.testo}
      
      
                  <button 
                    type="button"
                    className="btn btn-info"
                    
                  >salva</button>

                  <button 
                    type="button"
                    className="btn btn-info"
                    onClick={() => handleUndoEdit()}
                  >annulla</button>
                </li>

              ) : (

                <li 
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <input 
                    className="form-check-input me-2"
                    type="checkbox"
                    checked={item.isCheck}
                    onChange={() => handleCheck(item.id)}
                  />
                  
                  {item.testo}
      
      
                  <button 
                    type="button"
                    className="btn btn-info"
                    onClick={() => handleEdit(item.id)}
                  >modifica</button>
                </li>
              )
              
    
            ))}
         
    </ul>
    
    </>

  );
}

