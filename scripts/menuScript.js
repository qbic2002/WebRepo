let startTime = Date.now();

// (function count() {
//     startTime = Date.now();
// })()

function printLoadTime() {
    const time = Date.now();
    document.getElementsByClassName('footer_div')[0].innerHTML += "Load time: " + (time - startTime).toString() + " ms";
}

function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

function selectMenu(menu, menuElem, elemToScroll) {
    for (let i = 0; i < menu.children.length; i++) {
        let elem = menu.children[i];
        if (elem === menuElem) {
            elem.children[0].style.background = 'chartreuse';
        } else {
            elem.children[0].style.background = '';
        }
    }

    elemToScroll.scrollIntoView();
}

function reset(elem) {
    elem.children[0].style.background = '';
}

function nextJoke() {
    jokeArea = document.getElementById('rand_anek');
    loadingGif = document.getElementById('loading_gif');

    jokeArea.style.display = "none"
    loadingGif.style.display = "block"

    jokeArea.innerText = 'Штука грузится...(это не шутка)';
    fetch('https://geek-jokes.sameerkumar.website/api?format=json')
        .then(response => response.json())
        .then(json => {
            jokeArea.innerText = json.joke
            loadingGif.style.display = "none"
            jokeArea.style.display = "block"
        }, () => jokeArea.innerText = "Шутки кончились")
}