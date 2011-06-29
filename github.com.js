// if I'm in a repo
var slashcount = window.location.href.split("/").length;
if(slashcount >= 5) { // we are in a repo
  // find a top level LICENSE* file
  var licenseurl = $('a[href*="LICENSE"]').attr("href");
  $.get(licenseurl, null, function(data, status, result) {
    if(data.match(/gpl/i)) { // grep it for *GPL*
      // paint red tape
      $("body").prepend($("<h2>Watch out, this repository contains GPL licensed code!</h2>")
        .css({
          "background-color": "#F00",
          "color": "#FF0",
          "text-shadow": "2px 2px #000000",
          "text-align": "center",
          "display": "none",
          "position": "fixed",
          "width": "100%",
          "z-index": 1000,
          "opacity": 0.7
        }).fadeIn("slow"));
    }
  });
}

// credit https://twitter.com/#!/tcurdt/status/86193273055612929

