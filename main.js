var FCC_Stream, Noobs2_Stream;

function ready(fn) {
  if (document.attachEvent ? document.readyState === "complete" : document.readyState !== "loading"){
    fn();
  } else {
    document.addEventListener('DOMContentLoaded', fn);
  }


 $.getJSON('https://wind-bow.gomix.me/twitch-api/channels/freecodecamp?callback=?', function(data) {
FCC_Stream = data;
var logo = data.logo;

$("#FCClink").attr("href" , data.url);
$("#FCClogo").attr("src", logo);
console.log(logo);
console.dir(FCC_Stream);
}); // end of .getJSON() function

}
