
import { BrowserRouter, Route, Routes } from 'react-router';
import Menu from '../components/Menu/Menu';
import App from '../App';
import { useEffect, useState } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import Detail from '../components/Detail/Detail';

const URL_API = 'https://lamiera70.github.io/fake-api-superheroes/superheroes.json';

export default function AppRoutes() {

  const [heroes, setHeroes] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(null);

  // effetto collaterale che chiama fetch
  
  useEffect(() => {

    getHeroesApi();

  }, []);

  // effetto collaterale per scrivere su localstorage i supereroi preferiti

  
  
  
  useEffect(() => {

    if (heroes !== null) {

        // [1,2,3]
        const favHeroesId = heroes.filter(h => h.isFavorite)
              .map(h => (h.id));
    
        // console.log(favHeroesId)      
    
        localStorage.setItem('fav-heroes-id', 
          JSON.stringify(favHeroesId))
    }
    

  }, [heroes])

  
  useEffect(() => {

          
   const lsDarkMode = JSON.parse(localStorage.getItem('heroes-dark-mode'));
    
   setIsDarkMode(lsDarkMode);
    

  }, [])
  
  
  useEffect(() => {
    if (isDarkMode !== null) {
      localStorage.setItem('heroes-dark-mode', JSON.stringify(isDarkMode));
      }
  }, [isDarkMode]);
  
  
  
  function getHeroesApi() {
    fetch(URL_API)
      .then(res => res.json())
      .then(data => {
        
        
        const lsFavHeroesId = JSON.parse(localStorage.getItem('fav-heroes-id')) || [];
        
        // console.log(data);

        const newHeroes = data.map(h => (
          {...h, isFavorite: lsFavHeroesId.includes(h.id)}
        ))
        setHeroes(newHeroes);
      });
  }

  function toggleFavorite(id) {
    // alert("hai cliccato la stellina");
    // alert(`hai cliccato ${id}`);


    const newHeroes = heroes.map(h => (
      id === h.id ? {...h, isFavorite: !h.isFavorite} : h
    ));

    setHeroes(newHeroes);



  }

  return (

    <>

        <ThemeContext.Provider value={{isDarkMode, setIsDarkMode}}>

          <BrowserRouter>
              <Routes>
                  <Route path='/' element={
                    
                      <App heroes={heroes} toggleFavorite={(id) => toggleFavorite(id)}>
                        <Menu title="home page"/>
                      </App>
                    
                  }/>
                 <Route path='favorite' element={
                      <App heroes={heroes ? heroes.filter(h => h.isFavorite) : []}
                          toggleFavorite={(id) => toggleFavorite(id)}>
                        <Menu title="home page"/>
                      </App>
                  }/>
                    
                  <Route path='detail/:id' element={
                      <Detail heroes={heroes}>
                            <Menu title="home page"/>
                      </Detail>
                  } />
                  
                  <Route path='*' element={<h1>errore, pagina non trovata</h1>}/>
              </Routes>
          </BrowserRouter>

        </ThemeContext.Provider>
    
    </>
  );
}

