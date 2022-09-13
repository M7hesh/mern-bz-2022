// 1.
const bar = () => console.log("bar");
const baz = () => console.log("baz");
const foo = () => {
  console.log("foo");
  bar();
  baz();
};
foo();
// OUTPUT: D:\Mern training\NodeFiles>node hol2.js
// foo
// bar
// baz

// 2.a
setTimeout(() => {
  console.log("From callback..........");
}, 5);
//  D:\Mern training\NodeFiles>node hol2.js
// From callback..........

// 2.b
console.log("Start..");
setTimeout(() => {
  console.log("From callback..........");
}, 5);
console.log("End...");
//  D:\Mern training\NodeFiles>node hol2.js
// Start..
// End...
// From callback..........

// 2.c
console.log("Start..");
setTimeout(() => {
  console.log("From callback..........");
}, 0);
console.log("End...");
// D:\Mern training\NodeFiles>node hol2.js
// Start..
// End...
// From callback..........
// No, execution sequence remains same as with 5 ms timeout

// 2.d console.log is executed directly by Call stack,
// whereas setTimeout is stored in callback queue first and
// then is executed by call stack once it gets free/unoccupied.

// 4.
const placeOrder = (itemsInCart) => {
  if (!itemsInCart) {
    throw new Error("Cart is empty");
  }
  amazon.createNewOrder(itemsInCart, (newOrder, err) => {
    if (err) throw new Error(err);
    amazon.proceedToPayment(newOrder, (orderAmount, err) => {
      if (err) throw new Error(err);
      amazon.showOrderSummary(orderAmount, (orderDetails, err) => {
        if (err) throw new Error(err);
        amazon.updateWallet(orderDetails, (walletDetails, err) => {
          if (err) throw new Error();
          console.log("Order placed!");
        });
      });
    });
  });
};

// 6.a.
var p = new Promise(() => {});
// undefined
// > p
// Promise {
//   <pending>,
//   [Symbol(async_id_symbol)]: 1260,
//   [Symbol(trigger_async_id_symbol)]: 5,
//   [Symbol(destroyed)]: { destroyed: false }
// }

// 6.b.
function getPromise() {
  return new Promise((resolve, reject) => {
    try {
      // uncomment to test reject
      // throw new Error();
      resolve("I am getting resolved");
    } catch (err) {
      reject("Oops! Rejected");
    }
  });
}
getPromise()
  .then((val) => console.log(val))
  .catch((err) => console.log(err));
// D:\Mern training\NodeFiles>node hol2.js
// I am getting resolved

// D:\Mern training\NodeFiles>node hol2.js
// Oops! Rejected

// 6.c
var a = new Promise((res, rej) => {
  res(5);
});
var b = a.then((val) => val * 2);
var c = b.then((val) => val * 2);
// > b
// Promise {
//   10,
//   [Symbol(async_id_symbol)]: 443,
//   [Symbol(trigger_async_id_symbol)]: 178,
//   [Symbol(destroyed)]: { destroyed: false }
// }
// > c
// Promise {
//   20,
//   [Symbol(async_id_symbol)]: 713,
//   [Symbol(trigger_async_id_symbol)]: 443,
//   [Symbol(destroyed)]: { destroyed: false }
// }

// 7.
console.log("start");
setTimeout(() => {
  console.log("Timeout");
}, 0);
Promise.resolve("Promise").then((res) => console.log(res));
console.log("end");
// D:\Mern training\NodeFiles>node hol2.js
// Start
// End
// Promise
// Timeout
// Execution order:
// 	1. > Start
// 	2. callback function of setTimeout goes from the webapi to the Macrotask queue
// 	3. promise's resolve goes directly into microtask queue
// 	4. > End
// 	5. > Promise (microtask queue is empty)
// 	6. > Timeout (macrotask queue is empty)

// 8.
function myFunc() {
  return new Promise((res, rej) => {
    res(console.log("Resolved......."));
  });
}
// > myFunc()
// Resolved......
// Promise {
//   undefined,
//   [Symbol(async_id_symbol)]: 597,
//   [Symbol(trigger_async_id_symbol)]: 5,
//   [Symbol(destroyed)]: { destroyed: false }
// }

// 9.
const prom = () => Promise.resolve("Promise......");
async function myFunction() {
  console.log("In function");
  const res = await prom();
  console.log(res);
}
console.log("Before calling myfunction");
myFunction();
console.log("After calling myfunction");
// Before calling myfunction
// In function
// After calling myfunction
// Promise......
