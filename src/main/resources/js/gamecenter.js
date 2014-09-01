function getClientList(groupId) {

	$.ajax({
		type: "GET",
		url: "http://localhost:8080",
		data: {
			id: 123
		},
		dataType: "jsonp",
		jsonp: "jsonpCallback",
		success: function(data) {
			var ipList = data.ip;
			$.each(ipList,
			function(index, content) {
				alert(content);
			});
		},
		error: function() {
			alert('fail');
		}

	});
}
