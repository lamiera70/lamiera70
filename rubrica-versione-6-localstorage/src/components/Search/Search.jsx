
import './Search.css';


export default function Search({searchName, setSearchName, children}) {

  return (

    <>
      <div className='container-search'>
          <input className='search' type="text" placeholder="cerca..." value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
          />
        
          {children}
      </div>
    
    </>

  );

} 


