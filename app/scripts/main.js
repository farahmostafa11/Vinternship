//const { htmlPrefilter } = require("jquery");

console.log('\'Allo \'Allo!');

// Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });

// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });

let faq1 = document.getElementsByClassName('search-icon1')[0];
let faq2 = document.getElementsByClassName('search-icon2')[0];
let faq3 = document.getElementsByClassName('search-icon3')[0];
let cash = document.getElementsByClassName('circle')[0];
let visa = document.getElementsByClassName('circle')[1];
let closemodal = document.getElementsByClassName('close-modal')[0];
let close_address_modal = document.getElementsByClassName('close-modal')[1];
let checkmodal = document.getElementsByClassName('modal-container')[0];
let new_address = document.getElementsByClassName('sel-btn')[0];
let check_out_btn = document.getElementsByClassName('sel-btn')[1];
let check_modal = document.getElementsByClassName('modal-container')[0];
let address_modal = document.getElementsByClassName('modal-container')[1];
let text1 = document.getElementById('myinput');
console.log(text1);
console.log(faq1);
console.log(faq2);
console.log(faq3);
console.log(cash);
console.log(visa);
console.log(check_out_btn);
console.log(cash.style.backgroundColor);
console.log(visa.style.backgroundColor);

closemodal.addEventListener('click',close_modal);
function close_modal(){
  checkmodal.classList.remove('show');
}

close_address_modal.addEventListener('click',closeaddress_modal);
function closeaddress_modal(){
  address_modal.classList.remove('show');
}

new_address.addEventListener('click',show_address_modal)

function show_address_modal(){
  address_modal.classList.add('show');
}

check_out_btn.addEventListener('click',show_right_modal)

function show_right_modal(){
  check_modal.classList.add('show');
}


cash.addEventListener('click',greentowhite);

function greentowhite(){
    cash.style.backgroundColor= '#18A232';
    visa.style.backgroundColor= 'white';
}

visa.addEventListener('click',whitetogreen);

function whitetogreen(){
  if(visa.style.backgroundColor === 'white'){
    cash.style.backgroundColor= 'white';
    visa.style.backgroundColor= '#18A232';
  }
}
faq1.addEventListener('click', arrowtoggel);

function arrowtoggel() {
  faq1.classList.toggle('flaticon-up-chevron');
  faq1.classList.toggle('flaticon-down-chevron');

  if (faq2.classList.contains('flaticon-up-chevron')) {
    faq2.classList.toggle('flaticon-down-chevron');
    faq2.classList.toggle('flaticon-up-chevron');
  }
  if (faq3.classList.contains('flaticon-up-chevron')) {
    faq3.classList.toggle('flaticon-down-chevron');
    faq3.classList.toggle('flaticon-up-chevron');
  }
}

faq2.addEventListener('click', arrowtoggel2);

function arrowtoggel2() {
  faq2.classList.toggle('flaticon-down-chevron');
  faq2.classList.toggle('flaticon-up-chevron');
  if (faq1.classList.contains('flaticon-up-chevron')) {
    faq1.classList.toggle('flaticon-down-chevron');
    faq1.classList.toggle('flaticon-up-chevron');
  }
  if (faq3.classList.contains('flaticon-up-chevron')) {
    faq3.classList.toggle('flaticon-down-chevron');
    faq3.classList.toggle('flaticon-up-chevron');
  }
}
faq3.addEventListener('click', arrowtoggel3);

function arrowtoggel3() {
  faq3.classList.toggle('flaticon-down-chevron');
  faq3.classList.toggle('flaticon-up-chevron');
  if (faq2.classList.contains('flaticon-up-chevron')) {
    faq2.classList.toggle('flaticon-down-chevron');
    faq2.classList.toggle('flaticon-up-chevron');
  }
  if (faq1.classList.contains('flaticon-up-chevron')) {
    faq1.classList.toggle('flaticon-down-chevron');
    faq1.classList.toggle('flaticon-up-chevron');
  }
}

let noResults = document.getElementsByClassName('No-Results')[0];
let Results = document.getElementsByClassName('Results')[0];

const isEmpty = str => !str.trim().length;


text1.addEventListener('input', function () {
  if (isEmpty(this.value)) {
    console.log("NAME is invalid (Empty)")
  } else {
    console.log(`NAME value is: ${this.value}`);
    noResults.classList.add('none');
    Results.classList.remove('none');
  }
});





