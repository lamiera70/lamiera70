
import "./SaveList.css";

export default function SaveList({saveItems}) {

  

  return (

    <>

      <ul className="list-group">

        {saveItems.map((item) => (
    
         

            <li 
              key={item.id}
              className="list-group-item d-flex justify-content-between align-items-center"
            >
              
              
              <div className="flex-grow-1 text-center">
                {item.testo}

              </div>

              <button 
                type="button"
                className="btn btn-success ms-2"
                
              >Apri</button>
              
              
              <button 
                type="button"
                className="btn btn-danger ms-2"
                
              >elimina</button>
                  
              

            </li>

       
              
        ))}
         
      </ul>
    
    </>

  );
}

