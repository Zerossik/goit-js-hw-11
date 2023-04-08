const count = 1;

class Search {
  pages;
  constructor(value) {
    this.pages = value;
  }
  get page() {
    return this.pages;
  }

  set page(newValue) {
    this.pages = newValue;
  }
}
const loadMore = new Search(count);
// loadMore.page += 1;
console.log(loadMore.page);
