const toggle = document.getElementById("toggle");
const refresh = document.getElementById("refresh");
const theme = window.localStorage.getItem("theme");

if (theme === "dark") document.body.classList.add("dark");
toggle.addEventListener("click", () => {      
    document.body.classList.toggle("dark");
    if (theme === "dark") {
        window.localStorage.setItem("theme", "light");
    } else window.localStorage.setItem("theme", "dark");
    });
    refresh.addEventListener("click", () => {
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

    
    
      