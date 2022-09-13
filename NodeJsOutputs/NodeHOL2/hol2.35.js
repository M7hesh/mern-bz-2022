// 3.
var $ = function (id) {
  return document.getElementById(id);
};
window.onload = function () {
  console.log("Start.....before function....");
  $("press").addEventListener("click", myFunction);
  function myFunction() {
    console.log("Inside function.....");
  }
  console.log("End.....after function...");
};
// OUTPUT:
// CONSOLE - Before clicking the button
// Start.....before function....
// hol2.js:28 End.....after function...

// CONSOLE - After clicking the button
// Inside function.....

// 5.
var $ = function (id) {
  return document.getElementById(id);
};
window.onload = function () {
  $("divId").addEventListener("click", myFunction);
  function myFunction() {
    $("divId").innerHTML = "Go";
    setTimeout(() => {
      $("divId").style.borderRadius = "100px";
      setTimeout(() => {
        $("divId").style.background = "red";
        setTimeout(() => {
          $("divId").style.borderRadius = "0px";
          setTimeout(() => {
            $("divId").style.background = "green";
            setTimeout(() => {
              $("divId").style.background = "white";
            }, 500);
          }, 500);
        }, 1000);
      }, 500);
    }, 1000);
  }
};
