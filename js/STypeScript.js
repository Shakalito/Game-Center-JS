
function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('toggle-icon');
    const mainImage = document.getElementById('main-image-element');

    if (body.classList.contains('dark-mode')) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        icon.src = "photos/lightswitchON.png"; 
        mainImage.src = "photos/lightbulbON.png";  
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        icon.src = "photos/lightswitchOFF.png"; 
        mainImage.src = "photos/lightbulbOFF.png"; 
    }
}
