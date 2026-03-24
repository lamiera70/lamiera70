import { useState } from "react";
import "./ItemList.css";

export default function ItemList({items}) {

  const [isEdit, setIsEdit] = useState(false)


  function handleEdit() {
    setIsEdit(!isEdit)
  }

  

  return (

    <>

      <ul className="list-group">

        {items &&

            items.map((item) => (
    
              isEdit ? (

                   <li 
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <input className="form-check-input me-2" type="checkbox" value="" />
                  
                  {item.testo}
      
      
                  <button 
                    type="button"
                    className="btn btn-info"
                    onClick={handleEdit}
                  >salva</button>

                  <button 
                    type="button"
                    className="btn btn-info"
                    onClick={handleEdit}
                  >annulla</button>
                </li>

              ) : (

                <li 
                  key={item.id}
                  className="list-group-item d-flex justify-content-between align-items-center"
                >
                  <input className="form-check-input me-2" type="checkbox" value="" />
                  
                  {item.testo}
      
      
                  <button 
                    type="button"
                    className="btn btn-info"
                    onClick={handleEdit}
                  >modifica</button>
                </li>
              )
              
    
            ))}
         
    </ul>
    
    </>

  );
}

