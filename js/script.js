let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
//     searchForm.classList.remove('active');
//     cartItem.classList.remove('active');
}

// let searchForm = document.querySelector('.search-form');

// document.querySelector('#search-btn').onclick = () =>{
//     searchForm.classList.toggle('active');
//     navbar.classList.remove('active');
//     cartItem.classList.remove('active');
// }

// let cartItem = document.querySelector('.cart-items-container');

// document.querySelector('#cart-btn').onclick = () =>{
//     cartItem.classList.toggle('active');
//     navbar.classList.remove('active');
//     searchForm.classList.remove('active');
// }

// hide active frame
window.onload = function() {
  document.onclick = function(div) {
    // // alert(div.target.id);
    // if (div.target.id != 'search-btn') {
    //   searchForm.classList.remove('active');
    // }
    // if (div.target.id != 'cart-btn') {
    //   cartItem.classList.remove('active');
    // }
    if (div.target.id != 'menu-btn') {
      navbar.classList.remove('active');
    }
  };
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    // searchForm.classList.remove('active');
    // cartItem.classList.remove('active');
}