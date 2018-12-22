$(function() {
	var filtered_books = books;
	displayBooks();

	$('#search').keyup(function() {
		filtered_books = [];
    var searchField = $('#search').val();
    var myExp = new RegExp(searchField, "i");
    for (var i = 0; i < books.length; i++) {
    	var book = books[i];
    	if ((books.title).search(myExp) != -1) {
    		filtered_books.push(book);
    	}
    }             
    displayBooks();
  });

	function displayBooks() {
		var innerBooksHtml = "";
		for (var i = 0; i < filtered_books.length; i++) {
			var book = filtered_books[i];
			var book_html = `
					<div class="pl-2 pr-2" style="cursor:pointer;" onClick="window.location='detail.html?id=${book.id}';">
						<div class="card" style="width: 8rem;">
							<img class="card-img-top" src="static/resources/home/book${book.id}.jpg" alt="Card image cap">
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
	}
});
