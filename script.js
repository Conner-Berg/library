let myLibrary = [];
let totalBooks = 0;
let bookKey;
const addBook = document.querySelector(".add-book");
const form = document.querySelector(".form");
const bookList = document.querySelector(".book-list");

function Book(title, author, pages, read, bookKey) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.bookKey = bookKey;
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
	let newBook = new Book(title, author, pages, read, bookKey);
	myLibrary.push(newBook);
}

function displayBook() {
	let lastBook = myLibrary[myLibrary.length - 1];

	let returnBook = document.createElement("div");
	returnBook.classList.add(bookKey);
	returnBook.classList.add("return-book");
	returnBook.textContent = `${lastBook.title}\r\n${lastBook.author}\r\n${lastBook.pages}`;

	const btnContainer = document.createElement("div");
	btnContainer.className = "btn-container";
	returnBook.append(btnContainer);

	const toggleRead = document.createElement("button");
	toggleRead.className = "toggle-read";
	toggleRead.textContent = "✓";
	if (document.querySelector(".read").checked)
		toggleRead.classList.add("toggle-read-yes");
	btnContainer.append(toggleRead);

	const removeBook = document.createElement("button");
	removeBook.className = "remove-book";
	removeBook.textContent = "X";
	btnContainer.append(removeBook);

	bookList.append(returnBook);
}

function useAddBookBtn() {
	form.style.display = "block";
}

function useSubmitBtn(event) {
	event.preventDefault();
	form.style.display = "none";
	++totalBooks;
	bookKey = `book-key-${totalBooks}`;
	addBookToLibrary();
	displayBook();
}

function toggleReadBtn(event) {
	let target = event.target;
	if (target.classList.contains("toggle-read-yes")) {
		return target.classList.remove("toggle-read-yes");
	} else if (target.classList.contains("toggle-read")) {
		return target.classList.add("toggle-read-yes");
	}
}

function useRemoveBtn(event) {
	let target = event.target;
	let el = target.closest(".return-book");
	if (target.classList.contains("remove-book")) {
		return el.remove();
	}
}

addBook.addEventListener("click", useAddBookBtn);

form.addEventListener("submit", useSubmitBtn);

bookList.addEventListener("click", toggleReadBtn);

bookList.addEventListener("click", useRemoveBtn);
