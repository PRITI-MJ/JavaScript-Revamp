// Zomato appliction

function placedOrder(callback){
    console.log("Payment is in progress");

    setTimeout(() => {
        console.log("Payment is received and order get placed");
         callback();
    }, 3000);

   
}



function preparingOrder(callback){
    console.log("Your preparation started");

    setTimeout(() => {
        console.log("Your order is now prepared");
        callback();
    }, 3000);
}

// placedOrder();
// preparingOrder();
//If we do this way, then 1st payment is in progress will be printed, then your preparation started will be printed
//After 3 seconds, payment is received and order get placed will be printed
// and then your order is now prepared will be printed
//But ideally we want that after payment is received and order get placed only then your preparation started should be printed
//And after that your order is now prepared should be printed
//To achieve this we have to use callback functions

// placedOrder(preparingOrder);

function pickupOrder(callback){
    console.log("Delivery boy is on the way to pick up your order");

    setTimeout(() => {
        console.log("I have picked up the order");
        callback();
        }, 3000);
}

//placedOrder(preparingOrder(pickupOrder));
//The above line will not work, it will throw an error
//To achieve this we have to use nested callback functions

// placedOrder(() => {
//     preparingOrder(() => {
//         pickupOrder();
//     })
// })

function deliverOrder(){
    console.log("I am on my way to deliver your order");
    setTimeout(() => {
        console.log("Order delivered successfully");
    }, 3000)

}

placedOrder(() => {
    preparingOrder(() => {
        pickupOrder(() => {
            deliverOrder();
        });
    })
})