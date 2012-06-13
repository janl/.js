window.onload = function() {
  var elements = [
    '[data-component-term="user_recommendations"]',     
    '[data-component-term="trends"]'
    ];
  elements.forEach(function(elm) {
    $(elm)
      .live("DOMNodeInserted", function(event) {
        $(this).remove();
      });
  });
}
