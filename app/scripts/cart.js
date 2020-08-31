let closemodal = document.getElementsByClassName('close-modal')[0];
let close_address_modal = document.getElementsByClassName('close-modal')[1];
let checkmodal = document.getElementsByClassName('modal-container')[0];
let new_address = document.getElementsByClassName('sel-btn')[0];
let check_out_btn = document.getElementsByClassName('sel-btn')[1];
let check_modal = document.getElementsByClassName('modal-container')[0];
let address_modal = document.getElementsByClassName('modal-container')[1];
let cashcircle = document.getElementsByClassName('circle')[0];
let visacircle = document.getElementsByClassName('circle')[1];
let cash = document.getElementsByClassName('check-cont')[0];
let visa = document.getElementsByClassName('check-cont')[1];



closemodal.addEventListener('click',close_modal);
function close_modal(){
    check_modal.classList.remove('show');
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
    cashcircle.style.backgroundColor= '#18A232';
    visacircle.style.backgroundColor= 'white';
}

visa.addEventListener('click',whitetogreen);

function whitetogreen(){
  if(visacircle.style.backgroundColor === 'white'){
    cashcircle.style.backgroundColor= 'white';
    visacircle.style.backgroundColor= '#18A232';
  }
}