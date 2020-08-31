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


let text1 = document.getElementById('myinput');

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









