/* The script is making google maps' height equal to form's height */

function equalizer() {
    var wysForm = document.getElementById('contact-form').style.height;
    var mapa = document.getElementById('googleMap');
    
    mapa.style.height = wysForm;
}