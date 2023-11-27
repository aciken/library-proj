const popUp = document.querySelector('.pop-up');
const close = document.querySelector('.x-btn');
const submitBtn = document.querySelector('.submit-btn');
const bookName = document.querySelector('.book-name');
const authorName = document.querySelector('.writer-name');
const pageNumber = document.querySelector('.page-numbers');
const cardWrapper = document.querySelector('.book-part')

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



const myLibrary = [];

addBtn.addEventListener('click', () =>{
    popUp.classList.toggle('clicked');
    if(cardWrapper.lastChild.classList.value !== 'add-card'){
        bookCard = document.querySelectorAll('.book-card');
        bookCard.forEach(element => {
            element.classList.toggle('clicked');
        });
    }


})

close.addEventListener('click', () =>{
    popUp.classList.toggle('clicked');
    if(cardWrapper.lastChild.classList.value !== 'add-card'){
        bookCard = document.querySelectorAll('.book-card');
        bookCard.forEach(element => {
            element.classList.toggle('clicked');
        });
    }

})

submitBtn.addEventListener('click', (event) =>{
    if(popUp.checkValidity()){
        myLibrary.push(new Book(bookName.value, authorName.value, pageNumber.value))
        console.log(myLibrary)
        console.log('valid');
       popUp.classList.remove('clicked');
       if(cardWrapper.lastChild.classList.value !== 'add-card'){
        bookCard = document.querySelectorAll('.book-card');
        bookCard.forEach(element => {
            element.classList.remove('clicked');
        });
    }

       createBookCard(bookName.value, authorName.value, pageNumber.value);

       bookName.value = '';
       authorName.value = '';
       pageNumber.value = '';


    } else {
        console.log('invalid')
    }
    event.preventDefault();
})

if(cardWrapper.classList.lastChild !== 'add-card'){
    const readState = document.querySelectorAll('.state');
    readState.forEach(element =>{
        console.log(element)
        element.addEventListener('click', (e) =>{
            console.log(e.target.classList)
        })
    })
}












function Book(Name, writer, pages){
    this.Name = Name;
    this.writer = writer;
    this.pages = pages;
    this.read = false;
}






