let on = false;
let btn = document.getElementById("toggleButton");
btn.addEventListener("click", changePic);
let pic = document.getElementById("gwen");

function changePic() {
    if (on) {     
        pic.src = "imgs/gwen-minimal-10k-e6.jpg"
        on = false;  
    }
    else {
        pic.src = "imgs/spider_man_flying_miles_morales_4k_5k_hd_miles_morales.jpg"
        on = true;
    }
}
