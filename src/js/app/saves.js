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
    localStorage.removeItem('saves');

    if (items.length) {
      localStorage.setItem('saves', JSON.stringify(items));
    }

    const els = document.querySelectorAll(`button[data-id=${this.id}]`);
    console.log(els);
    els.forEach((el) => el.classList.toggle('sm-love-toggle'));

    this.populateSavesMenu();
  }

  static makeArray(data) {
    if (!data) return [];
    return data.length ? data : [data];
  }

  scrollStatus() {
    if (this.isCurrentPageSaved()) {
      return {
        scrollPos: window.scrollY,
        progress: Math.round(
          (window.scrollY /
            (document.body.scrollHeight - document.body.clientHeight)) *
            100,
        ),
      };
    }

    return {
      scrollPos: null,
      progress: null,
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
    const currentPage = window.location.pathname.replace(/\//g, '');
    return this.items().find((item) => item.id === currentPage);
  }

  updateScrollPosition() {
    if (!this.items().length) return;

    if (!this.isCurrentPageSaved()) {
      console.log('item is not saved');
      return;
    }

    const int = setInterval(() => console.log(this.scrollStatus()), 1000);
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
        `<div class="sm-saves">
            <progress value="${el.progress}" max="100">${
          el.progress
        }%</progress>
            <div class="sm-saves-meta">
                <div>
                    <p class="sm-saves-title"><a href="/${el.id}">${
          el.title
        }</a></p>
                    <p class="sm-saves-date">${new Intl.DateTimeFormat().format(
                      new Date(el.timestamp),
                    )}</p>
                </div>
                <button class="sm-circle-icon-button sm-love-button sm-love-toggle" data-id="${
                  el.id
                }" data-title="${el.title}">
                <span class="sm-heart-outline-icon">
                <svg><use href="#sm-heart-outline-icon"></use></svg>
                </span>
                <span class="sm-heart-fill-icon">
                <svg><use href="#sm-heart-fill-icon"></use></svg>
                </span>
                </button>
            </div>
        </div>`,
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
    this.updateScrollPosition();
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
