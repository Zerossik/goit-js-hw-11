import axios from 'axios';
import { Search } from './settingsSearch';

const options = {
  key: '35105940-051708562a54e8fbc749fff56',
  image_type: 'photo',
  orientation: 'horizontal',
  safesearch: true,
};

const refs = {
  form: document.querySelector('.search-form'),
  input: document.querySelector('.search-form__input'),
  btn: document.querySelector('.search-form__btn'),
};

async function fetchData(value) {
  return await axios.get(
    `https://pixabay.com/api/?key=${options.key}&q=${value}`,
    options
  );
}

const handlerSubmit = evt => {
  evt.preventDefault();
  console.log(evt);
};

async function fetchData(value) {
  return await axios.get(
    `https://pixabay.com/api/?key=${options.key}&q=${value}`
  );
}

refs.form.addEventListener('submit', handlerSubmit);
