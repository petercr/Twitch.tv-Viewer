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
	for ( let i = 0; i < CHANNELS.length; i++ ) { // cycle through the CHANNELS and make an API call for all of them
		let idCount = CHANNELS[ i ]; // var to hold put the channel name into .card id


		$.getJSON( mainURL + "channels/" + CHANNELS[ i ], function( data ) {

			console.dir( data );
			channelData = data;
			let channelURL = data.url;


			let cards = `<div class="cards" id="${idCount}">
			<img src="${data.profile_banner}" class="img-fluid">
			<p>Status:</p>
			<p class="isOffline" id="${i}">${streamStatus}  </p>
			<p class="mr-2">  ${data.display_name}  </p>
			</div>`;

			// add the next card to the end of #showcase
			$( "#showcase" ).append( cards );

			// add eventListener to each .card for a click to take them to the Twitch channel
			document.getElementById( idCount ).addEventListener( "click", function() {
				window.open( channelURL );
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

				// document.getElementById(idCount)
			} else {
				streamStatus = data.stream.game;
			}

			if (streamStatus !== "Offline") {
				// document.getElementById(j).classList.add(".isOnline" );
				// $("#status").removeClass(".isOnline");
				// $("#status").addClass(".isOffline");

			}


		} ); // end second AJAX call to get the status of the live stream
	} // end of the for...loop that checks for stream status

} )(); // end of the main fucntion() self excecuting
