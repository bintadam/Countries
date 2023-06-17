console.log(countries)
const btnStart = document.querySelector(".btn-start");
const btnSearch =  document.querySelector('.btn-search');
const btnSort =  document.querySelector(".btn-sort");
const hero = document.querySelector(".hero")

const countriesLength = countries.length
const total = document.createElement("p");
total.textContent = `Total Number of countries: ${countriesLength}`;
hero.appendChild(total)

const startingWord = () => {
    const search = document.querySelector("#search").value
    console.log(search)
    const startWord = search
    const result = countries.filter(country => country.startsWith(startWord))
    return result
}

btnStart.addEventListener("click", function(e){
    e.preventDefault()
    btnStart.style.backgroundColor = "rgb(98, 23, 169)"
    startingWord()
})