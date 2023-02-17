let names = ["Guadalupe", "Ollie", "Aki"];

function writeCards(names, event) {
    let printCard = [];

    for (let i = 0; i < names.length; i++) {
        printCard.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return printCard;
}
function countDown(number) {
    while (number >= 0)
        console.log(number--);
}

console.log(writeCards(names, "surprise"));
countDown(10);
countDown(4);
