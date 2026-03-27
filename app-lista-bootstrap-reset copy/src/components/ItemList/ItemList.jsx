
import "./ItemList.css";

export default function ItemList({items, selectId, editText, setEditText, handleCheck, handleEditText, handleEditItem, handleDeleteItem}) {

  

  return (

    <>

      <ul className="list-group">

        {items.map((item) => (
    
          (selectId === item.id) ? (

            <li 
              key={item.id}
              className={item.isCheck
                   ? "list-group-item d-flex justify-content-center align-items-center bg-success-subtle"
                   : "list-group-item d-flex justify-content-between align-items-center"}
            >
              <input 
                className="form-check-input me-2"
                type="checkbox"
                checked={item.isCheck}
                onChange={() => handleCheck(item.id)}
              />
              
              <input
                type="text"
                className="form-control"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />

              <button 
                type="button"
                className="btn btn-danger ms-2"
                onClick={() => handleDeleteItem(item.id)}
              >elimina</button>
                  
              <button 
                type="button"
                className="btn btn-success ms-2"
                onClick={() => handleEditText(item.id, editText)}
              >salva</button>

            </li>

          ) : (

            (item.isCheck) ? (
                 <div key={item.id} >
                    <li 
                      className={item.isCheck
                        ? "list-group-item d-flex align-items-center bg-success-subtle"
                        : "list-group-item d-flex align-items-center"}
                    >
                    <input 
                      className="form-check-input me-2"
                      type="checkbox"
                      checked={item.isCheck}
                      onChange={() => handleCheck(item.id)}
                    />
                    
                    <div className="flex-grow-1 text-center">
                      {item.testo}

                    </div>
        
                           
                    </li>

                 </div>
            ) : (

              <div key={item.id} >

                  <li 
                    
                    className={item.isCheck
                        ? "list-group-item d-flex justify-content-between align-items-center bg-success-subtle"
                        : "list-group-item d-flex justify-content-between align-items-center"}
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
                      onClick={() => handleEditItem(item)}
                    >modifica</button>
                  </li>
              </div>

            )

          )
              
        ))}
         
      </ul>
    
    </>

  );
}

