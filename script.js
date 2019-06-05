let money,time;
function start(){
    while(isNaN(money) || money == "" || money == null){
        money = +prompt("Ваш бюджет на месяц?",'');
        time = prompt("Введите дату в формате YY-MM-DD",'');
    }
}
start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true,
};
function ChoseExpenses(){
    for (let i = 0; i < 2; i++){
        var spend = prompt("Введите обязательную статью расходов в этом месяце", ''),
        spend_cost = prompt("Во сколько вам это обойдется?",'');
        if(typeof(spend) === "string" && typeof(spend) != "null" && typeof(spend_cost) != "null"
        && spend != '' && spend_cost != '' && spend.length < 50){
            console.log("done");
            appData.expenses[spend] = spend_cost;
        }else{
    
        }
    }
}
function ChoseOptExpenses(){
    for(var i = 1 ;i <= 3;i++){
        var expens_num = i;
        var expens_cost  = prompt("Cтатья необязательных расходов?")
        appData.optionalExpenses[expens_num] = expens_cost;
    }
}
ChoseExpenses();
ChoseOptExpenses();
console.log(appData);

/* 
    let i = 0;
    while(i < 2){
        var spend = prompt("Введите обязательную статью расходов в этом месяце", ''),
        spend_cost = prompt("Во сколько вам это обойдется?",'');
        if(typeof(spend) === "string" && typeof(spend) != "null" && typeof(spend_cost) != "null"
        && spend != '' && spend_cost != '' && spend.length < 50){
            console.log("done");
            appData.expenses[spend] = spend_cost;
        }else{

        }
        i++
    }

    let i = 0;
    do{
        var spend = prompt("Введите обязательную статью расходов в этом месяце", ''),
        spend_cost = prompt("Во сколько вам это обойдется?",'');
        if(typeof(spend) === "string" && typeof(spend) != "null" && typeof(spend_cost) != "null"
        && spend != '' && spend_cost != '' && spend.length < 50){
            console.log("done");
            appData.expenses[spend] = spend_cost;
        }else{

        }
        i++
    } while(i < 2)
    */
function detectDayBudget(){
    appData.moneyPerDay = (appData.budget/30).toFixed();
    document.write("<p> Ежедневный бюджет: " + appData.moneyPerDay + "</p>");
}
function detectLevel(){
    if(appData.moneyPerDay < 100){
        console.log("Минимальный уровень достатка");
    }
    else if (appData.moneyPerDay >= 100 && appData.moneyPerDay <=2000){
        console.log("Сердний уровень достатка");
    }
    else if(appData.moneyPerDay > 2000){
        console.log("Высокий уровень достатка");
    }  
    else{
        console.log("Произошла ошибка");
    }
    
}
function CheckSevings(){
    if(appData.savings == true){
        let save = +prompt("Какова сумма накоплений?"),
        percent = +prompt("Под какой процент?");

        appData.mothIncome = (save/100/12*percent).toFixed();
        document.write("<p>Доход в месяц с вашего депозита: " + appData.mothIncome +"</p>");
    }
}
detectDayBudget();
detectLevel();
CheckSevings();
