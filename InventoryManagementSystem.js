const hotdog = {name: "hotdog", price: 35, category: "frozen", quantity: 20};
const lollipop = {name: "lollipop", price: 5, category: "candies", quantity: 10};
const cotton = {name: "cotton", price: 15, category: "essentials", quantity: 50};
const frutos = {name: "frutos", price: 3, category: "candies", quantity: 5};
const eskinol = {name: "eskinol", price: 50, category: "essentials", quantity: 8};
const chickenHam = {name: "chicken ham", price: 45, category: "frozen", quantity: 0};
const burgerPatty = {name: "burger patty", price: 60, category: "frozen", quantity: 35};
const snowBear = {name: "snow bear", price: 2, category: "candies", quantity: 30};
const rice = {name: "rice", price: 70, category: "essentials", quantity: 0};
const footlong = {name: "footlong", price: 30, category: "frozen", quantity: 20};

const stocks = [hotdog, lollipop, cotton, frutos, eskinol];


function addItem(...items){
    return stocks.push(...items);
}

addItem(chickenHam, burgerPatty, snowBear, rice, footlong);


const total = () => {
    let value = stocks.reduce((accumulator, element) => accumulator + (element.price * element.quantity), 0);
    console.log("\n\n\nCurrent total value of the Inventory: ", value, "\n\n")
};

const lowThreshold = () => {
    let value = stocks.filter((element) => element.quantity <= 10);
    console.log("\n\n\nThe following items are low in stock:   ", value, "\n\n")
};


const findingCategory = (categoryName) => {
    let isThere = stocks.some(element => element.category === categoryName);
    let value = stocks.filter(element => element.category === categoryName);
    
    if (isThere){
        console.log(categoryName, "has/have been found!:  ", value);
    }  else {
        console.log("\n\nOopsss,", categoryName, "is not in our inventory category.\n\n");
    }

    filterQuestion()

    function filterQuestion() {
        todo.question("\n\nDo you want to find a category again? [Y/N]  ", (option) => {
            if (option.trim().toLowerCase() === "y") {
                console.log("\n\nNoted. Please wait for 3 seconds.");
                setTimeout(filterCategory, 3000);
            } else if (option.trim().toLowerCase() === "n") {
                console.log("\n\nAwww, ok. Please wait for 3 seconds.");
                setTimeout(quit, 3000);
            } else {
                console.log("\n\nSilly! That's not the choices. Please try again!");
                setTimeout(filterQuestion, 3000);
            }
        })
    }
}

function sortingInventory(choose) {
    let ascendingPrice = [];
    let descendingPrice = [];
    let ascendingQuantity = [];
    let descendingQuantity = [];

    switch(choose){
        case '1':
            //Sort prices of the item in an ascending order.
            let ascendingPriceValue = ascendingPrice = stocks.sort((previous, current) => previous.price - current.price)
            console.log("\n\n\nSort items in an ascending order by price: ", ascendingPriceValue);
            setTimeout(quit, 3000);
            break;
        case '2':
            //Sort prices of the item in an descending order.
            let descendingPriceValue = descendingPrice = stocks.sort((previous, current) => previous.price - current.price).reverse();
            console.log("\n\n\nSort items in an descending order by price: ", descendingPriceValue);
            setTimeout(quit, 3000);
            break;
        case '3':
            //Sort quantity of the item in an ascending order.
            let ascendingQuantityValue = ascendingQuantity = stocks.sort((previous, current) => previous.quantity - current.quantity)
            console.log("\n\n\nSort items in an ascending order by quantity: ", ascendingQuantityValue);
            setTimeout(quit, 3000);
            break;
        case '4':
            let descendingQuantityValue = descendingQuantity = stocks.sort((previous, current) => previous.quantity - current.quantity).reverse();
            console.log("\n\n\nSort items in an descending order by quantity: ", descendingQuantityValue);
            setTimeout(quit, 3000);
            break;
        default:
            console.log("\n\n\nThat's not the right choice. Please choose within the choices!");
            setTimeout(sortChoices, 5000);
            // break;
    };
}

