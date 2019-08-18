// Show and hide search bar 
const searchBoxBtn = document.getElementById('st-search-button');
const searchBox = document.querySelector('.st-search-box');
const cancelBtn = document.querySelector('.st-cancel');
const searchBar = document.querySelector('.st-search-bar');

searchBoxBtn.addEventListener('click', showSearchBox);
cancelBtn.addEventListener('click', e => closeBox(e))

function showSearchBox() {
    searchBox.classList.add('st-search-box-max-height');
    searchBar.firstElementChild.focus();
    searchBox.addEventListener('click', e => {
        const searchElements = [];
        const searchBarChildren = searchBar.childNodes;
        searchBarChildren.forEach(e => searchElements.push(e))
        searchElements.push(searchBar);
        if (!searchElements.includes(e.target)) {
            searchBox.classList.remove('st-search-box-max-height');
        }
    })

    searchBox.addEventListener('keyup', e => {
        if (e.keyCode === 27) {
            searchBox.classList.remove('st-search-box-max-height');
        };
    })
}

function closeBox(e) {
    searchBox.classList.remove('st-search-box-max-height');
}