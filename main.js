// User Story: I can see whether Free Code Camp is currently streaming on Twitch.tv.
//
// User Story: I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.
//
// User Story: if a Twitch user is currently streaming, I can see additional details about what they are streaming.


let FCC_Stream, Noobs2_Stream;

const CHANNELS = [ "freecodecamp", "aws", "kyleshevlin", "barbarousking" ];

( function() {
	let mainURL = "https://wind-bow.glitch.me/twitch-api/";
	var channelData;
	for ( var i = 0; i < CHANNELS.length; i++ ) { // cycle through the CHANNELS and make an API call for all of them

		console.log( i );
		$.getJSON( mainURL + "channels/" + CHANNELS[ i ], function( data ) {
			console.dir( data );
			channelData = data;

			let logo = data.profile_banner;
			let cards = `<div class="cards">
			<img src="${data.profile_banner}">
			<p>${data.name}</p>

			</div>`;
			$( "#showcase" ).append(cards);

			// render new box elements for each channel

		} ); // end of .getJSON() function


	} // end for...loop


	$.getJSON( mainURL + "streams/" +  CHANNELS[ 0 ], function( data ) {
		console.log(data);
	} );
	// 	FCC_Stream = data;
	// 	let logo = data.profile_banner;
	//
	//
	// 	document.getElementById( "FCClink" ).setAttribute( "href", data.url );
	//
	// 	document.getElementById( "card1" ).style.backgroundImage = `url( ${logo})`;
	// 	console.log( logo );
	// 	console.dir( FCC_Stream );
	// } ); // end of .getJSON() function

	// fetch(mainURL, { method: "GET", mode: "no-cors" }).then(function(response) {
	//         return response.json;
	//     })
	//     .then(function(data) {
	//         console.dir(data);
	//     });

} )();
