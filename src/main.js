import store from './store/store';
import { addNote, removeNote } from './actions/notes';

//  HTML references
let notesList = document.getElementById('notes');
let addNoteForm = document.getElementById('add-note');
let newNoteTitle = addNoteForm['title'];
let newNoteContent = addNoteForm['content'];
let deleteSelector = 'ul#notes li button';

// Handle Changes
function deleteNote(index) {
    store.dispatch(removeNote(index));
}

function renderNotes() {
    notesList.innerHTML = '';
    let data = store.getState();
    let notes = data.notes;
    notes.map((note, index) => {
        let noteElem = `
            <li>
                <b>${note.title}</b><button data-index="${index}">X</button>
                <br />
                <span>${note.content}</span>
            </li>
        `;
        notesList.innerHTML += noteElem;
    });

    setDeleteListeners();
}

// EventListeners
addNoteForm.addEventListener('submit', (e) => {
    e.preventDefault();

    let title = newNoteTitle.value;
    let content = newNoteContent.value;
    store.dispatch(addNote(title, content));

    newNoteTitle.value = '';
    newNoteContent.value = '';
}); 

function setDeleteListeners() {
    let buttons = document.querySelectorAll(deleteSelector);

    for (let button of buttons) {
        button.addEventListener('click', () => {
            deleteNote(button.getAttribute('data-index'));
        });
    }
} 

// do it
renderNotes();
store.subscribe(() => {
    renderNotes();
});
