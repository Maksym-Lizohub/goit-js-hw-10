import './css/styles.css';
import { fetchCountries } from './js/fetchCountries';
import { toСreateСountryCard, toСreateCountryList } from './js/createDom';

import { Notify } from 'notiflix/build/notiflix-notify-aio';

const debounce = require('lodash.debounce');

const DEBOUNCE_DELAY = 300;

const refs = {
  input: document.querySelector('#search-box'),
  countryList: document.querySelector('.country-list'),
  countryCard: document.querySelector('.country-info'),
};

function onInput(e) {
  const inputCountryName = e.target.value.trim();

  if (inputCountryName === '') {
    return;
  }

  fetchCountries(inputCountryName)
    .then(countries => {
      clearData();
      if (countries.length > 10) {
        Notify.info(
          'Too many matches found. Please enter a more specific name.'
        );
        return;
      }
      if (countries.length === 1) {
        refs.countryCard.innerHTML = toСreateСountryCard(countries[0]);
        return;
      }

      refs.countryList.innerHTML = toСreateCountryList(countries);
    })
    .catch(error => {
      clearData();
      Notify.failure('Oops, there is no country with that name');
    });
}

function clearData() {
  refs.countryCard.innerHTML = '';
  refs.countryList.innerHTML = '';
}

refs.input.addEventListener('input', debounce(onInput, DEBOUNCE_DELAY));
