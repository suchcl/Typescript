// console.time("timer");
// let ul = document.getElementById("ul");
// for (let i = 0; i < 1000; i++) {
//     let li = document.createElement("li");
//     li.innerText = i;
//     ul.appendChild(li);
// }
// ul.addEventListener("click", function (event) {
//     let e = event || window.event;
//     let target = e.target || e.srcElement;
//     if (target.nodeName.toLowerCase() === "li") {
//         console.log(target.innerHTML);
//     }
// });
// console.timeEnd("timer"); // 2ms左右

console.time("timer2");
let ul = document.querySelector("#ul");
let frag = document.createDocumentFragment();
for (let i = 0; i < 1000; i++) {
    let li = document.createElement("li");
    li.innerHTML = i;
    frag.appendChild(li);
}
ul.appendChild(frag);
ul.addEventListener("click", function (event) {
    let e = event || window.event;
    let target = e.target || e.srcElement;
    if (target == e.nodeName.toLowerCase() === "li") {
        console.log(target.innerHTML);
    }
});


console.timeEnd("timer2");