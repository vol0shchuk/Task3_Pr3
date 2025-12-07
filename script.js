function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

let result1 = getLastDayOfMonth(2020, 1);
let result2 = getLastDayOfMonth(2021, 1);

document.getElementById("result1").textContent = result1;
document.getElementById("result2").textContent = result2;
