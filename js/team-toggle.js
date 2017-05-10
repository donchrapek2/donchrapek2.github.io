function toggle() {
    var napis = document.getElementById('toggle-napis');
    var members = document.getElementById('team-members');
    
    if (members.style.display === "none") {
        members.style.display = "inline-block";
        napis.innerHTML = "&uarr; Hide team &uarr;"
    } else {
        members.style.display = "none";
        napis.innerHTML = "&darr; Meet our team &darr;"
    }
}