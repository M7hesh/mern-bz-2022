// 1.
// const bar = () => console.log("bar");
// const baz = () => console.log("baz");
// const foo = () => {
//   console.log("foo");
//   bar();
//   baz();
// };
// foo();

// 2.
// console.log("Start..");
// setTimeout(() => {
//   console.log("From callback..........");
// }, 0);
// console.log("End...");

// 3.
// var $ = function (id) {
//   return document.getElementById(id);
// };
// window.onload = function () {
//   console.log("Start.....before function....");
//   $("press").addEventListener("click", myFunction);
//   console.log("Start...2..before function....");
//   function myFunction() {
//     console.log("Inside function.....");
//   }
//   console.log("End.....after function...");
// };

// 4.
// const placeOrder = (itemsInCart) => {
//   if (!itemsInCart) {
//     throw new Error("Cart is empty");
//   }
//   amazon.createNewOrder(itemsInCart, (newOrder, err) => {
//     if (err) throw new Error(err);
//     amazon.proceedToPayment(newOrder, (orderAmount, err) => {
//       if (err) throw new Error(err);
//       amazon.showOrderSummary(orderAmount, (orderDetails, err) => {
//         if (err) throw new Error(err);
//         amazon.updateWallet(orderDetails, (walletDetails, err) => {
//           if (err) throw new Error();
//           console.log("Order placed!");
//         });
//       });
//     });
//   });
// };

// 5.
// var $ = function (id) {
//   return document.getElementById(id);
// };
// window.onload = function () {
//   $("divId").addEventListener("click", myFunction);
//   function myFunction() {
//     $("divId").innerHTML = "Go";
//     setTimeout(() => {
//       $("divId").style.borderRadius = "100px";
//       setTimeout(() => {
//         $("divId").style.background = "red";
//         setTimeout(() => {
//           $("divId").style.borderRadius = "0px";
//           setTimeout(() => {
//             $("divId").style.background = "green";
//             setTimeout(() => {
//               $("divId").style.background = "white";
//             }, 500);
//           }, 500);
//         }, 1000);
//       }, 500);
//     }, 1000);
//   }
// };

// 6.a. new Promise(() => {})
// 6.b.
// function getPromise() {
//   return new Promise((resolve, reject) => {
//     try {
//       // uncomment to test reject()
//       // throw new Error();
//       resolve("I am getting resolved");
//     } catch (err) {
//       reject("Oops! Rejected");
//     }
//   });
// }
// getPromise()
//   .then((val) => console.log(val))
//   .catch((err) => console.log(err));

// 6.c
// var a = new Promise((res, rej) => {
//   res(5);
// });
// var b = a.then((val) => val * 2);
// var c = b.then((val) => val * 2);

// 7;.
// console.log("start");
// setTimeout(() => {
//   console.log("Timeout");
// }, 0);
// Promise.resolve("Promise").then((res) => console.log(res));
// console.log("end");

// 8.
// function myFunc() {
//   return new Promise((res, rej) => {
//     res(console.log("Resolved......."));
//   });
// }

// 9.
// const prom = () => Promise.resolve("Promise......");
// async function myFunction() {
//   console.log("In function");
//   const res = await prom();
//   console.log(res);
// }
// console.log("Before calling myfunction");
// myFunction();
// console.log("After calling myfunction");
