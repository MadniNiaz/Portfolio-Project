let home=document.querySelector(".home");
let about=document.querySelector(".about");
let icone=document.querySelector(".icone");
let goHome=document.querySelector('.goHome');

if(about){
    about.addEventListener('click',function(){
    window.location.href='About.html';
});
}

if(home){
    home.addEventListener('click',function(){
    window.location.href='index.html';
});
};

if(icone){
    icone.addEventListener('click',function(){
    window.location.href="contactForm.html";
});
};

if(goHome){
    goHome.addEventListener('click',function(){
    window.location.href='index.html';
    });
};
