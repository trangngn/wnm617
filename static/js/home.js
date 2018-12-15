$(function() {
	var innerBooksHtml = "";

	console.log(books);

	for (var i = 0; i < books.length; i++) {
		var book = books[i];
		var book_html = `
				<div class="pl-2 pr-2" style="cursor:pointer;" onClick="window.location='detail.html?id=${book.id}';">
					<div class="card" style="width: 8rem;">
						<img class="card-img-top" src="static/resources/home/book${book.id}.png" alt="Card image cap">
						<div class="audio-play text-center card-body p-1">
							<p class="card-text"><i class="far fa-play-circle"></i> Sample</p>
						</div>
					</div>
					<div class="book-title">
						<p>
							Written by:<br>${book.authors[0].first_name} ${book.authors[0].last_name}<br>
							<i class="text-warning fas fa-star"></i>
							<i class="text-warning fas fa-star"></i>
							<i class="text-warning fas fa-star"></i>
							<i class="text-warning fas fa-star"></i>
							<i class="text-warning fas fa-star-half-alt"></i>
						</p>
					</div>
				</div> 
		`;
		innerBooksHtml += book_html;
	}

	$('.books-container').html(innerBooksHtml);
});