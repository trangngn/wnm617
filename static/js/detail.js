$(function() {
	var book_detail = books[0];
	for (var i = 0; i < books.length; i++) {
		if (books[i].id == getUrlVars().id) {
			book_detail = books[i];
			break;
		}
	}

	var detail_html = `
		
		<div class="row mt-5">
			<div class="col-sm-3 col-md-4 offset-md-2">
				<div class="book">
					<img src="static/resources/home/book${book_detail.id}.png" alt="book" class="img-thumbnail" width="250" height="300">
					<figure>

					<button type="button" class="btn mt-4"><a href="pay.html">Purchase</a></button>

					<div class="mt-3">
						<audio controls src="static/resources/detail/audio.mp4">Your browser does not support the <code>audio</code> element.</audio>
					</div>
					
				</figure>
			</div>
		</div>

		<div class="col-sm-6 col-md-6">
			<div class="description">
				<h3> <p class="font-weight-bold">${book_detail.title}</p></h3>
				<h4><p class="text-secondary">Truth, Lies, and Leadership</p></h4>
				<p class="text-secondary">Written by: ${book_detail.authors[0].first_name} ${book_detail.authors[0].last_name}</p>
				<p class="text-secondary">Length: ${book_detail.totaltime}</p>
				<p class="text-secondary">Unabridged Audiobook</p>
				<p class="text-secondary">Copyright year: ${book_detail.copyright_year}</p>
				<p class="text-secondary">${book_detail.language}</p>
				<p class="text-secondary">${book_detail.description}</p>
				<p class="text-secondary">4.8 (22,046 ratings)</p>
				<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star">
				</div>
			</div>



		</div>
	`;

	$('#book-detail').html(detail_html);
});