const discordButton = document.getElementsByClassName('cta-discord')[0];
const sponsorButton = document.getElementsByClassName('cta-sponsor')[0];


discordButton.addEventListener('click', () => {
    window.open("https://discord.gg/spnFKpRwne", "_blank");
});

sponsorButton.addEventListener('click', () => { 
    window.open("https://www.instagram.com/weebshop.in/", "_blank");
});

/*==================== LINK ACTIVE ====================*/
const linkColor = document.querySelectorAll('.nav-link')

function colorLink(){
    linkColor.forEach(l => l.classList.remove('active'))
    this.classList.add('active')
}

linkColor.forEach(l => l.addEventListener('click', colorLink))