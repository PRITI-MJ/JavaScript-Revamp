// Zomato appliction

const orderDetail = {
    orderId: 123123,
    food: ["Pizza", "Biriyani", "Coke"],
    cost: 620,
    customer_name: "Rohit",
    customer_location: "Dwarka",
    restaurant_location: "Delhi"

}

function placedOrder(orderDetail, callback){
    console.log(`${orderDetail.cost} Payment is in progress`);

    setTimeout(() => {
        console.log("Payment is received and order get placed");
        orderDetail.status = true;
         callback(orderDetail);
    }, 3000);

   
}



function preparingOrder(orderDetail, callback){
    console.log(`Your preparation started of ${orderDetail.food}`);

    setTimeout(() => {
        console.log("Your order is now prepared");
        orderDetail.token = 123;
        callback(orderDetail);
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

function pickupOrder(orderDetail, callback){
    console.log(`Delivery boy is on the way to pick up your order from ${orderDetail.restaurant_location}`);

    setTimeout(() => {
        console.log("I have picked up the order");
        orderDetail.received = true;
        callback(orderDetail);
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

function deliverOrder(orderDetail){
    console.log(`I am on my way to deliver your order to ${orderDetail.customer_location}`);
    setTimeout(() => {
        console.log("Order delivered successfully");
        orderDetail.delivery = true;
    }, 3000)

}

placedOrder(orderDetail, (orderDetail) => {
    preparingOrder(orderDetail, (orderDetail) => {
        pickupOrder(orderDetail, (orderDetail) => {
            deliverOrder(orderDetail);
        });
    })
})

//This is called callback hell => here one callback is inside another callback which is inside another callback and so on
//This makes the code hard to read and maintain
//To avoid callback hell, we can use Promises and async/await


