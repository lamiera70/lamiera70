import "./Header.css";

export default function Header({children, message}) {
  return (

    <>

      <div className="d-flex justify-content-start">
        <div>
          {children}
        </div>
        <h3 className="text-center ms-3">
          {message}
        </h3>

      </div>

    
    </>

  );
}