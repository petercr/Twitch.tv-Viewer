var FCC_Stream, Noobs2_Stream;

( function() {
	let mainURL = "https://wind-bow.gomix.me/twitch-api/channels/freecodecamp?callback=?";

	// $.getJSON( mainURL, function( data ) {
	// 	FCC_Stream = data;
	// 	var logo = data.profile_banner;
  //
	// 	$( "#FCClink" ).attr( "href", data.url );
	// 	$( "#FCClogo" ).attr( "src", logo );
	// 	console.log( logo );
	// 	console.dir( FCC_Stream );
	// } ); // end of .getJSON() function

	fetch( mainURL, { method: "GET", mode: "no-cors"} ).then( function( response ) {
		return response;
	} )
		.then( function( response ) {
			console.dir( response );
		} );

} )( );
