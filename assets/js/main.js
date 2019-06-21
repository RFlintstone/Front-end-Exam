$i = 0;
setInterval(change, 3000);

function change() {
    $i++;
    image();
}

function image() {
    if ($i == 4) {
        $i = 0;
    }

    if ($i == 0) {
        document.getElementById("banner").innerHTML = `<img id="banner" src="assets/img/auto-banner.jpg" alt="">`;
    } else if ($i == 1) {
        document.getElementById("banner").innerHTML = `<img id="banner" src="assets/img/car2.jpg" alt="">`;
    } else if ($i == 2) {
        document.getElementById("banner").innerHTML = `<img id="banner" src="assets/img/car3.jpg" alt="">`;
    } else if ($i == 3) {
        document.getElementById("banner").innerHTML = `<img id="banner" src="assets/img/car4.jpg" alt="">`;
    }
}