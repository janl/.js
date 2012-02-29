/*
   GitHub GPL Warner
   Credit https://twitter.com/#!/tcurdt/status/86193273055612929
   (c) Jan Lehnardt 2011 <jan@apache.org>
   MIT License
*/
// if I'm in a repo
var slashcount = window.location.href.split("/").length;
if(slashcount >= 5) { // we are in a repo
  // find a top level LICENSE* file
  var license_files = ["LICENSE", "COPYING"];
  var licenseurl = false;

  license_files.forEach(function(license_file) {
    licenseurl = $('a[href*="' + license_file + '"]').attr("href");
  });

  licenseurl && $.get(licenseurl, null, function(data, status, result) {
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

/*
  Pull request helper
   (c) Jan Lehnardt 2011 <jan@apache.org>
   MIT License
*/

//https://github.com/janl/mustache.js/pull/177
//git fetch https://github.com/subzey/mustache.js.git && git cherry-pick FETCH_HEAD
var path_parts = window.location.href.split("/");
if(path_parts[5] && path_parts[5] == "pull") {
  // we are in a pull request
  var repo = path_parts[4];
  var ref = $('span[class*="commit-ref from"]').text().split(":");
  if(ref.length == 1) { // fetch form a branch our own repo!
    var user = path_parts[3];
    var branch = ref[0];
  } else {
    var user = ref[0];
    var branch = ref[1];
  }
  var fetch = "git fetch https://github.com/" + user +"/" + repo + ".git +refs/heads/" + branch +" && git cherry-pick FETCH_HEAD"
  var tabs = $('ul[class*="js-hard-tabs  smalltabs"]');
  var div = $('<div>' + fetch +'</div>');
  $(tabs).after(div);
}