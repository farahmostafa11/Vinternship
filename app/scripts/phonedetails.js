let lastselectedcolor = document.getElementsByClassName('circle')[0];

for (let i = 0; i < 4; i++) {
    let test=document.getElementsByClassName('circle')[i];
    test.addEventListener('click',changeselectedcolor);
}

function changeselectedcolor(){
    lastselectedcolor.classList.remove('active-color');
    this.classList.add('active-color');
    lastselectedcolor=this;
}

let lastselectedphoto = document.getElementsByClassName('mini')[0];
let shownphoto=document.getElementsByClassName('main-photo')[0];

for (let i = 0; i < 4; i++) {
    let testphoto=document.getElementsByClassName('mini')[i];
    testphoto.addEventListener('click',changeselectedphoto);
}

function changeselectedphoto(){
    lastselectedphoto.classList.remove('active-photo');
    this.classList.add('active-photo');
    lastselectedphoto=this;
    shownphoto.style.backgroundImage=this.style.backgroundImage;
}