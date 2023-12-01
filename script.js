
let openBtn = document.querySelector(".openbtn");
openBtn.addEventListener("click",openNav);

function openNav(){
    document.getElementById("myNav").style.width = "100%"
}

let closeBtn = document.querySelector(".closebtn");
closeBtn.addEventListener("click",closeNav);

function closeNav(){
    document.getElementById("myNav").style.width = "0"
}
