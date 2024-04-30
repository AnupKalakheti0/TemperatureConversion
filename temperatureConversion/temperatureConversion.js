let inputBox = document.getElementById("inputBox")
let toFarenheite = document.getElementById("toFarenheite")
let toCelcius = document.getElementById("toCelcius")
let result = document.getElementById("result")
let temp
const convert = () => {
    if(toFarenheite.checked) {
        temp = Number(inputBox.value)
        temp = temp * 10 / 9
        result.textContent = temp.toFixed(1) + " F"
    }
    else if(toCelcius.checked) {
        temp = Number(inputBox.value)
        temp = temp * 9 / 10
        result.textContent = temp.toFixed(1) + " C"
    }
    else {
        result.textContent = "select a Unit"
    }
}
