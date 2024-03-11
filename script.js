// header toggle

let menubtn = document.getElementById("menubtn");

menubtn.addEventListener('click',function(e){
    document.querySelector('body').classList.toggle('mobile-nav-active');
    this.classList.toggle('fa-xmark')
})

// Typing Effect

let typed = new Typed(".auto-input", {
    strings: ['Web Development', 'Coding', 'Machine Learning', 'Automation'],
    typeSpeed: 100,   
    backSpeed: 100,       
    backDelay: 500,
    loop: true
});



