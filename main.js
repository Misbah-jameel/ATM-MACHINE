import inquirer from "inquirer";
console.log(`\n\t\t\t"==========WELCOME TO ATM===========ITS-MISBAH-JAMEEL================="\n\t`);
let myBalance = 500000; // Dollar
let pin_key = 55066;
let password = await inquirer.prompt([
    { name: "pin", message: "Enter your pin", type: "number" }
]);
if (password.pin == pin_key) {
    console.log("Welcome to your account");
    let operationAns = await inquirer.prompt({
        name: "operation",
        message: "Please select your operation",
        type: "list",
        choices: ["Cash balance", "Withdraw", "Fast cash"]
    });
    if (operationAns.operation == "Cash balance") {
        console.log(`Your current balance is: ${myBalance}`);
    }
    else if (operationAns.operation == "Withdraw") {
        let amount = await inquirer.prompt({
            name: "withdraw",
            message: "Enter the amount you'd like to withdraw:",
            type: "number"
        });
        if (amount.withdraw > myBalance) {
            console.log(`Unable to process transaction! Your total balance is: ${myBalance}`);
        }
        else {
            myBalance -= amount.withdraw;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
    else if (operationAns.operation == "Fast cash") {
        let directly_cash = await inquirer.prompt({
            name: "fast",
            message: "Please select your amount",
            type: "list",
            choices: ["5000", "10000", "15000", "20000"]
        });
        let selectedAmount = parseInt(directly_cash.fast);
        if (selectedAmount > myBalance) {
            console.log(`Unable to process transaction! Your total balance is: ${myBalance}`);
        }
        else {
            myBalance -= selectedAmount;
            console.log(`Your remaining balance is: ${myBalance}`);
        }
    }
}
else {
    console.log("Incorrect pin!!!");
}
