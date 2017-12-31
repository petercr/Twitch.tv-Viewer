let FCC_Stream, Noobs2_Stream;

const CHANNELS = [ "freecodecamp", "aws", "kyleshevlin", "barbarousking" ];

( function() {
	let mainURL = "https://wind-bow.glitch.me/twitch-api/channels/";
	var channelData;
	for ( var i = 0; i < CHANNELS.length; i++ ) { // cycle through the CHANNELS and make an API call for all of them

		console.log( i );
		$.getJSON( mainURL + CHANNELS[ i ], function( data ) {
			console.dir( data );
			channelData = data;

			let logo = data.profile_banner;
			let cards = `<div class="cards">
        	<p>${data.name}</p>
			<p>stuff</p>
			</div>`;
			document.getElementById( "showcase" ).innerHTML = cards;

			// render new box elements for each channel

		} ); // end of .getJSON() function
		console.log( channelData );

	} // end for...loop


	// $.getJSON( mainURL + CHANNELS[ 0 ], function( data ) {
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
