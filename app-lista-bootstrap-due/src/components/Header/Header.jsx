import "./Header.css";

export default function Header({message}) {
  return (

    <>

      <h3 className="text-center">
          {message}
      </h3>
    
    </>

  );
}