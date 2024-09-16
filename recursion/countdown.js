const countDown = (number) => {
    if (number === 0) {
        console.log("Reduced to base case");
        return;
    }
    console.log(number);
    countDown(number - 1);
};

countDown(5);
