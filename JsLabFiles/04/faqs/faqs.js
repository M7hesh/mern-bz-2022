window.onload = function () {
  var faqs = $("faqs");
  var h2_elements = faqs.getElementsByTagName("h2");

  var h2Node;
  // Get all <h2> elements
    for (var i = 0 in h2_elements) {
    h2Node = h2_elements[i];
    // Attach event handler
    h2Node.onclick = function () {
      var h2 = this; // h2 is the current h2Node object
    // var h2 = h2Node
      if (h2.hasAttribute("class") == "plus") {
        h2.setAttribute("class", "minus");
      } else {
        h2.setAttribute("class", "plus");
      }
      if (h2.nextElementSibling.getAttribute("class") == "closed") {
        h2.nextElementSibling.setAttribute("class", "open");
      } else {
        h2.nextElementSibling.setAttribute("class", "closed");
      }
    };
  }
};
var $ = function (id) {
  return document.getElementById(id);
};
