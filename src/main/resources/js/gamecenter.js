
var server = "http://localhost:8080";
var dataType = "JSONP";
var token = "tokenStr";


function getClientList(groupId) {

	$.ajax({
		type: "GET",
		url: server,
		data: {
		CENTER_ID: groupId,
		TOKEN: token,
		DATA_TYPE: dataType,
		REQ_TYPE: "CLIENT_LIST"
		},
		dataType: dataType,
		jsonp: "jsonpCallback",
		success: function(data) {
		$.each(data,
            			function(index, content) {
            				alert(content);
            			});
		},
		error: function() {
			alert('fail');
		}

	});

}

function queryCounterStatus(groupId, mac) {

	$.ajax({
		type: "GET",
		url: server,
		data: {
		CENTER_ID: groupId,
		TOKEN: token,
		DATA_TYPE: dataType,
		REQ_TYPE: "COUNTER_STATUS",
		MAC: mac,
		COIN_STATUS: true,
		PRIZE_STATUS: true
		},
		dataType: dataType,
		jsonp: "jsonpCallback",
		success: function(data) {
		$.each(data,
            			function(index, content) {
            				alert(content);
            			});
		},
		error: function() {
			alert('fail');
		}

	});

}

function queryCounterQty(groupId, mac) {

	$.ajax({
		type: "GET",
		url: server,
		data: {
		CENTER_ID: groupId,
		TOKEN: token,
		DATA_TYPE: dataType,
		REQ_TYPE: "COUNTER_QTY",
		MAC: mac,
		COIN_QTY: true,
		PRIZE_QTY: true
		},
		dataType: dataType,
		jsonp: "jsonpCallback",
		success: function(data) {
		$.each(data,
            			function(index, content) {
            				alert(content);
            			});
		},
		error: function() {
			alert('fail');
		}

	});

}

function resetCounter(groupId, mac, resetCoin, resetPrize) {

	$.ajax({
		type: "GET",
		url: server,
		data: {
		CENTER_ID: groupId,
		TOKEN: token,
		DATA_TYPE: dataType,
		REQ_TYPE: "COUNTER_RESET",
		MAC: mac,
		COIN_RESET: resetCoin,
		PRIZE_RESET: resetPrize
		},
		dataType: dataType,
		jsonp: "jsonpCallback",
		success: function(data) {
		$.each(data,
            			function(index, content) {
            				alert(content);
            			});
		},
		error: function() {
			alert('fail');
		}

	});

}


function topUp(groupId, mac, refId, coinQty) {

	$.ajax({
		type: "GET",
		url: server,
		data: {
		CENTER_ID: groupId,
		TOKEN: token,
		DATA_TYPE: dataType,
		REQ_TYPE: "TOP_UP",
		MAC: mac,
		TOP_UP_REFERENCE_ID: refId,
		TOP_UP_COIN_QTY: coinQty
		},
		dataType: dataType,
		jsonp: "jsonpCallback",
		success: function(data) {
		$.each(data,
            			function(index, content) {
            				alert(content);
            			});
		},
		error: function() {
			alert('fail');
		}

	});

}


function queryPowerStatus(groupId, mac) {

	$.ajax({
		type: "GET",
		url: server,
		data: {
		CENTER_ID: groupId,
		TOKEN: token,
		DATA_TYPE: dataType,
		REQ_TYPE: "POWER_STATUS",
		MAC: mac
		},
		dataType: dataType,
		jsonp: "jsonpCallback",
		success: function(data) {
		$.each(data,
            			function(index, content) {
            				alert(content);
            			});
		},
		error: function() {
			alert('fail');
		}

	});

}



function switchPowerStatus(groupId, mac, isPowerOn) {

	$.ajax({
		type: "GET",
		url: server,
		data: {
		CENTER_ID: groupId,
		TOKEN: token,
		DATA_TYPE: dataType,
		REQ_TYPE: "POWER_CONTROL",
		MAC: mac,
		POWER_SWITCHER: isPowerOn
		},
		dataType: dataType,
		jsonp: "jsonpCallback",
		success: function(data) {
		$.each(data,
            			function(index, content) {
            				alert(content);
            			});
		},
		error: function() {
			alert('fail');
		}

	});

}