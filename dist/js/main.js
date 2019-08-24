// dEV 
const dev = document.querySelector('.dev');

function viewPort() {
    if (window.innerWidth < 640) {
        dev.textContent = `${window.innerWidth}px, PHONE`;
    } else if (window.innerWidth > 639 && window.innerWidth < 1024) {
        dev.textContent = `${window.innerWidth}px, TABLET`;
    } else if (window.innerWidth > 1023 && window.innerWidth < 1280) {
        dev.textContent = `${window.innerWidth}px, LAPTOP`;
    } else {
        dev.textContent = `${window.innerWidth}px, DESKTOP`;
    }
}

viewPort();

window.addEventListener('resize', viewPort);

// Show and hide search bar 
const searchBoxBtn = document.getElementById('st-search-button');
const searchBox = document.querySelector('.st-search-box');
const cancelBtn = document.querySelector('.st-cancel');
const searchBar = document.querySelector('.st-search-bar');

searchBoxBtn.addEventListener('click', function () {
    showSearchBox(transform)
});
cancelBtn.addEventListener('click', e => closeBox(e))

function showSearchBox(cb) {
    // searchBox.classList.add('st-search-box-max-height');
    searchBox.style.display = "block";
    let op = 0.1;
    let timer = setInterval(() => {
        if (op >= 1) {
            console.log('op');
            cb()
            clearInterval(timer);
        } else {
            op += 0.05;
            searchBox.style.opacity = op;
        }
    }, 10);


    // searchBox.style.display = "block";
    // searchBox.style.opacity = "1";
    searchBar.firstElementChild.focus();
    searchBox.addEventListener('click', e => {
        const searchElements = [];
        const searchBarChildren = searchBar.childNodes;
        searchBarChildren.forEach(e => searchElements.push(e))
        searchElements.push(searchBar);
        if (!searchElements.includes(e.target)) {
            searchBox.style.display = "none";
            searchBox.style.opacity = "0";
            searchBar.style.transform = "translateY(-100%)"
        }
    })

    searchBox.addEventListener('keyup', e => {
        if (e.keyCode === 27) {
            searchBox.style.display = "none";
            searchBox.style.opacity = "0";
            searchBar.style.transform = "translateY(-100%)"

        };
    })
}



function transform() {
    console.log('trans');
    searchBar.style.transform = "translateY(0%)";
}

function closeBox(e) {
    searchBox.style.display = "none";
    searchBox.style.opacity = "0";
    searchBar.style.transform = "translateY(-100%)";
}

// Add Grid styles
const gridContainers = document.querySelectorAll('.st-grid-container-home');
console.log(gridContainers);
gridContainers.forEach(element => {
    const gridItems = element.querySelectorAll('.st-home-post');
    console.log(gridItems.length)
    element.classList.add(`st-grid-container-home-${gridItems.length}`);
})
