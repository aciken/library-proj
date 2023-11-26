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

const createBookCard = () =>{
    
}

createAddBtn();

const addBtn = document.querySelector('.add-card');


const myLibrary = [];

addBtn.addEventListener('click', () =>{
    popUp.classList.toggle('clicked')
})

close.addEventListener('click', () =>{
    popUp.classList.toggle('clicked');
})

submitBtn.addEventListener('click', (event) =>{
    if(popUp.checkValidity()){
        myLibrary.push(new Book(bookName.value, authorName.value, pageNumber.value))
        console.log(myLibrary)
        console.log('valid');
       popUp.classList.remove('clicked');
       bookName.value = '';
       authorName.value = '';
       pageNumber.value = '';
    } else {
        console.log('invalid')
    }
    event.preventDefault();
})












function Book(Name, writer, pages){
    this.Name = Name;
    this.writer = writer;
    this.pages = pages;
    this.read = false;
}






