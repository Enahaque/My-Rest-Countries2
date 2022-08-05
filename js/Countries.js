// function declare
const loadCountries = () =>{
    const url = 'https://restcountries.com/v3.1/all';
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data)); 
        .then(data => displayCountries(data)); 
};

loadCountries();
// another function
const displayCountries = countries =>{
    console.log(countries[5]);
    // veriable declare
    const CountriesHTML = countries.map( country =>getCountriesHTML(country));
        // console.log(CountriesHTML[0]);
        const container = document.getElementById('countries');
        container.innerHTML = CountriesHTML.join(' ');

};
// another function
// const getCountriesHTML = country =>{
//     return`
//         <div class="country">
//             <h1>${country.name.common}</h1>
//             <img src=${country.flags.png}></img>
//             <h3>${country.capital}</h3>
            
           
//         </div>
//     `
// };

// const getCountriesHTML = (country) =>{
//     const{name,flags,capital} = country;
//     return`
//         <div class="country">
//             <h1>${name.common}</h1>
//             <img src=${flags.png}></img>
//             <h3>${capital}</h3>
            
           
//         </div>
//     `
// };

const getCountriesHTML =({name,flags,capital})=>{
    // const{name,flags,capital}=country;
    return`
        <div class="country">
            <h1>${name.common}</h1>
            <img src=${flags.png}></img>
            <h3>${capital}</h3>
            
           
        </div>
    `
};

