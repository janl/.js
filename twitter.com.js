window.onload = function() {
  var elements = [
    '[class*="wtf-module"]',
    '[class*="trends"]'
    ];
  elements.forEach(function(elm) {
    $(elm)
      .live("DOMNodeInserted", function(event) {
        $(this).remove();
      });
  });
}
