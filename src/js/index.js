import axios from 'axios';
const KEY = '35105940-051708562a54e8fbc749fff56';

const refs = {
  form: document.querySelector('.search-form'),
  input: document.querySelector('.search-form__input'),
  btn: document.querySelector('.search-form__btn'),
  galeryEl: document.querySelector('.gallery'),
};

async function fetchData(value) {
  try {
    return await axios.get(
      `https://pixabay.com/api/?key=${KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true`
    );
  } catch {
    console.worn(new Error());
  }
}

const handlerSubmit = evt => {
  evt.preventDefault();
  refs.galeryEl.innerHTML = '';

  fetchData(evt.currentTarget.searchQuery.value).then(({ data }) => {
    data.hits.map(el => {
      refs.galeryEl.insertAdjacentHTML('beforeend', markupCard(el));
    });
  });
};

function markupCard({ webformatURL, tags, likes, views, comments, downloads }) {
  return `
  <div class="photo-card">
  <img src="${webformatURL}" alt="${tags}" loading="lazy" height="200px"/>
  <div class="info">
    <p class="info-item">
      <b>likes</b>
      ${likes}
    </p>
    <p class="info-item">
      <b>views</b>
      ${views}
    </p>
    <p class="info-item">
      <b>comments</b>
      ${comments}
    </p>
    <p class="info-item">
      <b>downloads</b>
      ${downloads}
    </p>
  </div>
</div>
  `;
}
refs.form.addEventListener('submit', handlerSubmit);
