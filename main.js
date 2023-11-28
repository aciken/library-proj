const popUp = document.querySelector('.pop-up');
const close = document.querySelector('.x-btn');
const submitBtn = document.querySelector('.submit-btn');
const bookName = document.querySelector('.book-name');
const authorName = document.querySelector('.writer-name');
const pageNumber = document.querySelector('.page-numbers');
const cardWrapper = document.querySelector('.book-part');
const blackBackground = document.querySelector('.black-background');

const createAddBtn = () =>{
    const addWraper = document.createElement('div');
    addWraper.classList.add('add-card');
    cardWrapper.appendChild(addWraper);

    const addAnchor = document.createElement('a');
    addAnchor.classList.add('add-btn');
    addWraper.appendChild(addAnchor);

    const addText = document.createElement('p');
    addText.textContent = 'Add a Book';
    addAnchor.appendChild(addText);
}

const createBookCard = (name, author, pages) =>{
    const addWrapper = document.createElement('div');
    addWrapper.classList.add('book-card');
    cardWrapper.appendChild(addWrapper);

    const bookName = document.createElement('h1');
    bookName.textContent = name;
    addWrapper.appendChild(bookName);

    const infoPart = document.createElement('div');
    infoPart.classList.add('info');
    addWrapper.appendChild(infoPart);

    const authorInfo = document.createElement('p');
    authorInfo.textContent = `Author: ${author}`;
    infoPart.appendChild(authorInfo);

    const pageInfo = document.createElement('p');
    pageInfo.textContent = `Number of Pages: ${pages}`;
    infoPart.appendChild(pageInfo);

    const readState = document.createElement('div');
    readState.classList.add('state');
    readState.textContent = "NOT READ";
    addWrapper.appendChild(readState);
}

createAddBtn();

const addBtn = document.querySelector('.add-card');


let allCards = [];
const myLibrary = [];

addBtn.addEventListener('click', () =>{
    popUp.classList.toggle('clicked');
    toggleCards()


})

close.addEventListener('click', () =>{
    popUp.classList.toggle('clicked');
    toggleCards()

})

submitBtn.addEventListener('click', (event) => {
    if (popUp.checkValidity()) {
        myLibrary.push(new Book(bookName.value, authorName.value, pageNumber.value));
        console.log(myLibrary);
        console.log('valid');
        popUp.classList.remove('clicked');
        createBookCard(bookName.value, authorName.value, pageNumber.value);
        disableCards();
        readBtn();


        bookName.value = '';
        authorName.value = '';
        pageNumber.value = '';
    } else {
        console.log('invalid');
    }
    event.preventDefault();
});





const readBtn = () =>{
    
    const newCard = document.querySelector('.book-card:last-child');

    newCard.addEventListener('click', (e) => {
        console.log(newCard);
        console.log(e.target.classList.value);
        if (e.target.classList.value === 'state') {
            e.target.classList.add('read');
            e.target.textContent = 'READ';
            console.log(e.target.classList.value);
        } else if (e.target.classList.value === 'state read') {
            e.target.classList.remove('read');
            e.target.textContent = 'NOT READ';
            console.log(e.target.classList.value);
        }
    });
}

const toggleCards = () =>{
    blackBackground.classList.toggle('clicked');
    document.addEventListener('click', (e) =>{
        if(e.target.classList.value === 'black-background clicked'){
            popUp.classList.remove('clicked');
            blackBackground.classList.remove('clicked');
        }
    })
};

const disableCards = () =>{
    blackBackground.classList.remove('clicked');

    
}








function Book(Name, writer, pages){
    this.Name = Name;
    this.writer = writer;
    this.pages = pages;
    this.read = false;
}






