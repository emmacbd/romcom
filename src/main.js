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

window.addEventListener("load", showNewRandomCover)
saveButton.addEventListener("click", saveCover)
randomCover.addEventListener("click", showNewRandomCover)
makeYourOwnButton.addEventListener("click", showForm)
savedView.addEventListener("click", function() {
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
};

function viewSaved() {
  homeView.classList.toggle("hidden")
  savedSection.classList.toggle("hidden")
  showRandomButton.classList.toggle("hidden")
  saveButton.classList.toggle("hidden")
  homeButton.classList.toggle("hidden")
};

function viewHome() {
  homeView.classList.toggle("hidden")
  savedSection.classList.toggle("hidden")
  showRandomButton.classList.toggle("hidden")
  saveButton.classList.toggle("hidden")
  homeButton.classList.toggle("hidden")
};

function showForm() {
  formView.classList.toggle("hidden")
  homeView.classList.toggle("hidden")
  showRandomButton.classList.toggle("hidden")
  saveButton.classList.toggle("hidden")
  homeButton.classList.toggle("hidden")
};

function showNewRandomCover() {
  coverTitle.innerText = titles[getRandomIndex(titles)]
  coverImage.src = covers[getRandomIndex(covers)]
  tagLine1.innerText = descriptors[getRandomIndex(descriptors)]
  tagLine2.innerText = descriptors[getRandomIndex(descriptors)]
newRandomCover();
};

 function newRandomCover() {
   currentCover = new Cover(coverImage.src, coverTitle.innerText, tagLine1.innerText, tagLine2.innerText)
};

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
};
