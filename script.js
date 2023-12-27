let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');
let closetog = document.querySelector('#close-nav')

menu.onclick = () => {
    // menu.classList.toggle('bx-menu');
    // navlist.classList.toggle('open');
    console.log(navlist);
    // navlist.style.display="flex";
    navlist.style.right="0px";
};
closetog.onclick = () => {
    closetog.classList.toggle('close-nav');
    navlist.classList.toggle('close');
    console.log("hi");
    // navlist.style.display="none";
    navlist.style.right="-130px";

};
const sr = ScrollReveal ({
    distance : '65px',
    duration : 2600,
    delay :450,
    reset : true
});

sr.reveal('.hero-text' ,{ delay:200 , origin :'top'});
sr.reveal('.hero-img' ,{ delay:200 , origin :'top'});
sr.reveal('.icons' ,{ delay:200 , origin :'left'});
sr.reveal('.scroll' ,{ delay:200 , origin :'right'});
sr.reveal('.navlist' ,{ delay:200 , origin :'top'});

