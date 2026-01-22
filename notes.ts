const titleInput = document.getElementById("title") as HTMLInputElement;
const textInput = document.getElementById("text") as HTMLTextAreaElement;
const addButton = document.getElementById("add") as HTMLButtonElement;
const notesContainer = document.getElementById("notes") as HTMLDivElement;

function addNote(): void {
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
