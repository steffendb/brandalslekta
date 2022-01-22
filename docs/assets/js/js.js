window.onload = chapterList;

function chapterList() {
    const chapterNav = document.getElementById('chapternav');
    const chapters = [...document.querySelectorAll('h2')];
    chapters.forEach(element => makeChapterLink(element, chapterNav));
}

function makeChapterLink(element,chapterNav) {
    let item = document.createElement("a");
    item.innerHTML = element.innerHTML;
    chapterNav.appendChild(item);
}