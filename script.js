let myLibrary = [];

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
	let returnBook = document.querySelector(".return-book");

	returnBook.textContent = `${title}\r\n${author}\r\n${pages}\r\n${read}`;
}

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
	event.preventDefault();

	addBookToLibrary();
});
