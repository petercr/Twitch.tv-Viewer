// User Story: I can see whether Free Code Camp is currently streaming on Twitch.tv.
//
// User Story: I can click the status output and be sent directly to the Free Code Camp's Twitch.tv channel.
//
// User Story: if a Twitch user is currently streaming, I can see additional details about what they are streaming.


let FCC_Stream, Noobs2_Stream;
let streamStatus;
const CHANNELS = [ "freecodecamp", "aws", "kyleshevlin", "barbarousking" ];

( function() {
	let mainURL = "https://wind-bow.glitch.me/twitch-api/";
	var channelData;
	for ( var i = 0; i < CHANNELS.length; i++ ) { // cycle through the CHANNELS and make an API call for all of them
		let idCount = CHANNELS[ i ]; // var to hold put the channel name into .card id


		// console.log( i );
		$.getJSON( mainURL + "channels/" + CHANNELS[ i ], function( data ) {

			// console.dir( data );
			channelData = data;


			let cards = `<div class="cards" id="${idCount}">
			<img src="${data.profile_banner}" class="img-fluid">
			<p class="isOnline ml-2 mr-2"> Status:		${streamStatus}  </p>
			<p class="mr-2">  ${data.name}  </p>
			</div>`;

			// add the next card to the end of #showcase
			$( "#showcase" ).append( cards );

			// add eventListener to each .card for a click to take them to the Twitch channel
			document.getElementById( idCount ).addEventListener( "click", function() {
				console.log( "it's clicking" );
			} );

			// render new box elements for each channel

		} ); // end of .getJSON() function


	} // end for...loop for first AJAX call

	for ( let j = 0; j < CHANNELS.length; j++ ) {
		let idCount = CHANNELS[ j ];
		$.getJSON( mainURL + "streams/" + CHANNELS[ j ], function( data ) {
			console.dir( data );
			if ( !data.stream == true ) {
				streamStatus = "Offline";
			} else {
				streamStatus = data.stream.game;
			}

		// document.getElementById(idCount).className("status").innerHTML = streamStatus;
		} ); // end second AJAX call to get the status of the live stream
	}


	// $.getJSON( mainURL + "streams/" +  CHANNELS[ 3 ], function( data ) {
	// 	console.log(!data.stream);
	// } );
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
