function filtrarRegiao() {

    var gymKanto = document.getElementsByName("kanto");
    var gymJohto = document.getElementsByName("johto");
    var opJohto = document.getElementById('johto')
    var opKanto = document.getElementById('kanto');

    if (opJohto.checked == true && opKanto.checked == false) {
        for (var i = 0; i < gymKanto.length; i++) {
            gymJohto[i].style.display = "inline-block";
            gymKanto[i].style.display = "none";
        }
    }
    else if (opJohto.checked == false && opKanto.checked == true) {
        for (var i = 0; i < gymKanto.length; i++) {
            gymKanto[i].style.display = "inline-block";
            gymJohto[i].style.display = "none";
        }
    }
    else {
        for (var i = 0; i < gymKanto.length; i++) {
            gymKanto[i].style.display = "inline-block";
            gymJohto[i].style.display = "inline-block";
        }
    }
}