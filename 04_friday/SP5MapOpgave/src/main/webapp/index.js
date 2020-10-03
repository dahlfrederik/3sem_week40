let findCountryBtn = document.getElementById("svg2");

findCountryBtn.addEventListener('click', (event) => {
    event.preventDefault();
    let countryClicked = event.target.id
    document.getElementById(countryClicked).setAttribute("style", "fill:#FF0000");
    fetchCountryById(countryClicked);
});

let removeColorBtn = document.getElementById("removeColorBtn"); 

removeColorBtn.addEventListener('click', (event) => {  
    document.querySelectorAll("path")
        .forEach( x=> x.setAttribute("style","fill:#c0c0c0")); 
}); 

function fetchCountryById(id) {
    let url = 'http://restcountries.eu/rest/v1/alpha?codes=' + id;
    let country = document.getElementById("countryInfo");
    fetch(url)
            .then(handleHttpErrors)
            .then(data => {
                let newArray = data.map(x => `<tr><td>${x.name}</td><td>${x.capital}</td><td>${x.region}</td><td>${x.population}</td></tr>`);
                country.innerHTML =
                        `${newArray.join("")}`
            });
}



function handleHttpErrors(res) {
    if (!res.ok) {
        return Promise.reject({status: res.status, fullError: res.json()})
    }
    return res.json();
}