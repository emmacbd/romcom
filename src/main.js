var savedCovers = [];
var currentCover;
var coverImage = document.querySelector(".cover-image");
var coverTitle = document.querySelector(".cover-title");
var tagLine1 = document.querySelector(".tagline-1");
var tagLine2 = document.querySelector(".tagline-2");
var randomCover = document.querySelector(".random-cover-button")
var makeYourOwnButton = document.querySelector(".make-new-button")
var formView = document.querySelector(".form-view")
var homeView = document.querySelector(".main-cover")
var showRandomButton = document.querySelector("#random-cover-button")
var saveButton = document.querySelector(".save-cover-button")
var homeButton = document.querySelector(".home-button")
var savedView = document.querySelector(".view-saved-button")
var savedSection = document.querySelector(".saved-view")
var makeBookButton = document.querySelector(".create-new-book-button")
var customCover = document.querySelector("#cover")
var customTitle = document.querySelector("#title")
var customTagLine1 = document.querySelector("#descriptor1")
var customTagLine2 = document.querySelector("#descriptor2")
var grid = document.querySelector(".saved-covers-section")

window.addEventListener("load",getRandomCover);
saveButton.addEventListener("click", saveCover);
randomCover.addEventListener("click", getRandomCover);
makeYourOwnButton.addEventListener("click", showForm)
savedView.addEventListener("click", ()  => {
  viewSaved();
  showGrid();
});

homeButton.addEventListener("click", viewHome)
makeBookButton.addEventListener("click", function(event) {
  event.preventDefault();
  makeBook();
});

grid.addEventListener("dblclick", function(event) {
  deleteCover();
});

function deleteCover() {
  for (var i = 0; i < savedCovers.length; i++) {
      if (savedCovers[i].id.toString() === event.target.parentNode.id.toString()) {
       savedCovers.splice(i, 1);
       }
     };
  showGrid();
};

function showGrid() {
  var htmlElem = '';

  for (var i = 0; i < savedCovers.length; i++) {
   htmlElem += `
    <section id="${savedCovers[i].id}" class="mini-cover">
    <img class="cover-image" src="${savedCovers[i].cover}" alt="images">
    <h2 class="cover-title"> ${savedCovers[i].title}</h2>
    <h3 class="tagline"> A tale of <span class="tagline-1"> ${savedCovers[i].tagline1}</span> and <span class="tagline-2"> ${savedCovers[i].tagline2}</span></h3>
    </section>`

   grid.innerHTML = htmlElem;
 }
};

function saveCover() {
  if (!savedCovers.includes(currentCover)) {
    savedCovers.push(currentCover)
 }
};

function makeBook() {
  viewHome();
  storeBook();
  showForm();
  viewSaved();
  coverTitle.innerText = customTitle.value;
  coverImage.src = customCover.value;
  tagLine1.innerText = customTagLine1.value;
  tagLine2.innerText = customTagLine2.value;
  currentCover = new Cover(coverImage.src, coverTitle.innerText, tagLine1.innerText, tagLine2.innerText)
};

function storeBook() {
  currentCover = new Cover(coverImage.src, coverTitle.innerText, tagLine1.innerText, tagLine2.innerText)
  titles.push(customTitle.value);
  covers.push(customCover.value);
  descriptors.push(customTagLine1.value, customTagLine2.value);

  showCover();
};

function viewSaved() {
  homeView.classList.add("hidden")
  savedSection.classList.remove("hidden")
  showRandomButton.classList.add("hidden")
  saveButton.classList.add("hidden")
  homeButton.classList.remove("hidden")
  formView.classList.add("hidden")
};

function viewHome() {
  homeView.classList.remove("hidden")
  savedSection.classList.add("hidden")
  showRandomButton.classList.remove("hidden")
  saveButton.classList.remove("hidden")
  homeButton.classList.add("hidden")
};

function showForm() {
  formView.classList.remove("hidden")
  homeView.classList.add("hidden")
  showRandomButton.classList.add("hidden")
  saveButton.classList.add("hidden")
  homeButton.classList.remove("hidden")
  savedSection.classList.add("hidden")
};

function showCover() {
   coverTitle.innerText = currentCover.title;
   coverImage.src = currentCover.cover;
   tagLine1.innerText = currentCover.tagline1;
   tagLine2.innerText = currentCover.tagline2;
};

function getRandomCover() {
  currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)])

  showCover();
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
