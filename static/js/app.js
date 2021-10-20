const registerButton = document.getElementsByClassName('cta-registration')[0];
const discordButton = document.getElementsByClassName('cta-discord')[0];

registerButton.addEventListener('click', () => {
    window.open("https://tinyurl.com/OGT-Registration", "_blank");
});

discordButton.addEventListener('click', () => {
    window.open("", "_blank");
});

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav-link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))