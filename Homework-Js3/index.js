function selectFoodItems(callback) {
    setTimeout(() => {
        const items = ["Pizza", "Salad"];
        callback(items);
    }, 1000);
}

function makePayment(callback) {
    setTimeout(() => {
        const paymentConfirmation = "ABA";
        callback(paymentConfirmation);
    }, 1000);
}

function receiveConfirmation(callback) {
    setTimeout(() => {
        const finalConfirmation = "Order confirmed and being prepared";
        callback(finalConfirmation);
    }, 1000);
}

selectFoodItems((items) => {
    console.log("Food items selected from : ", ...items); //Food items selected from :  Pizza Salad
    makePayment((paymentConfirmation) => {
        console.log("Payment By : ", paymentConfirmation); //Payment By :  ABA
        receiveConfirmation((finalConfirmation) => {
            console.log(finalConfirmation); //Order confirmed and being prepared
        });
    });
});
