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

function addBookToLibrary() {}
