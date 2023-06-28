const btn = document.querySelector(".btn")
const btnStart = document.querySelector(".btn-start");
const btnSearch =  document.querySelector('.btn-search');
const btnSort =  document.querySelector(".btn-sort");
const searchInput = document.getElementById("search")
const hero = document.querySelector(".hero")

const container = document.getElementById("cardContainer");

const countriesLength = countries.length
const total = document.createElement("h5");
total.textContent = `Total Number of countries: ${countriesLength}`;
hero.appendChild(total)

const has = document.createElement("p")
hero.appendChild(has)

function createCard(content) {
    let card = document.createElement("div");
    card.className = "card";
    card.textContent = content;
    container.appendChild(card);
}

const displayContent = (countries) => {
    return countries.forEach(country => createCard(country))
}
displayContent(countries)

const startingWord = (searchInput,countries) => {
    let startWord = searchInput.value.toLowerCase()
    const result = countries.filter(country => country.toLowerCase().startsWith(startWord))
    console.log(result)

    return result
}

btnStart.addEventListener("click", function(e){
    e.preventDefault()

    btnStart.style.backgroundColor = "rgb(98, 23, 169)"
    btnSort.style.backgroundColor = "rgb(163, 81, 240)"
    btnSearch.style.backgroundColor = "rgb(163, 81, 240)"

    searchInput.addEventListener("input", function(e){
        container.innerHTML = "";
        const numOfCountries = startingWord(searchInput,countries);
        console.log(numOfCountries)
        numOfCountries.forEach(country => {
            createCard(country)
        })
        has.textContent = `Countries start with  ${searchInput.value.toLowerCase()} are ${numOfCountries.length}`
    })

})

const hasWord = (searchInput,countries) => {
    let includes = searchInput.value.toLowerCase()
    const result = countries.filter(country => country.toLowerCase().includes(includes))
    return result
}

btnSearch.addEventListener("click", function(e){
    e.preventDefault()

    btnSort.style.backgroundColor = "rgb(163, 81, 240)"
    btnStart.style.backgroundColor = "rgb(163, 81, 240)"
    btnSearch.style.backgroundColor = "rgb(98, 23, 169)"

    searchInput.addEventListener("input", function(e){
        e.preventDefault()
        container.innerHTML = "";
        const numOfCountries = hasWord(searchInput,countries);
        numOfCountries.forEach(country => {
            createCard(country)
        })
        has.textContent = `Countries containing ${searchInput.value.toLowerCase()} are ${numOfCountries.length}`
    })

})

let toggle = false
btnSort.addEventListener("click", function(e){
    e.preventDefault()

    btnStart.style.backgroundColor = "rgb(163, 81, 240)"
    btnSearch.style.backgroundColor = "rgb(163, 81, 240)"
    btnSort.style.backgroundColor = "rgb(98, 23, 169)"

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