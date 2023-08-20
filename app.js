
function AnimeFruit() {
    let NewFruit = document.createElement("div");
    NewFruit.classList.add("fruit");
    const fruitItem = ["🍌", "🍎", "🍍", "🍐", "🍑", "🍓"];



    NewFruit.style.animationDuration = Math.random() * 1 + 1.4 + "s";
    NewFruit.innerHTML = fruitItem[Math.floor(Math.random() * fruitItem.length)];
    NewFruit.style.left = Math.random() * 100 + "%";

    document.body.appendChild(NewFruit);

    setTimeout(() => {
        NewFruit.remove();
    }, 2500)

}

setInterval(AnimeFruit, 100);

