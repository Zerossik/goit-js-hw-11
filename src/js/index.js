import axios from 'axios';
import { Notify } from 'notiflix';

const KEY = '35105940-051708562a54e8fbc749fff56';

const refs = {
  form: document.querySelector('.search-form'),
  input: document.querySelector('.search-form__input'),
  btn: document.querySelector('.search-form__btn'),
  galeryEl: document.querySelector('.gallery'),
  loadMore: document.querySelector('.load-more'),
};

async function fetchData(value) {
  try {
    return await axios.get(
      `https://pixabay.com/api/?key=${KEY}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40`
    );
  } catch {
    console.worn(new Error());
  }
}

const handlerSubmit = evt => {
  evt.preventDefault();
  refs.galeryEl.innerHTML = '';
  refs.loadMore.classList.add('hidden');

  fetchData(evt.currentTarget.searchQuery.value)
    .then(({ data }) => {
      if (data.hits.length === 0) {
        Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
      } else if (data.hits.length > data.totalHits) {
        Notify.failure(
          `"We're sorry, but you've reached the end of search results."`
        );
      } else {
        data.hits.map(el => {
          refs.galeryEl.insertAdjacentHTML('afterbegin', markupCard(el));
        });
      }
      return data;
    })
    .then(data => {
      if (data.hits.length >= 1) {
        refs.loadMore.classList.remove('hidden');
      }
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
