
import './CardContactDetail.css';
import { MdEmail, MdLocalPhone } from "react-icons/md";


export default function CardContactDetail({detailContact, children}) {

  return (

    <>

      <div className='card-detail'>
        <div>
          <h3>DETTAGLI CONTATTO</h3>
          <h4>{detailContact.firstName} {detailContact.lastName}</h4>
          <h4>{detailContact.work}</h4>
          <h4><MdLocalPhone /> {detailContact.phone}</h4>
          <h4><MdEmail /> {detailContact.email}</h4>
          <img src={detailContact.image} alt="URL immagine " />
          <div>

            {children}
          </div>
        </div>
      </div>
    
    </>

  );

} 


