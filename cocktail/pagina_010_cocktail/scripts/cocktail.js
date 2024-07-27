console.log('sono nel js.....');

const urlCocktails = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

const contenitoreCard = document.querySelector('#card');

const inputRicerca = document.querySelector('#pwd');

const btnRicerca = document.querySelector('#btn-cerca');

const selectCocktail = document.querySelector('#seleziona');




selectCocktail.addEventListener('change', function(event) {

    const urlSelezionaCocktail = urlCocktails + event.target.value;
    
    contenitoreCard.innerHTML = '';
    
    callAPI(urlSelezionaCocktail, stampaCards);

    inputRicerca.value = '';

    selectCocktail.value = 'seleziona il cocktail';
})


btnRicerca.addEventListener('click', function() {
    
    const urlCocktailsCerca = urlCocktails + inputRicerca.value;
    
    contenitoreCard.innerHTML = '';
    
    callAPI(urlCocktailsCerca, stampaCards);

    inputRicerca.value = '';

})

callAPI(urlCocktails, stampaCards);





function callAPI(url, callback) {
    fetch(url)
        .then(res => res.json())
        .then(data => {
            callback(data);
        });
}

function stampaCards(input) {
    for(num of input.drinks) {
        contenitoreCard.innerHTML += `
        <div class="col-lg-3">
            <div class="container mt-3 ">
                <div class="shadow card rounded-4" style="width:100%">
                    <img class="card-img-top" src="${num.strDrinkThumb}" alt="Card image" style="width:100%">
                    <div class=" card-body">
                        <h4 class="card-title">${num.strDrink}</h4>
                        <p class="card-text">Tipo: ${num.strAlcoholic}</p>
                        <p class="card-text">Categoria: ${num.strCategory}</p>
                        <button type="button" class="btn btn-primary" data-bs-toggle="collapse"
                            data-bs-target="#${num.idDrink}">Istruzioni</button>
                        <div id="${num.idDrink}" class="collapse">
                            ${num.strInstructionsIT}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
    }
}