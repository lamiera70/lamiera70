
import './CardContactDetail.css';
import { MdEmail, MdLocalPhone } from "react-icons/md";


export default function CardContactDetail({detailContact, children}) {

  return (

    <>

      <div className='card-detail'>
        <div>
          <h4>DETTAGLI CONTATTO</h4>
          <p>{detailContact.firstName} {detailContact.lastName}</p>
          <p>{detailContact.work}</p>
          <p><MdLocalPhone /> {detailContact.phone}</p>
          <p><MdEmail /> {detailContact.email}</p>
          <img src={detailContact.image} alt="URL immagine " />
          <div>

            {children}
          </div>
        </div>
      </div>
    
    </>

  );

} 


