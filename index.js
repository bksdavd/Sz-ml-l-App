let count = 0;

const ertek = document.querySelector("#ertek");
const  gombok = document.querySelectorAll(".btn");

gombok.forEach(function (btn) {
    btn.addEventListener("click", function(e) {
        const styles = e.currentTarget.classList;

        if (styles.contains("csokkent")) {
            count--
        } else if (styles.contains("novel")) {
            count++
        } else if (styles.contains("ujra")) {
            count = 0;
        }

        if (count > 0) {
            ertek.style.color = "green";
        } else if (count < 0) {
            ertek.style.color = "red";
        } else if (count == 0 ) {
            ertek.style.color = "black";
        }

        ertek.textContent = count;
    })
})