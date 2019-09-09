import store from './store/store';
import { addNote, removeNote } from './actions/notes';
import { VISIBILITY_FILTERS, setVisibility, SHOW_VALID } from './actions/visibility';

//  HTML references
let notesList = document.getElementById('notes');
let addNoteForm = document.getElementById('add-note');
let newNoteTitle = addNoteForm['title'];
let newNoteContent = addNoteForm['content'];
let deleteSelector = 'ul#notes li button';
let filterContainer = document.getElementById('filter-container');

// Handle Changes
function deleteNote(index) {
    store.dispatch(removeNote(index));
}

function getVisibleNotes(notes, visibility=SHOW_VALID) {
    switch (visibility) {
        case VISIBILITY_FILTERS.SHOW_ALL:
            return notes
        case VISIBILITY_FILTERS.SHOW_VALID:
            return notes.filter(note => note.valid)
        case VISIBILITY_FILTERS.SHOW_DONE:
            return notes.filter( note => !note.valid)
        default:
            throw new Error(`Visibility error: ${visibility}`)
    }
}

function renderNotes() {
    let data = store.getState();
    console.log(data);

    // dumb to be in here now, but it's going to move with React anyways
    filterContainer.innerHTML = `
        <button data-filter="${VISIBILITY_FILTERS.SHOW_VALID}">Valid</button>
        <button data-filter="${VISIBILITY_FILTERS.SHOW_ALL}">All</button>
        <button data-filter="${VISIBILITY_FILTERS.SHOW_DONE}">Done</button>
    `
    setFilterListeners();

    notesList.innerHTML = '';
    let notes = getVisibleNotes(data.notes, data.visibility);
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
    store.dispatch(addNote({ title, content }));

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

function setFilterListeners() {
    let buttons = filterContainer.querySelectorAll('button');

    for (let button of buttons) {
        button.addEventListener('click', () => {
            store.dispatch(setVisibility(button.getAttribute('data-filter')));
        });
    }
} 

// do it
renderNotes();
store.subscribe(() => {
    renderNotes();
});
