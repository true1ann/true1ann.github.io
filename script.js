document.addEventListener("DOMContentLoaded", function() {
    console.log('Thank you for visiting! :3')
    document.getElementById("header").textContent = document.title;
    document.getElementById("footer").textContent = document.title;

    const links = [
        { name: 'discord', link: 'https://discord.com/invite/n8WvR8Be9w' },
        { name: 'matrix', link: 'https://matrix.to/#/@true1ann:matrix.org' },
        { name: 'fedi', link: 'https://the.gayest.dev/@true1ann' },
        { name: 'xtwitter', link: 'https://x.com/true1ann' },
        { name: 'gitHub', link: 'https://github.com/true1ann' },
        { name: 'gitanet', link: 'https://git.asper.anet/true1ann' },
        { name: 'telegram', link: 'https://t.me/true1ann' }
    ];
    
    // Loop through the links array and add event listeners
    links.forEach(platform => {
        document.querySelector(`.invite.${platform.name.toLowerCase()}`).addEventListener('click', function() {
            window.open(platform.link, '_blank');
        });
    });   
    
    const projects = [
        { name: 'crst', link: 'https://github.com/true1ann/cs' },
        { name: 'anet', link: 'https://github.com/true1ann/anet' },
        { name: 'self', link: 'https://github.com/true1ann/true1ann.github.io' },
        { name: 'awalls', link: 'https://git.asper.anet/true1ann/awalls' }
    ];
    
    // Loop through the links array and add event listeners
    projects.forEach(project => {
        document.querySelector(`.project.${project.name.toLowerCase()}`).addEventListener('click', function() {
            window.open(project.link, '_blank');
        });
    });

    const mirrors = [
        { name: 'pub', link: 'https://ann.is-a.dev' },
        { name: 'onion', link: 'http://mkkwvsxafx467e2st36ii6tnpvoiqamu43dwa5ec2wpqawmjbmoujjyd.onion'},
        { name: 'anet', link: 'https://ann.anet' }
    ];
    
    // Loop through the links array and add event listeners
    mirrors.forEach(mirror => {
        document.querySelector(`.mirror.${mirror.name.toLowerCase()}`).addEventListener('click', function() {
            window.open(mirror.link, '_blank');
        });
    }); 
});
