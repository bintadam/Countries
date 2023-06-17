const btnStart = document.querySelector(".btn-start");
const btnSearch =  document.querySelector('.btn-search');
const btnSort =  document.querySelector(".btn-sort");
const hero = document.querySelector(".hero")

const container = document.getElementById("cardContainer");

const countriesLength = countries.length
const total = document.createElement("p");
total.textContent = `Total Number of countries: ${countriesLength}`;
hero.appendChild(total)

function createCard(content) {
    let card = document.createElement("div");
    card.className = "card";
    card.textContent = content;
    container.appendChild(card);
}

const startingWord = (countries, startWord) => {
    const result = countries.filter(country => country.startsWith(startWord))
    console.log(result)
    return result
}

let toggle = false

btnStart.addEventListener("click", function(e){
    e.preventDefault()
    btnStart.style.backgroundColor = "rgb(98, 23, 169)"
    const numOfCountries = startingWord(countries, search)
    console.log(numOfCountries)
    numOfCountries.forEach(country => {
        createCard(country)
    })
})

btnSort.addEventListener("click", function(e){
    e.preventDefault()
    const img = document.getElementById("img");
    container.innerHTML = "";

    if(!toggle){
        img.src = 'images/sort1.png'
        toggle = true;
        countries.sort((a, b) => a.localeCompare(b));
    } else{
        img.src = "images/sort.png"
        toggle= false;
        countries.sort((a, b) => b.localeCompare(a));
    }
    countries.forEach(country => {
        createCard(country)
    });
    
})