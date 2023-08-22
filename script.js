"use strict"
fetch('https://restcountries.com/v3.1/all')
  .then(res => res.json())
  .then(res => console.log(getLaguage(res,"English")));
function getLaguage(dataaa , countryLanguage){
  let result = dataaa.filter(item => item.languages?.eng === countryLanguage);
  return result; 
}