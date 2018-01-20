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


	// test loop to see if I can refractor for loop into a .forEach loop
	CHANNELS.forEach( ( value, index ) => {
		console.log( value + " " + index );
	} );

	// commented out the first AJAX call to just get stream status

	for ( let i = 0; i < CHANNELS.length; i++ ) { // cycle through the CHANNELS and make an API call for all of them
		let idCount = CHANNELS[ i ]; // var to hold put the channel name into .card id


		$.getJSON( mainURL + "channels/" + CHANNELS[ i ], function( data ) {


			console.dir( data );

			var logoPictures = document.getElementsByTagName("img");
			logoPictures[ i + 1 ].src = data.logo;
			console.log( logoPictures);

		} ); // end of .getJSON() function


	} // end for...loop for first AJAX call

	for ( let j = 0; j < CHANNELS.length; j++ ) {
		let idCount = CHANNELS[ j ];
		$.getJSON( mainURL + "streams/" + CHANNELS[ j ], function( data ) {
			let cardStatus = document.getElementsByClassName( "status" );

			// console.dir( data );
			if ( !data.stream == true ) { // if there is no stream then change color to red and text to Offline
				cardStatus[ j ].style = "color: red";
				cardStatus[ j ].innerText = "Offline";

			} else {  // if there IS a stream then change color to green and text to Online
				cardStatus[ j ].style = "color: green";
				cardStatus[ j ].innerText = data.stream.game;
			}

			document.getElementById( `card${ j + 1}` ).addEventListener( "click", function() {
				window.open( "https://www.twitch.tv/" + idCount );
			});


		} ); // end second AJAX call to get the status of the live stream
	} // end of the for...loop that checks for stream status

} )(); // end of the main fucntion() self excecuting
