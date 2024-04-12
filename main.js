import inquirer from "inquirer";
let myBalance = 10000; //dollar amount 
let pincode = 1234;
let pinAnswer = await inquirer.prompt({
    name: "pin",
    message: "Please Enter your Pin Number",
    type: "number",
});
if (pinAnswer.pin === pincode) {
    console.log("correct pin code ");
    let operationAns = await inquirer.prompt({
        name: "operation",
        message: "please select the option",
        type: "list",
        choices: ["withdraw", "check balance"]
    });
    if (operationAns.operation === "withdraw") {
        let withdrawamount = await inquirer.prompt([{
                name: "amount",
                message: "enter your amount",
                type: "number",
            }]);
        myBalance -= withdrawamount.amount;
        console.log("your remaining balance is " + myBalance);
    }
    else if (operationAns.operation === "check balance") {
        console.log("your balance is " + myBalance);
    }
}
else
    (console.log("incorrect pin code"));
