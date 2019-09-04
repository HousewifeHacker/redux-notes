data = {
    notes: [
        {
            title: 'Note 1 Title',
            content: 'Note 1 Content'
        },
        {
            title: 'Note 2 Title',
            content: 'Note 2 Content'
        },
    ]
}

//  HTML references
let notesList = document.getElementById('notes');
let addNoteForm = document.getElementById('add-note');
let newNoteTitle = addNoteForm['title'];
let newNoteContent = addNoteForm['content'];
let deleteSelector = 'ul#notes li button';

// Handle Changes
function deleteNote(index) {
    console.log(index);
}

function renderNotes(data) {
    notesList.innerHTML = '';
    notes = data.notes;
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
function setDeleteListeners() {
    let buttons = document.querySelectorAll(deleteSelector);

    for (let button of buttons) {
        button.addEventListener('click', () => {
            deleteNote(button.getAttribute('data-index'));
        });
    }
}

// do it
renderNotes(data);
