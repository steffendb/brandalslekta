window.onload = chapterList;

function chapterList() {
    const chapterNav = document.getElementById('chapternav');
    const chapters = [...document.querySelectorAll('h2')];
    chapters.forEach(element => makeChapterLink(element));
}

function makeChapterLink(element) {
    let item = document.createElement("a");
    item.innerHTML = element.innerHTML;
    item.href = element.attr('id');
    console.log(item);
}