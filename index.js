import inquirer from "inquirer";
let currencyrate = {
    USD: 1,
    PKR: 280,
    INR: 83.74,
    YUAN: 7.26,
    EURO: 0.92,
    CEP: 110.09
};
let Questions = await inquirer.prompt([
    {
        name: "currency",
        message: "Enter from currency",
        type: "list",
        choices: ["USD", "PKR", "INR", "YUAN", "EURO", "CEP"]
    },
    {
        name: "to",
        message: "Enter to currency",
        type: "list",
        choices: ["USD", "PKR", "INR", "YUAN", "EURO", "CEP"]
    },
    {
        name: "from",
        message: "Enter to currency",
        type: "number",
    }
]);
let currency = currencyrate[Questions.currency]; //dainamic aproch
let select = currencyrate[Questions.to];
let amount = Questions.from;
let basecurrency = amount / currency;
let converted = basecurrency * select;
console.log(converted);
