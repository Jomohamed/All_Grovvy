// List In Responsive
var dropdownMenu = document.querySelector(".the-dropdown-menu");
var toggleBtn = document.querySelector(".toggle-btn");

toggleBtn.onclick = function () {
    dropdownMenu.classList.toggle("open");
}

// Scroll To Top
let spanUP = document.querySelector(".up");

window.onscroll = function(){
    // console.log(this.scrollY);      // test
    if (this.scrollY >= 1200){
        spanUP.classList.add("show");
    }else {
        spanUP.classList.remove("show");
    }
}

spanUP.onclick = function(){
    window.scrollTo({
        top : 0,
        behavior : "smooth",
    });
};

// Change Background Color
let home = document.querySelector(".home");
let btnChange = document.getElementById("btnChange");

btnChange.onclick = function(){
    home.style.background = "#000";
}