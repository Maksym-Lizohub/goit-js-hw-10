export const toСreateСountryCard = country => {
  const { languages, flags, name, capital, population } = country;

  const listLang = Object.values(languages);

  return `<h1 style = "font-size: 60px" ><img src="${flags.svg}", alt="${
    name.official
  }", width = 60px, class="country-flag"> ${name.official}</h1> 
          <p style='font-size: 30px; font-weight:400'><span style='font-weight:700'>Capital: </span> ${capital}</p>
          <p style='font-size: 30px; font-weight:400'><span style='font-weight:700'>Population: </span> ${population}</p>
          <p style='font-size: 30px; font-weight:400'><span style='font-weight:700'>Languages: </span> ${listLang.join(
            ', '
          )}</p>`;
};

export const toСreateCountryList = countries => {
  return countries.map(toСreateCountryForCountryList).join('');
};

function toСreateCountryForCountryList(country) {
  return `<li><img src="${country.flags.svg}" alt="${country.name.official}" width = 60px class="country-flag"> <span class="country-name" style='font-size: 30px; font-weight:500'>${country.name.official}</span></li>`;
}
