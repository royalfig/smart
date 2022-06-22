export class Saves {
  constructor(e) {
    this.id = (e && e.dataset.id) || null;
    this.title = (e && e.dataset.title) || null;
    this.items = () =>
      Saves.makeArray(JSON.parse(localStorage.getItem('saves')));
  }

  generateItem() {
    return {
      id: this.id,
      title: this.title,
      timestamp: new Date(),
      scrollPos: this.scrollStatus().scrollPos,
      progress: this.scrollStatus().progress,
    };
  }

  save() {
    // also need to update menu
    localStorage.setItem(
      'saves',
      JSON.stringify([this.generateItem(), ...this.items()]),
    );
    this.populateSavesMenu();
  }

  remove() {
    const items = [...this.items()];
    const itemIndex = items.findIndex((el) => this.id === el.id);
    items.splice(itemIndex, 1);
    console.log(itemIndex, items);
    localStorage.removeItem('saves');

    if (items.length) {
      localStorage.setItem('saves', JSON.stringify(items));
    }

    this.populateSavesMenu();
  }

  static makeArray(data) {
    if (!data) return [];
    return data.length ? data : [data];
  }

  scrollStatus() {
    if (!window.location.pathname.includes(this.id)) {
      return { scrollPos: '', progress: '' };
    }
    return {
      scrollPos: window.scrollY,
      progress: Math.round(
        (window.scrollY / document.documentElement.scrollHeight) * 100,
      ),
    };
  }

  identifySaves() {
    if (!this.items()) return;

    this.items().forEach((el) => {
      const { id } = el;
      const domEl = document.querySelectorAll(`button[data-id=${id}]`);
      if (domEl) {
        domEl.forEach((button) => button.classList.toggle('sm-love-toggle'));
      }
    });
  }

  isCurrentPageSaved() {
    const currentPage = window.location.pathname.replace('/', '');
    return this.items().find((item) => item.id === currentPage);
  }

  updateScrollPosition() {
    if (!this.items().length) return;
    console.log('update');
    // if (this.isCurrentPageSaved) {
    //   const { scrollPos, progress } = this.scrollStatus;
    //   this.isCurrentPageSaved.scrollPos = scrollPos;
    //   this.isCurrentPageSaved.progress = progress;

    //   // Need to find the item and update its scroll property
    //   const interval = setInterval(() => {
    //     this.save(this.isCurrentPageSaved);
    //   }, 500);
    // }
  }

  renderSavesMenu() {
    const template = this.items().map(
      (el) =>
        `<div><p><a href="/${el.id}">${el.title}</a></p><progress value="${el.progress}" max="100">${el.progress}%</div>`,
    );
    return template.join('');
  }

  populateSavesMenu() {
    const savesMenu = document.querySelector('.sm-overflow-articles');

    console.log(this.items());

    if (!this.items().length) {
      savesMenu.innerHTML =
        '<p>No articles saved yet. Hit the heart to get started!</p>';
      return;
    }
    savesMenu.innerHTML = this.renderSavesMenu();
  }

  init() {
    this.identifySaves();
    this.populateSavesMenu();
  }
}

export function save(e) {
  const savedItems = new Saves(e);

  const { id } = savedItems;
  const items = savedItems.items();

  if (!items.length) {
    savedItems.save();
    return;
  }

  if (items.find((el) => el.id === id)) {
    savedItems.remove();
  } else {
    savedItems.save();
  }
}
