
let myLibrary = [
    {   id:Math.random(),
        title:'Crime and Punishment',
        author:'Dostoevsky',
        noOfPages:400,
        isCompleted:false
    }
];

displayBooks()

function displayBooks(){
    if(myLibrary.length!==0){
        myLibrary.forEach((book)=>{
            createBook(book);
        })
    }
}

function Book(title,author,noOfPages,isCompleted){
    this.id =Math.random();
    this.title =title,
    this.author=author,
    this.noOfPages=noOfPages,
    this.isCompleted=isCompleted
}

function addBookToLibrary(){
    let title= document.getElementById('title').value
    let author=document.getElementById('author').value
    let noOfPages=document.getElementById('pages-number').value
    let isCompleted=document.getElementById('completed').checked
    if(title!==''&author!==''&noOfPages>=10){
        let myBook = new Book(title,author,noOfPages,isCompleted)
        myLibrary.push(myBook);
        createBook(myBook);
      
    }
 

 
}

function createBook(book){
        const card = document.createElement('div')
        card.classList.add('card')

        const cardBody =document.createElement('div')
        cardBody.classList.add('card-body')

        const id=document.createElement('p')
        id.textContent=book.id
        id.style.visibility='hidden'
        id.setAttribute('id', 'bookId')

        const title = document.createElement('h5')
        const titleDiv = document.createElement('div')
        titleDiv.setAttribute('id','titleDiv')
        titleDiv.appendChild(title)
        title.classList.add('card-title')
        title.textContent = book.title

        const author = document.createElement('h6')
        author.classList.add('card-text')
        author.textContent = 'by ' +book.author

        const noOfPages = document.createElement('p')
        noOfPages.classList.add('card-text')
        noOfPages.textContent = book.noOfPages +' pages'

        const isCompleted = document.createElement('p')
        isCompleted.classList.add('card-text')
        if (book.isCompleted===true){
            isCompleted.textContent = 'Read'
            isCompleted.classList.add('green')
        }
        else if(book.isCompleted===false){
            isCompleted.textContent='Not Read Yet'
            isCompleted.classList.add('red')

        }

        const editBtn = document.createElement('button')
        editBtn.innerText = 'Edit Status'
        editBtn.classList.add('btn')
        editBtn.classList.add('card-btns')


        const removeBtn = document.createElement('button')
        removeBtn.innerText= 'Remove'
        removeBtn.classList.add('btn')
        removeBtn.classList.add('card-btns')


        cardBody.appendChild(id)
        cardBody.appendChild(titleDiv)
        cardBody.appendChild(author)
        cardBody.appendChild(noOfPages)
        cardBody.appendChild(isCompleted)

        cardBody.appendChild(removeBtn)
        removeBtn.addEventListener('click', removeBook)

        cardBody.appendChild(editBtn)
        editBtn.addEventListener('click', editBook)

    

        card.appendChild(cardBody)

        const body = document.getElementsByClassName('col-9')[0]
        body.appendChild(card)

        //to empty inputs
        clearInputs()


        


}

function clearInputs(){

    document.getElementById('title').value=''
    document.getElementById('author').value=''
    document.getElementById('pages-number').value=10
    document.getElementById('completed').checked=false

}

function removeBook(e){
    const bookIndex = findBook(e)
    myLibrary.splice(bookIndex,1)
    e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode)
}

function editBook(e){
    const bookIndex = findBook(e)
    if(myLibrary[bookIndex].isCompleted===false){
        myLibrary[bookIndex].isCompleted = true
        e.target.parentNode.children[4].innerText = 'Read'
        e.target.parentNode.children[4].classList.toggle('red')
        e.target.parentNode.children[4].classList.add('green')


    } 
    else if(myLibrary[bookIndex].isCompleted===true){
        myLibrary[bookIndex].isCompleted=false
        e.target.parentNode.children[4].innerText = 'Not Read Yet'
        e.target.parentNode.children[4].classList.toggle('green')
        e.target.parentNode.children[4].classList.add('red')



        
    }

}

function findBook(e){
    const bookId = +(e.target.parentNode.firstChild.textContent);
    bookIndex = myLibrary.findIndex((book)=>{
                        return book.id===bookId
                    })
    return bookIndex

}

const addBookBtn = document.getElementById('addbook')
addBookBtn.addEventListener('click', addBookToLibrary)