export class Saves {
  constructor(e) {
    this.id = (e && e.dataset.id) || null;
    this.title = (e && e.dataset.title) || null;
    this.items = () =>
      Saves.makeArray(JSON.parse(localStorage.getItem('saves')));
    this.int = null;
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
    localStorage.setItem(
      'saves',
      JSON.stringify([this.generateItem(), ...this.items()]),
    );

    this.populateSavesMenu();
    this.updateScrollPosition();

    const els = document.querySelectorAll(`button[data-id=${this.id}]`);
    els.forEach((el) => {
      el.classList.add('sm-love-toggle');
    });
  }

  remove() {
    const items = [...this.items()];
    const itemIndex = items.findIndex((el) => this.id === el.id);
    items.splice(itemIndex, 1);
    localStorage.removeItem('saves');
    if (items.length) {
      localStorage.setItem('saves', JSON.stringify(items));
    }

    this.int = null;
    this.populateSavesMenu();

    const els = document.querySelectorAll(`button[data-id=${this.id}]`);
    els.forEach((el) => {
      el.classList.remove('sm-love-toggle');
    });
  }

  static makeArray(data) {
    if (!data) return [];
    return data.length ? data : [data];
  }

  scrollStatus() {
    if (this.isCurrentPageSaved() < 0) {
      return {
        scrollPos: null,
        progress: null,
      };
    }
    return {
      scrollPos: window.scrollY,
      progress: Math.round(
        (window.scrollY /
          (document.body.scrollHeight - document.body.clientHeight)) *
          100,
      ),
    };
  }

  identifySaves() {
    if (!this.items()) return;

    this.items().forEach((el) => {
      const { id } = el;
      const domEl = document.querySelectorAll(`button[data-id=${id}]`);
      if (domEl) {
        domEl.forEach((button) => button.classList.add('sm-love-toggle'));
      }
    });
  }

  isCurrentPageSaved() {
    const currentPage = window.location.pathname.replace(/\//g, '');
    return this.items().findIndex((item) => item.id === currentPage);
  }

  step() {
    const itemIndex = this.isCurrentPageSaved();
    if (itemIndex < 0) {
      return;
    }

    const items = this.items();
    items[itemIndex].progress = this.scrollStatus().progress;
    items[itemIndex].scrollPos = this.scrollStatus().scrollPos;
    localStorage.removeItem('saves');
    localStorage.setItem('saves', JSON.stringify(items));
    this.populateSavesMenu();

    setTimeout(() => {
      window.requestAnimationFrame(this.step.bind(this));
    }, 1000);
  }

  updateScrollPosition() {
    const items = this.items();
    if (!items.length) return;
    const itemIndex = this.isCurrentPageSaved();

    if (itemIndex < 0) {
      return;
    }

    window.requestAnimationFrame(this.step.bind(this));
  }

  scrollToPos() {
    if (this.isCurrentPageSaved() > -1) {
      const items = this.items();
      window.scrollTo({
        top: items[this.isCurrentPageSaved()].scrollPos,
        behavior: 'smooth',
      });
    }
  }

  renderSavesMenu() {
    const template = this.items().map(
      (el) =>
        `<div class="sm-saves" style="background-image: linear-gradient(to right, hsla(
          var(--primary-h) var(--saturation) var(--lightness) / ${
            el.progress ? 0.35 : 0.15
          }
        ) ${el.progress ? el.progress - 10 : 50}%, hsla(
          var(--primary-h) var(--saturation) var(--lightness) / 0.15
        ) ${el.progress ? el.progress + 10 : 50}%">
            <div class="sm-saves-meta">
                <div>
                    <p class="sm-saves-title"><a href="/${el.id}">${
          el.title
        }</a></p>
                    <p class="sm-saves-date">Saved on ${new Intl.DateTimeFormat().format(
                      new Date(el.timestamp),
                    )}</p>
                </div>
                <button class="sm-circle-icon-button sm-love-button sm-love-toggle" data-id="${
                  el.id
                }" data-title="${el.title}" aria-label="Remove ${
          el.title
        } from favorites">
                <svg class="sm-heart-outline-icon"><use href="#sm-heart-outline-icon"></use></svg>
                <svg class="sm-heart-fill-icon"><use href="#sm-heart-fill-icon"></use></svg>
                </button>
            </div>
        </div>`,
    );
    return template.join('');
  }

  populateSavesMenu() {
    const savesMenu = document.querySelector('.sm-overflow-articles');

    if (!this.items().length) {
      const noSavesText =
        '<p>No articles saved yet. Hit the heart to get started!</p>';
      savesMenu.innerHTML = noSavesText;
      return;
    }
    savesMenu.innerHTML = this.renderSavesMenu();
  }

  init() {
    this.identifySaves();
    this.populateSavesMenu();
    this.scrollToPos();
    this.updateScrollPosition();
  }
}

export function save(e) {
  const savedItems = new Saves(e);

  const items = savedItems.items();

  if (!items.length) {
    savedItems.save();
    return;
  }

  const { id } = savedItems;

  if (items.find((el) => el.id === id)) {
    savedItems.remove();
  } else {
    savedItems.save();
  }
}
