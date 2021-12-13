var addNewPanel, newUrl, newColor, paste, addButtonInPanel, add, tile, newName, clear
var s = function () {
	return document.querySelector(...arguments)
}

function init() {
	if (window.localStorage.getItem("ready")) {
		load()
	}
	else{window.localStorage.setItem("ready", true)
		first()}
}

function first() {
	save()
}

function save() {
	window.localStorage.setItem("rawTileHtml", tile.innerHTML)
}

function load() {
	tile.innerHTML = window.localStorage.getItem("rawTileHtml")
}

addNewPanel = s("#addNewPanel")
newUrl = s("#newUrl")
newColor = s("#theColor")
paste = s("#pasteButton")
addButtonInPanel = s("#addButtonInPanel")
add = s("#add")
newName = s("#newName")

add.onclick = () => (addNewPanel.style.display = "flex")

tile = s("#tile")
addButtonInPanel.onclick = () => {
	let newA = document.createElement("a")
	newA.href = newUrl.value
	newA.innerHTML = newName.value
	newA.style.backgroundColor = newColor.value
	tile.appendChild(newA)
	addNewPanel.style.display = "none"
	save()
}

paste.onclick = (e)=>{
navigator.clipboard.readText()
  .then(text => {
  	newUrl.value = text
	  })
  .catch(err => {
    console.error('Failed to read clipboard contents: ', err);
  });
}
// init()
load()


newUrl.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    addButtonInPanel.click();
  }
});

newName.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    addButtonInPanel.click();
  }
});


clear = s('#clear')
clear.onclick = ()=>{
	window.localStorage.clear()
	location.reload()
}