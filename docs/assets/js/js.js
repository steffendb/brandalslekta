window.onload = function () {
  const navDetails = document.getElementById("navdetails");
  let navEl = document.createElement("nav");
  const chapters = [...document.querySelectorAll("h2")];
  const chapterlinks = chapters.forEach((element) => makeChapterLink(element));

  function makeChapterLink(element) {
    let a = document.createElement("a");
    a.innerHTML = element.innerHTML;
    a.href = "#" + element.id;
    a.addEventListener("click", closeNav);
    navEl.appendChild(a);
  }
  navDetails.appendChild(navEl);
  function closeNav() {
    navDetails.removeAttribute("open");
  }
};
