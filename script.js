const btnStart = document.querySelector(".btn-start");
const btnSearch =  document.querySelector('.btn-search');
const btnSort =  document.querySelector(".btn-sort");
const hero = document.querySelector(".hero")

const container = document.getElementById("cardContainer");

const countriesLength = countries.length
const total = document.createElement("p");
total.textContent = `Total Number of countries: ${countriesLength}`;
hero.appendChild(total)

const country = countries.forEach(wadan => {
    console.log(wadan)
    const card = document.createElement("div")
    card.className = "card"
    card.textContent = wadan;
    container.appendChild(card);
})

window.onLoad = function(){
    const search = document.querySelector("#search").value
    console.log(search)
}
const startingWord = (countries, startWord) => {
    const result = countries.filter(country => country.startsWith(startWord))
    console.log(result)
    return result
}


btnStart.addEventListener("click", function(e){
    e.preventDefault()
    btnStart.style.backgroundColor = "rgb(98, 23, 169)"
    const numOfCountries = startingWord(countries, search)
    console.log(numOfCountries)
})