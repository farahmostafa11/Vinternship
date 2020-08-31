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