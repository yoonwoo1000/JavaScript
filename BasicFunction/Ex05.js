
function gugu(dan) {
    for (let i = 1; i < 10; i++) {
        console.log(dan + " * " + i + " = " + dan * i);
    }
}
function guguAll() {
    for (let i = 2; i < 10; i++) {
        gugu(i);
    }
}

let dan = prompt("give me dan");

parseInt(dan);

