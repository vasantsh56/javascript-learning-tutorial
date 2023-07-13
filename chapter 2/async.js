// Date: 09/07/2023
// synchronous example
// console.log("I");
// console.log("eat");
// console.log("ice cream");

// Asynchronous example
// console.log("I");
// setTimeout(() => {
//     console.log("eat");
// },2000)
// console.log("ice cream");

// callback example
let stocks = {
    Fruits : ["strawberry", "grapes", "banana", "apple"],
    liquid : ["water", "ice"],
    holder : ["cone", "cup", "stick"],
    toppings : ["chocolate", "peanuts"],
 };

 // a small test on understanding callback
//  let order = (call_production) => {
//     console.log("order placed, pls call production");
//     call_production();
//  };

//  let production = () => {
//     console.log("production started");
//  };

//  order(production);

// ice cream project
// let order = (fruit_name, call_production) => {
//     setTimeout(function(){
//         console.log(`${stocks.Fruits[fruit_name]} was selected`);
//         call_production();

//     },2000)
// };

// let production = () => {
//     setTimeout(() => {
//         console.log("production has started");
//         setTimeout(() => {
//             console.log("the fruit has been chopped");
//             setTimeout(() => {
//                 console.log(`Added ${stocks.liquid[0]} and ${stocks.liquid[1]}`);
//                 setTimeout(() => {
//                     console.log("Machine started");
//                     setTimeout(() => {
//                         console.log("Container selected");
//                         setTimeout(() => {
//                             console.log(`${stocks.toppings[0]} as toppings`);
//                             setTimeout(() => {
//                                 console.log("Serve the ice cream");
//                             },2000)
//                         },3000);
//                     },2000)
//                 },1000)
//             },1000)
//         },2000)
//     },0000)
// };

// order(0,production);

// above code represents a callback hell

// Promises example

let is_shop_open = true;

// let order = (time,work) => {
//     return new Promise((resolve,reject) => {
//         if(is_shop_open) {
//             setTimeout(() => {
//                 resolve(work());
//             },time)
//         }
//         else {
//             reject(console.log("shop closed"));
//         }
//     });
// };

// order(2000,()=>console.log(`${stocks.Fruits[0]} was selected`))
// .then(()=>{
//     return order(0000,()=>console.log("production has started"));
// })
// .then(()=>{
//     return order(2000,() => console.log("fruit has been chopped"));
// })
// .then(()=>{
//     return order(1000,()=>console.log(`${stocks.liquid[0]} and ${stocks.liquid[1]} added`))
// })
// .then(()=>{
//     return order(1000,()=>console.log("start the machine"));
// })
// .then(()=> {
//     return order(2000,()=>console.log("container selected"));
// })
// .then(()=>{
//     return order(3000,()=>console.log(`${stocks.toppings[0]} toppings`));
// })
// .then(()=>{
//     return order(2000,()=>console.log("Serve ice cream"));
// })
// .catch(()=>{
//     console.log("Customer left");
// })
// .finally(()=>{
//     console.log("end of day");
// });

// Async/Await example

function time(ms) {
    return new Promise((resolve,reject)=>{
        if(is_shop_open) {
            setTimeout(resolve,ms);
        }
        else {
            reject(console.log("shop is closed"))
        }
    });
};

async function kitchen() {
    try {
        await time(2000)
        console.log(`${stocks.Fruits[0]} was selected`);

        await time(0000) 
        console.log("production started");

        await time(2000)
        console.log("fruits were chopped");

        await time(1000)
        console.log("water and ice added");

        await time(1000) 
        console.log("Start the machine");

        await time(2000)
        console.log("Select container");

        await time(3000)
        console.log(`${stocks.toppings[0]} toppings`);

        await time(2000) 
        console.log("Serve ice cream");
    }
    catch(error) {
        console.log("Customer left", error);
    }
    finally {
        console.log("Day ended, shop closed");
    }
}

kitchen();

// Completed entire tutorial for Asynchronus JavaScript