const outOfStock = () => {
    let value = stocks.some(element => element.quantity == 0)
    if (value) {
        let zeroItem = [];
        zeroItem = stocks.filter(element => element.quantity == 0);
        console.log(zeroItem.map(element => element.name) + " has/have no quantity. Refill Immediately!\n\n\n");
    } else {
        console.log("\n\n\nFortunately, all items have a remaining value.");
    }

    setTimeout(quit, 3000);
}

function discountedItem(discount, ...item){
    let itemDiscounted = [...item];


    let updatedPrice = itemDiscounted.map(elements => elements.price - (elements.price * discount));
    itemDiscounted.forEach((element, index) => {
        element.price = updatedPrice[index];
    })
    
    console.log("This is your updated stocks. Thank you!", stocks);

    setTimeout(quit, 3000);
}


function addItemWithCallback(log, ...items){
    let addedItems = {name: items[0], price: items[1], category: items[2], quantity: items[3]};
    stocks.push(addedItems);
    log(items[0]);
}

function consoleLog(name = "noName"){
    if (name == "noName"){
        console.log("This is your current inventory as of now: ", stocks)
    } else {
        console.log(name, "has been added to the inventory: ", stocks);
    }
    setTimeout(quit, 5000);
}





const uppercaseStocks = () => {
    let value = stocks.map(element => ({
        ...element, name: element.name.toUpperCase(),
    }));
    console.log("Transforming done! This is your updated UPPERCASE name in each item in your inventory.", value);

    setTimeout(quit, 3000);
}










let caseInput = "";

const readline = require('readline');

const todo = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const question = () => {todo.question(`Hi there! This is an inventory management system. What would you like to do?


    1. Add new items to the inventory (add the new item only won't view the inventory).
    2. Calculate the total value of the inventory.
    3. Find items that are low in stock.
    4. Filter items based on a category.
    5. Sort items by price or quantity.
    6. Check if any items are out of stock.
    7. Apply discounts to multiple items.
    8. Transform to UPPERCASE the name of every list item.
    9. Add new items to the inventory then view inventory.
    10. View Stocks.
    11. Exit the program.

    Please input number here: `, (option) => {
        if (isNaN(option.trim()) || option.trim() === ""){
            console.log("\nSilly that's not a number. Try again after 5 seconds!");
            setTimeout(question, 5000);
        } else {
            receiveInputFunction(option);
        }
    }
)};

function quit(){
    todo.question("\n\nDo you want to continue managing the Inventory? [Y/N]  ", (option) => {
        if (option.trim().toLowerCase() === 'y'){
            console.log("\n\n\nWelcome again to Inventory Management System! Please wait for 3 seconds\n\n");

            setTimeout(question, 3000);
        } else if (option.trim().toLowerCase() === 'n'){
            console.log("Goodbye! See you again.")
            todo.close();
        } else {
            console.log("Silly! Please input within the choices. Thank you!")
            setTimeout(quit, 2000);
        }
    })
}

function receiveInputFunction(option){
    console.log("\n\nProccessing...\n\n\n");
    switch(option.trim()) {
        case '1':
            caseInput = '1';
            setTimeout(operationAddStudent, 2000);
            break;
        case '2':
            setTimeout(calculateTotalValue, 2000);
            break;
        case '3':
            setTimeout(lowStack, 2000);
            break;
        case '4':
            setTimeout(filterCategory, 2000);
            break;
        case '5':
            setTimeout(sortChoices, 2000);
            break;
        case '6':
            setTimeout(checkStocks, 2000);
            break;
        case '7':
            setTimeout(applyDiscount, 2000);
            break;
        case '8':
            setTimeout(transformUppercase, 2000);
            break;
        case '9':
            caseInput = '9';
            setTimeout(operationAddStudent, 2000);
            break;
        case '10':
            setTimeout(consoleLog, 2000);
            break;
        case '11':
            console.log("Goodbye! See you again.");
        default:
            todo.close();
    }
}


