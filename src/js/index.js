import axios from 'axios';
const KEY = '35105940-051708562a54e8fbc749fff56';

const refs = {
  form: document.querySelector('.search-form'),
  input: document.querySelector('.search-form__input'),
  btn: document.querySelector('.search-form__btn'),
};

async function fetchData(value) {
  try {
    return await axios.get(
      `https://pixabay.com/api/?key=${KEY}&q=${value}&image_type="photo"&orientation="horizontal"&safesearch="true"`
    );
  } catch {
    console.worn(new Error());
  }
}

const handlerSubmit = evt => {
  evt.preventDefault();
  fetchData(evt.currentTarget.searchQuery.value).then(({ data }) =>
    console.log(data.hits)
  );
};

refs.form.addEventListener('submit', handlerSubmit);
