import { useEffect, useState } from 'react'
import './App.css'
import Header from './components/Header/Header';
import Button from './components/Button/Button';
import Search from './components/Search/Search';
import ContainerCards from './components/ContainerCards/ContainerCards';
import CardContact from './components/CardContact/CardContact';
import CardContactNew from './components/CardContactNew/CardContactNew';
import CardContactDetail from './components/CardContactDetail/CardContactDetail';
import CardContactEdit from './components/CardContactEdit/CardContactEdit';

export default function App() {

  const cardsDefault = [
  {
    id: crypto.randomUUID(),
    firstName: 'John',
    lastName: 'Smith',
    work: 'Impiegato',
    phone: '1234567',
    email: 'j.smith@email.com',
    image: 'https://img.freepik.com/vettori-premium/icona-della-faccia-della-barba-elemento-vettoriale-colorato-dalla-collezione-di-barbe-icona-della-faccia-della-barba-creativa-per-modelli-di-web-design-e-infografiche_676904-3609.jpg?semt=ais_hybrid'
  },
  {
    id: crypto.randomUUID(),
    firstName: 'Alice',
    lastName: 'Brown',
    work: 'Ingegnere',
    phone: '2345678',
    email: 'a.brown@email.com',
    image: 'https://img.freepik.com/vettori-premium/icona-della-faccia-della-barba-elemento-vettoriale-colorato-dalla-collezione-di-barbe-icona-della-faccia-della-barba-creativa-per-modelli-di-web-design-e-infografiche_676904-3609.jpg?semt=ais_hybrid'
  },
  {
    id: crypto.randomUUID(),
    firstName: 'Michael',
    lastName: 'Johnson',
    work: 'Medico',
    phone: '3456789',
    email: 'm.johnson@email.com',
    image: 'https://img.freepik.com/vettori-premium/icona-della-faccia-della-barba-elemento-vettoriale-colorato-dalla-collezione-di-barbe-icona-della-faccia-della-barba-creativa-per-modelli-di-web-design-e-infografiche_676904-3609.jpg?semt=ais_hybrid'
  },
  ];

  const [cards, setCards] = useState(() => {
    const cardsStorage = localStorage.getItem('card-storage');
    return cardsStorage ? JSON.parse(cardsStorage) : cardsDefault;
  });

  useEffect(() => {
    localStorage.setItem('card-storage', JSON.stringify(cards));
    }, [cards])

  const [searchName, SetSearchName] = useState('');
  
  const [isVisibileNewContact, setIsVisibileNewContact] = useState(false);
  
  const [isVisibileDetailContact, setIsVisibileDetailContact] = useState(false);
  
  const [isVisibileEditContact, setIsVisibileEditContact] = useState(false);

  const [addContact, setAddContact] = useState(
    { 
      firstName: '',
      lastName: '',
      work: '',
      phone: '',
      email: '',
      image: '',
    }
  );

  const [detailContact, setDetailContact] = useState(
    { 
      firstName: '',
      lastName: '',
      work: '',
      phone: '',
      email: '',
      image: '',
    }
  );

  const [editContact, setEditContact] = useState(
    { 
      firstName: '',
      lastName: '',
      work: '',
      phone: '',
      email: '',
      image: '',
    }
  );
  

  
  
  function handleConfirmAndDelete(id) {
    const ok = window.confirm("Sei sicuro di voler eliminare questo contatto?");
    if (ok) {
      handleClickEliminaContact(id);
    }
  }
  
  
  function handleClickEliminaContact(id) {

    
    setCards(prev => prev.filter(card => card.id !== id));
    setIsVisibileDetailContact(false)
    
  }

  function handleClickAggiungi() {
    setIsVisibileNewContact(true)
  }

  function handleClickAnnullaAggiungi() {
    setIsVisibileNewContact(false)
  }

  function handleClickDetail(id, card) {
    
    setDetailContact({
      id: id,
      firstName: card.firstName,
      lastName: card.lastName,
      work: card.work,
      phone: card.phone,
      email: card.email,
      image: card.image,
    })
    setIsVisibileDetailContact(true)
   
  }

  function handleClickAnnullaDetail() {
    setIsVisibileDetailContact(false)
  }

  function handleClickSalvaContact() {
    setCards([...cards, {
      id: crypto.randomUUID(),
      firstName: addContact.firstName,
      lastName: addContact.lastName,
      work: addContact.work,
      phone: addContact.phone,
      email: addContact.email,
      image: addContact.image,
     }])
    setIsVisibileNewContact(false)
    setAddContact({
      firstName: '',
      lastName: '',
      work: '',
      phone: '',
      email: '',
      image: '',
    })
  }

  function handleClickEditContact(id, card) {
   
    setEditContact({
      id: id,
      firstName: card.firstName,
      lastName: card.lastName,
      work: card.work,
      phone: card.phone,
      email: card.email,
      image: card.image,
    })
    setIsVisibileEditContact(true)
    setIsVisibileDetailContact(false)
  }

  function handleClickAnnullaEdit() {
    setIsVisibileEditContact(false)
  }

  function handleClickSalvaEditContact(id, card) {
   
    setCards(prevCards => prevCards.map(item => item.id === id ?
      {...item,
        firstName: card.firstName,
        lastName: card.lastName,
        work: card.work,
        phone: card.phone,
        email: card.email,
        image: card.image,}
         : item));
    setIsVisibileEditContact(false)
 
  }


  return (

    <>

        {isVisibileNewContact &&

          <>
          <ContainerCards>
          
          <CardContactNew addContact={addContact} setAddContact={setAddContact}>
            <Button handleClick={() => handleClickSalvaContact()}>Salva</Button>
            <Button handleClick={() => handleClickAnnullaAggiungi()}>Indietro</Button>
            
          </CardContactNew>
          </ContainerCards>
          </>
      
        }

        {isVisibileDetailContact &&
        
          <>
           <ContainerCards>

            <CardContactDetail detailContact={detailContact}>
              <Button handleClick={() => handleClickEditContact(detailContact.id, detailContact)}>Modifica</Button>
              <Button handleClick={() => handleConfirmAndDelete(detailContact.id)}>Elimina</Button>
              <Button handleClick={() => handleClickAnnullaDetail()}>Indietro</Button>
            </CardContactDetail>  
           </ContainerCards>
          
          </>
        
        }

        {isVisibileEditContact &&
        
        <>
         <ContainerCards>

          <CardContactEdit editContact={editContact} setEditContact={setEditContact}>
            <Button handleClick={() => handleClickSalvaEditContact(editContact.id, editContact)}>Salva</Button>
            <Button handleClick={() => handleClickAnnullaEdit()}>Indietro</Button>
          </CardContactEdit>  
         </ContainerCards>
        
        </>
      
        }

        {!isVisibileNewContact && !isVisibileDetailContact && !isVisibileEditContact &&

        <>
          
          <Header>
          <Button handleClick={() => handleClickAggiungi()}>Aggiungi</Button>
          <Search searchName={searchName} setSearchName={SetSearchName} />
          </Header>
          
          <ContainerCards>

           {[...cards]
              .filter(card => {
                const q = searchName.trim().toLocaleLowerCase("it-IT");
                if (!q) return true; // se vuota, mostra tutto
                const first = (card.firstName || "").toLocaleLowerCase("it-IT");
                const last  = (card.lastName  || "").toLocaleLowerCase("it-IT");
                // cerca su nome e cognome
                return `${first} ${last}`.includes(q);
              })
              .sort((a, b) =>
                (a.firstName || "").localeCompare((b.firstName || ""), "it", { sensitivity: "base" })
              )
              .map((card) => (
                <CardContact key={card.id} card={card} handleClick={() => handleClickDetail(card.id, card)} />

            ))}

          </ContainerCards>

        </>
        
        }
    
    </>

  );
}