function operationAddStudent() {
    todo.question(`What would you like to add?

Please enter name of the item: `, (itemName) => {
            todo.question(`Please input the price of ${itemName}: `, (itemPrice) => {
                todo.question(`Please enter the item category: `, (itemCategory) => {
                    todo.question(`Please enter the quantity: `, (itemQuantity) => {
                        console.log(`${itemName}, ${itemPrice}, ${itemCategory}, ${itemQuantity}`)
                        if ((itemName.trim() == "" || !isNaN(itemName.trim())) || isNaN(itemPrice.trim()) || (itemCategory.trim() == "" || !isNaN(itemCategory.trim())) || isNaN(itemQuantity)){
                            console.log(`\nSome has no/incorrect values! Please input all fields. Try Again after 3 seconds!`)
                            setTimeout(operationAddStudent, 3000);
                        } else {
                            let add = {name: itemName.trim(), price: parseInt(itemPrice.trim()), category: itemCategory.trim(), quantity: parseInt(itemQuantity.trim())};
                            if (caseInput == '1') {
                                addItem(add);
                                console.log(`\n\n\n${itemName} has been added in the inventory. Please wait after 5 seconds`)
                                setTimeout(quit, 5000);
                            } else if (caseInput == '9') {
                                addItemWithCallback(consoleLog, itemName.trim(), parseInt(itemPrice.trim()), itemCategory.trim(), parseInt(itemQuantity.trim()));
                            } else {
                                console.log("\n\n\nThis should not trigger at any instance...")
                                setTimeout(quit, 5000);
                            }
                        }
                    });
                });
            });
    });
}

function calculateTotalValue() {
    total();
    setTimeout(quit, 1000);
}

function lowStack() {
    lowThreshold();
    setTimeout(quit, 1000);
}

function filterCategory() {
    todo.question("Input category name you want to find: ", (option) => {
        if (isNaN(option.trim())) {
            console.log("\n\nFiltering data...\n\n");
            findingCategory(option.trim());
        } else {
            console.log("Silly! Please input words only. Try Again after 5 seconds.")
            setTimeout(filterCategory, 5000);
        }
    })
}

function sortChoices() {
    todo.question(`\n\n\nWelcome to the sortation feature of our Inventory Management System. 
        You can sort our data through the following:
        
        1. Sort items in ascending order by price.
        2. Sort items in descending order by price.
        3. Sort items in ascending order by quantity.
        4. Sort items in descending order by quantity.
        
        Please input your choice here: `, (option) => {
            sortingInventory(option.trim());
        })
}

function checkStocks() {
    console.log("\n\n\nCurrently checking our inventory....\n\n\n");

    setTimeout(outOfStock, 3000);
}

