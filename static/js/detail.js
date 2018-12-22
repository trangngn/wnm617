$(function() {
	const MAX_CHARACTERS = 300;

	var book_detail = books[0];
	for (var i = 0; i < books.length; i++) {
		if (books[i].id == getUrlVars().id) {
			book_detail = books[i];
			break;
		}
	}

	//Display initial data
	var detail_html = `	
		<div class="row mt-5">
			<div class="col-sm-6 col-md-4 offset-lg-2">
				<div class="book sticky-top">
					<img src="static/resources/home/book${book_detail.id}.jpg" alt="book" class="img-thumbnail" width="250" height="300">
					<figure>
						<button type="button" class="btn pay-btn mt-4"><a href="pay.html">Purchase</a></button>
					</figure>
				</div>
			</div>

			<div class="col-sm-6 col-md-6 offset-md-2 offset-lg-0 offset-sm-0">
				<div class="description">
					<h3> <p class="font-weight-bold">${book_detail.title}</p></h3>
					<p class="text-secondary">Written by: ${book_detail.authors[0].first_name} ${book_detail.authors[0].last_name}</p>
					<p class="text-secondary">Length: ${book_detail.totaltime}</p>
					<p class="text-secondary">Copyright year: ${book_detail.copyright_year}</p>
					<p class="text-secondary">${book_detail.language}</p>
					<p class="text-secondary">
						<div class="book-description text-secondary">${book_detail.description}</div>
						<button type="button" class="btn btn-info book-description-collapsible-btn"></button>
					</p>
					<p class="text-secondary">4.8 (22,046 ratings)</p>
					<ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star"></ion-icon><ion-icon name="star">
				</div>

				<div class="audios">
				</div>
			</div>
		</div>
	`;

	$('#book-detail').html(detail_html);

	// Now we display the book description
	var is_collapse = false;
	var collapseBtn = $('.book-description-collapsible-btn');
	collapseBtn.click(function() {
		toggleDescription();
	});

	if (book_detail.description.length > MAX_CHARACTERS) {
		collapseBtn.css({marginTop: "15px", marginBottom: "20px", display: "block"});
		toggleDescription(); //so that is_collapse became true
	}


	// toogle collapse state of description
	function toggleDescription() {
		is_collapse = !is_collapse;
		if (is_collapse) {
			$('.book-description').html(book_detail.description.substring(0, MAX_CHARACTERS));
			collapseBtn.html("Show more");
		} else {
			$('.book-description').html(book_detail.description);
			collapseBtn.html("Collapse");
		}
	}

	//Get the chapter list audio and display it
	var chapters = [];
	getBookAudios(book_detail.url_rss, handleBookAudioCallback);

	// Get the audios from the response and construct list of chapters from it
	function handleBookAudioCallback(response) {
		chapters = [];
	  $(response).find('item').each(function(){
	  	var chapter = {
	  		"title": $(this).find('title').text(),
	  		"duration": $(this).find('itunes\\:duration').text(),
	  		"audio": $(this).find('enclosure').attr("url")
	  	}
	  	chapters.push(chapter);
    });

	  showAudios(chapters);
	}

	// Shows the audio in the pages
	function showAudios(chapters) {
		var htmlAudios = "<h3 class=\"sticky-top\">Chapters List</h3>";
		for (var i = 0; i < chapters.length; i++) {
			var chapter = chapters[i];
			var htmlAudio = `
				<div class="audio-item">
					<div class="audio-title"><b>Chapter: </b>  ${chapter.title}</div>
					<audio class="audio-play" controls src="${chapter.audio}">
						Your browser does not support the <code>audio</code> element.
					</audio>
				</div>
			`;

			htmlAudios += htmlAudio;
		}
		$('.audios').html(htmlAudios);
	}
});