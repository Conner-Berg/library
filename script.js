let myLibrary = [];
let totalBooks = 0;
const addBook = document.querySelector(".add-book");
const form = document.querySelector(".form");
const bookList = document.querySelector(".book-list");

function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

Book.prototype.info = function () {
	let logRead;
	this.read ? (logRead = "read") : (logRead = "not read yet");
	console.log(
		this.title +
			" by " +
			this.author +
			", " +
			this.pages +
			" pages, " +
			logRead
	);
};

function addBookToLibrary() {
	let title = document.querySelector(".title").value;
	let author = document.querySelector(".author").value;
	let pages = document.querySelector(".pages").value + " Pages";
	let read = document.querySelector(".read").checked
		? "Read"
		: "Not Read Yet";
	let newBook = new Book(title, author, pages, read);
	myLibrary.push(newBook);
}

function displayBook() {
	++totalBooks;
	let lastBook = myLibrary[myLibrary.length - 1];

	let returnBook = document.createElement("div");
	returnBook.className = `book-${totalBooks}`;
	returnBook.className = `return-book`;
	returnBook.textContent = `${lastBook.title}\r\n${lastBook.author}\r\n${lastBook.pages}\r\n${lastBook.read}`;

	const btnContainer = document.createElement("div");
	btnContainer.className = "btn-container";
	returnBook.append(btnContainer);

	const toggleRead = document.createElement("button");
	toggleRead.className = "toggle-read";
	toggleRead.textContent = "✓";
	btnContainer.append(toggleRead);

	const removeBook = document.createElement("button");
	removeBook.className = "remove-book";
	removeBook.textContent = "X";
	btnContainer.append(removeBook);

	bookList.append(returnBook);
}

addBook.addEventListener("click", function (event) {
	form.style.display = "block";
});

form.addEventListener("submit", function (event) {
	event.preventDefault();
	form.style.display = "none";
	addBookToLibrary();
	displayBook();
});
