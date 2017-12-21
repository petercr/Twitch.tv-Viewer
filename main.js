let FCC_Stream, Noobs2_Stream;

const CHANNELS = ["freecodecamp", "aws", "kyleshevlin", "barbarousking"];

(function() {
    let mainURL = "https://wind-bow.glitch.me/twitch-api/channels/";

    $.getJSON(mainURL + CHANNELS[0], function(data) {
        FCC_Stream = data;
        let logo = data.profile_banner;

        $("#FCClink").attr("href", data.url);
        // $("#FCClogo").attr("src", logo);
        $(".card-body").css("background-image", "url(" + logo + ")");
        console.log(logo);
        console.dir(FCC_Stream);
    }); // end of .getJSON() function

    // fetch(mainURL, { method: "GET", mode: "no-cors" }).then(function(response) {
    //         return response.json;
    //     })
    //     .then(function(data) {
    //         console.dir(data);
    //     });

})();