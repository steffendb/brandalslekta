window.onload = chapterList;

function chapterList() {
    const chapters = [...document.querySelectorAll('h2')];
    console.log(chapters);
    console.log(chapters[1]);
}

