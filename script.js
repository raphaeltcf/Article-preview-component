const shareMobile = document.querySelector(".shares");

document.querySelector(".back-share").addEventListener("click", () => {
   let width = document.documentElement.clientWidth
  if (width >= 900) {
    const desk = document.querySelector(".share-desk");
    if (desk.classList.contains("active-desk")) {
      desk.classList.remove("active-desk");
    } else {
      desk.classList.add("active-desk");
    }
  } else {
      shareMobile.classList.add("active-mobile");
  }
});

document.querySelector(".back-shares").addEventListener("click", () => {
 shareMobile.classList.remove("active-mobile");
});
