function Book(name, author, type) {
    this.name = name;
    this.author = author;
    this.type = type;
}

function Display() {

}
Display.prototype.show = function (book) {
    console.log("book added sucessfully");
    let table = document.getElementById('tablebody');
    let uistring = `  <tr>
                            <!-- <th scope="row"></th> -->
                            <td>${book.name}</td>
                            <td>${book.author}</td>
                            <td>${book.type}</td>
                        </tr>   `;
    table.innerHTML += uistring;
}

Display.prototype.clear = function () {
    let libraryform = document.getElementById('Libraryform');
    libraryform.reset();
}

Display.prototype.dis = function (obj) {
    if (obj == "show success") {
        window.alert('Book added sucessfully');
    }
    else {
        window.alert('Book not added to list');
    }

}
//answer validation
Display.prototype.validate = function (book) {
    let libraryform = document.getElementById('Libraryform');
    libraryform.addEventListener('submit', bookDetails);
    if (book.name == "") {
        window.alert('Enter book name');
        flag = 0
        return false;
    }
    else if (book.author == "") {
        window.alert('Enter author name');
        return false;
    }
    else if (book.type == undefined) {
        window.alert('enter type pf book ');
        return false;
    }
    if (book.name.length < 2) {
        window.alert('Enter the correct book name');
        return false;
    }
    else if (book.author.length < 2) {
        window.alert('Enter the correct author name');
        return false;
    }
    return true;
}

let libraryform = document.getElementById('Libraryform');
libraryform.addEventListener('submit', bookDetails);

function bookDetails(e) {

    let bname = document.getElementById('name').value;
    let aname = document.getElementById('authorname').value;
    let btype;

    let fic = document.getElementById('fiction');
    let ce = document.getElementById('ce');
    let cook = document.getElementById('cooking');

    if (fic.checked) {
        btype = fic.value;
    }
    else if (ce.checked) {
        btype = ce.value;
    }
    else if (cook.checked) {
        btype = cook.value;
    }
    let book = new Book(bname, aname, btype); //creating a book object
    e.preventDefault();
    console.log(book);
    let display = new Display();
    //let test=false;
    let test = display.validate(book);
    if (test == true) {
        display.show(book);
        display.clear();
        display.dis('show success');
    }
    else {
        //show error to the user
        display.dis('show error');
    }
}


