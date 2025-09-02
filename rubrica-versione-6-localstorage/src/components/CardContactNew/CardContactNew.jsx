

import './CardContactNew.css';


export default function CardContactNew({addContact, setAddContact,  children}) {

  

  return (

    <>
       <div className="card-new">
      <h2>Nuovo Contatto</h2>
      <input type="text" name="firstName" placeholder="Nome" value={addContact.firstName}
      onChange={(e) => setAddContact({...addContact, firstName: e.target.value})}
      />
      <input type="text" name="lastName" placeholder="Cognome" value={addContact.lastName}
      onChange={(e) => setAddContact({...addContact, lastName: e.target.value})}
      />
      <input type="text" name="work" placeholder="Lavoro" value={addContact.work}
      onChange={(e) => setAddContact({...addContact, work: e.target.value})}
      />
      <input type="text" name="phone" placeholder="Telefono" value={addContact.phone}
      onChange={(e) => setAddContact({...addContact, phone: e.target.value})}
      />
      <input type="email" name="email" placeholder="Email" value={addContact.email}
      onChange={(e) => setAddContact({...addContact, email: e.target.value})}
      />
      <input type="text" name="image" placeholder="URL Immagine" value={addContact.image}
      onChange={(e) => setAddContact({...addContact, image: e.target.value})}
      />
      
      <div>
          
        <img
        src={addContact.image || 'immagine-default.jpg'}
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = 'faccia.jpg';
        }}
        alt="immagine"
        />
          
      </div>
      
      <div>
        {children}
      </div>
    </div>
    
    </>

  );

} 

