$(function() {
	let book_id = getUrlVars()['id'];
	let book_detail = getBooksDetail(book_id);

	var detail_html = `
		<div class="row">
			<div class="col-sm-6">
				<div class="book">
					<img src="https://images-na.ssl-images-amazon.com/images/I/31psjQoH6XL._SX327_BO1,204,203,200_.jpg" alt="book" class="img-thumbnail" width="250" height="300">
					<figure>
						<audio controls src="static/resources/detail/audio.mp4">Your browser does not support the <code>audio</code> element.</audio>
				</figure>
			</div>
		</div>
		<div class="col-sm-6">
			<div class="description">
				<h3> <p class="font-weight-bold">${book_detail.title}</p></h3>
				<h4><p class="text-secondary">Truth, Lies, and Leadership</p></h4>
				<p class="text-secondary">By: James Comey</p>
				<p class="text-secondary">Narrated by: James Comey</p>
				<p class="text-secondary">Length: 9 hrs and 4 mins</p>
				<p class="text-secondary">Unabridged Audiobook</p>
				<p class="text-secondary">Release date: 04-17-18</p>
				<p class="text-secondary">Language: English</p>
				<p class="text-secondary">Publisher: Macmillan Audio</p>
				<p class="text-secondary">4.8 (22,046 ratings)</p>
				<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star">
				</div>
			</div>
		</div>
	`;

	$('#book-detail').html(detail_html);
});