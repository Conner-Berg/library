function Book(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
	this.info = function () {
		let logRead;
		read ? (logRead = "read") : (logRead = "not read yet");
		console.log(
			title + " by " + author + ", " + pages + " pages, " + logRead
		);
	};
}
