const btnStart = document.querySelector(".btn-start");
const btnSearch =  document.querySelector('.btn-search');
const btnSort =  document.querySelector(".btn-sort");
const hero = document.querySelector(".hero")

const countriesLength = countries.length
console.log(countriesLength)
// hero.classList.add("total")
// document.querySelector(".total").textContent = `Toatal Number of countries: ${countriesLength}`;

btnStart.addEventListener("click", function(e){
    e.preventDefault()
    const search = document.querySelector("#search").value
    console.log(search)
})