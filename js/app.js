let menu = document.getElementById("munu");
let sidBar = document.querySelector(".list_sid");
let header = document.getElementsByClassName("header");

menu.onclick = function () {
    sidBar.classList.toggle("act");
}


// menu.addEventListener('click', function(){
// document.getElementsByClassName("list_sid").classList.add("activ");
// })


// menu.onclick = function(){
//     sidBar.style.display = "visible";
//     console.log(sidBar)
// }
// header.onclick = function(){
//     sidBar.classList.remove("activ");
// }