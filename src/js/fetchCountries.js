export const fetchCountries = name => {
  const LINK = 'https://restcountries.com/v3.1/name/';
  const FILTER = 'name,capital,population,flags,languages';

  return fetch(`${LINK}${name}?fields=${FILTER}`).then(response => {
    if (!response.ok) {
      throw new Error(response.status);
    }
    return response.json();
  });
};
