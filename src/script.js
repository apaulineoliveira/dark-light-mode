const TOGGLE = document.getElementById("toggle");
const REFRESH = document.getElementById("refresh");
const THEME = window.localStorage.getItem("theme");

if (THEME === "dark") document.body.classList.add("dark");
TOGGLE.addEventListener("click", () => {      
    document.body.classList.toggle("dark");
    if (THEME === "dark") {
        window.localStorage.setItem("theme", "light");
    } else window.localStorage.setItem("theme", "dark");
    });
    REFRESH.addEventListener("click", () => {
        window.location.reload();
    });
let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 2000)
function nextImage() {
    count++;
    if(count>4){
        count = 1;
    }
    document.getElementById("radio"+count).checked = true;
}

    
    
      