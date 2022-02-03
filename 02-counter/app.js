let span = document.querySelector("#value");
let counter = document.querySelector("#value").innerText;

document.addEventListener('click', function (e) {

    if (e.target.classList.contains('decrease')) {
        counter--

    } else if (e.target.classList.contains('reset')) {
        counter = 0
    } else if (e.target.classList.contains('increase')) {
        counter++
    }
    if (counter < 0) {
        span.style.color = "red";
    }
    if (counter > 0) {
        span.style.color = "green";
    }
    if (counter === 0) {
        span.style.color = "black";
    }
    span.innerText = counter

})

// let count = 0;
// let value = document.querySelector("#value");

// const btns = document.querySelectorAll(".btn");
// // queryselectorAll returns a nodelist on which
// //foreach can be applied

// btns.forEach(function (btn) {
//     btn.addEventListener("click", function (e) {
//         const styles = e.currentTarget.classList;

//         if (styles.contains('decrease')) {
//             count--
//         } else if (styles.contains('increase')) {
//             count++
//         } else {
//             count = 0
//         }
//         if (count > 0) {
//             value.style.color = "green";
//         }
//         if (count < 0) {
//             value.style.color = "red";
//         }
//         if (count === 0) {
//             value.style.color = "#444";
//         }
//         value.textContent = count


//     })
// })