function namta() {
    var num = parseInt(document.getElementById("num").value);
    var result = "";
    for (let i = 1; i <= 10; i++) {
        result += `${num} x ${i} = ${num * i}<br>`;
    }
    document.getElementById("result").innerHTML = result;
}   
