var money = +prompt("Ваш бюджет на месяц?");
var time = prompt("Введите дату в формате YY-MM-DD");

var spend_1 = prompt("Введите обязательную статью расходов в этом месяце");
var spend_1_cost = +prompt("Во сколько вам это обойдется?");

var spend_2 = prompt("Введите обязательную статью расходов в этом месяце");
var spend_2_cost = +prompt("Во сколько вам это обойдется?");

var appData = {
    money,
    timeData: time,
    expenses: {
        spend_1:spend_1_cost,
        spend_2:spend_2_cost,
    },
    optionalExpenses: {

    },
    income: {

    },
    saving: false,
};

alert(money/30);
