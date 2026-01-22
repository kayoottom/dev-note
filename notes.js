"use strict";
const titleInput = document.getElementById("title");
const textInput = document.getElementById("text");
const addButton = document.getElementById("add");
const notesContainer = document.getElementById("notes");
function addNote() {
    const title = titleInput.value.trim();
    const text = textInput.value.trim();
    if (!title || !text) {
        alert("Preencha todos os campos!");
        return;
    }
    const note = document.createElement("div");
    note.className = "note";
    note.innerHTML = `
    <h3>${title}</h3>
    <p>${text}</p>
  `;
    notesContainer.appendChild(note);
    titleInput.value = "";
    textInput.value = "";
}
addButton.addEventListener("click", addNote);