function applyDiscount() {

    todo.question("\n\n\nPlease enter the amount of the discount: (in decimal form e.g 0.10 = 10%)  ", (discount) => {
        const decimalFormat = /^0+\.\d{1,3}$/;
        const zeros = /^0+(\.0+)?$/;

        if (isNaN(discount.trim()) || discount == '' || discount == null || discount == undefined){
            console.log("Silly! Please input a number only in decimal form. Please try again after 5 seconds.");
            return setTimeout(applyDiscount, 5000);
        } else if (!decimalFormat.test(discount.trim())) {
            console.log("Oww! That seems wrong. Please input number that is not equal or greater than 100% and inputted number must be a maximum of 3 decimal places e.g 0.1, 0.12, and 0.123. Please try again after 5 seconds...");
            return setTimeout(applyDiscount, 5000);
        } else if (zeros.test(discount.trim())) {
            console.log(`\n\n\nSilly, ${discount} is like 0%. Please double check as you input a number. Please wait after 5 seconds...`);
            return setTimeout(applyDiscount, 5000);
        } else {
            return loop();
        }

        function loop() {
            todo.question("\n\n\nPlease enter how many items you want to be discounted: (Please input a number only)  ", (number) => {
                if (!isNaN(number.trim())){
                    if (number.trim() <= stocks.length){
                        let namesDiscounted = [];
                        let areExisted = false;
                        
                        forLoop(1, number);
                        function forLoop(ind, numbers) {
                            let index = ind;
                            namingItems(index, numbers)
                            function namingItems(i, numbers){
                                if (i > numbers){
                                    return proceedToProcess();
                                } else {
                                    console.log(i);
                                    todo.question(`Please enter the name of the item no. ${i} you want to be discounted:  `, (nameOfItem) => {
                                        let nameItem = nameOfItem.toLowerCase();

                                        console.log(nameItem);
                                        areExisted = stocks.some((elements) => {
                                            return elements.name === nameItem.trim();
                                        })
                                        console.log(areExisted);
                                        if(areExisted) {
                                            namesDiscounted.push(...stocks.filter(elements => elements.name === nameItem.trim()));
                                            let value = i + 1;
                                            return namingItems(value, numbers);
                                        } else {
                                            startingAgain();
                                            function startingAgain() {
                                                todo.question(`\n\n\n${nameItem} is not in our inventory. Do you want to continue with the current item or start again or continue but with the next item? [1 for continue with the current item & 2 for start again & 3 for continue but with the next item]  `, (startAgain) => {
                                                    if (startAgain.trim().toLowerCase() === '2'){
                                                        console.log("\n\n\nOk, please wait for a while...");
                                                        return setTimeout(applyDiscount, 5000);
                                                    } else if (startAgain.trim().toLowerCase() === '1'){
                                                        console.log("\n\n\nSo let's proceed with your current item...");
                                                        console.log(`\n\n\nPlease wait after 3 seconds and input again your item no. ${i} name`);
                                                        return namingItems(i, numbers);
                                                    } else if (startAgain.trim().toLowerCase() === '3'){
                                                        console.log(`\n\n\nAwww, it seems you forgot the name of the item or the item is not listed. Then, lets continue with your item no. ${i + 1}. Please wait after 3 seconds...`);
                                                        return namingItems(i + 1, numbers);
                                                    } else {
                                                        console.log("\n\n\nSilly! Please input within the choices. Try again after 3 seconds...");
                                                        return setTimeout(startingAgain, 3000);
                                                    }
                                                })
                                            }
                                        }
                                    })
                                }
                            }

                            function proceedToProcess() {
                                console.log("\n\n\nProcessing all the data received...");
                                console.log(discount);
                                console.log(...namesDiscounted);
                                discountedItem(Number(discount), ...namesDiscounted);
                            }
                        }
                    } else {
                        console.log("\n\nYour inputted number is greater than the length of your stocks. Please try over again!");
                        tryAgain();
                        function tryAgain() {
                            todo.question("\n\nDo you want to proceed again in discounted feature? [Y/N]  ", (ask) => {
                                if (ask.trim().toLowerCase() === "y") {
                                    console.log("\n\nNoted. Please wait a while...");
                                    return setTimeout(applyDiscount, 3000);
                                } else if (ask.trim().toLowerCase() === "n"){
                                    console.log("\n\nAwww, ok. Still processing your request...");
                                    return setTimeout(quit, 5000);
                                } else {
                                    console.log("\n\nSilly! Please input within the choices, try again after 5 seconds.");
                                    return setTimeout(tryAgain, 5000);
                                }
                            })
                        }
                    }
                } else {
                    console.log("\n\nSilly, that's not a number. Please try again after 5 seconds!");
                    return setTimeout(loop, 5000);
                }
            })
        }
    })
}

function transformUppercase() {
    console.log("\n\nPlease wait, the system is transforming all the item names to all UPPERCASE. Processing...\n\n\n");
    
    setTimeout(uppercaseStocks, 5000);
}

  
question();


