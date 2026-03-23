import "./Header.css";

export default function Header({message}) {
  return (

    <>

      <h2 className="text-center mb-4">
          {message}
      </h2>
    
    </>

  );
}