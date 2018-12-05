const ESCAPE_URL = "https://cors-escape.herokuapp.com/";
const NUM_RESULT_PER_PAGE = 10;

/**
 * This function will get the list of all the book with the title matching the given title
 * Maximum number of book return is defined by NUM_RESULT_PER_PAGE
 */
function getBooksByTitle(title = "all", page = 0) {
	let offset = page * NUM_RESULT_PER_PAGE;
	let url = ESCAPE_URL  
		+ "https://librivox.org/api/feed/audiobooks/title/^" + title 
		+ "?format=json&limit=" + NUM_RESULT_PER_PAGE + "&offset=" + offset;

	var books = null;
 	$.ajax({
 		url: url, 
 		success: function (response) { books = response; }, 
		async: false
	});
 	return books;
}

/**
 * This function will get the specific detail of a book given its id 
 */
function getBooksDetail(id) {
	let url = ESCAPE_URL + 
		"https://librivox.org/api/feed/audiobooks/?id=" + id + "&format=json";
	var detail = null;
	$.ajax({
 		url: url, 
 		success: function (response) { detail = response["books"][0]; }, 
		async: false
	});
 	return detail;
}

/**
 * Get the url parameter variables
 */
function getUrlVars() {
    var vars = {};
    var parts = window.location.href.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) {
        vars[key] = value;
    });
    return vars;
}