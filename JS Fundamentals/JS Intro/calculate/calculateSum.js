function calculate() {
    let num1 = document.getElementById("numOne").value;
    let num2 = document.getElementById("numTwo").value;
    let result = Number(num1) + Number(num2);
    document.getElementById("sum").value = result;
}
