var $ = function (id) {
  return document.getElementById(id);
};
window.onload = function () {
  var listNode = $("image_list");
  var captionNode = $("caption");
  var imageNode = $("image");

  var imageLinks = listNode.getElementsByTagName("a");
  // Process image links
  var i, linkNode, image;
  for (var i in imageLinks) {
    linkNode = imageLinks[i];
    // Attach event handler
    linkNode.onclick = function (e) {
      var link = this;
      imageNode.src = link.getAttribute("href");
      captionNode.firstChild.nodeValue = link.getAttribute("title");
      if (e.preventDefault) {
        e.preventDefault();
      }
      // Preload image
      image = new Image();
      image.src = linkNode.getAttribute("href");
    };
  }
  $("first_link").focus();
};
