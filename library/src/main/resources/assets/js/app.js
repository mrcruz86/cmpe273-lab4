$(":button").click(function() {
	var status = $("#status").text();
	if (!(status == "lost")){
		var isbn = this.id;
		alert('About to report lost on ISBN ' + isbn);
	
		$.ajax({
			url : "http://localhost:8001/library/v1/books/" + isbn + "?status=lost",
			statusCode: {
				200: function() {
					$("#"+isbn+"s").text("lost");
					$("#"+isbn).prop("disabled", true);
				}
			}
		});
	}
});
