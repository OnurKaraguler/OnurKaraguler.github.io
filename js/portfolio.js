let filter_btns = document.querySelectorAll('.portfolio .box-container .filter-menu ul li');
let totalCard = document.querySelectorAll('.portfolio .box-container .project-container .box');
let rightLeftBtn = document.querySelectorAll('.portfolio .box-container .filter-menu .slider-btn i');
let container_width = parseInt(window.getComputedStyle(document.querySelector('.portfolio .box-container .project-container')).width, 10);
let card_width = parseInt(window.getComputedStyle(document.querySelector('.portfolio .box-container .project-container .box')).width, 10);
let card_margin = parseInt(window.getComputedStyle(document.querySelector('.portfolio .box-container .project-container .box')).marginRight, 10);

function cardActivate (name) {
  let totalCard = document.querySelectorAll('.portfolio .box-container .project-container .' + name);
  
  totalCard.forEach((card) => {
    card.classList.add("active");
  });

  let totalActiveCard = document.querySelectorAll('.portfolio .box-container .project-container .active');
  let total_width = totalActiveCard.length * card_width + (totalActiveCard.length - 1) * card_margin;
  let width_diff = total_width - container_width;

  // move to the start if rightLeft arrows used
  for(const i of totalActiveCard) {
    i.style.left = '-' + 0 + 'px';
  }

  // Swipe Cards towards left or right
  if (total_width > container_width ) {
    rightLeftBtn[0].style.visibility = "visible";
    rightLeftBtn[1].style.visibility = "visible";
    if (width_diff > 0) {
      
      let l = 0;

      let right_mover = () =>{
        
        if (l < width_diff) {
          l += card_width + card_margin
          for(const i of totalActiveCard) {
            i.style.left = '-' + l + 'px';
          }
          }
        };

      let left_mover = () =>{
        
        if (l > 0) {
          l -= card_width + card_margin
          for(const i of totalActiveCard) {
            i.style.left = '-' + l + 'px';
          }
          }
        };
          
      rightLeftBtn[0].onclick = ()=>{left_mover();}
      rightLeftBtn[1].onclick = ()=>{right_mover();}

      // animation does not work when first clicked. Therefore, they are added.
      right_mover();
      left_mover();
    }
  } else {
    rightLeftBtn[0].style.visibility = "hidden";
    rightLeftBtn[1].style.visibility = "hidden";
  };
};


let portNav = function (i) {
  console.log(i)
  filter_btns.forEach((btn) => {
    btn.classList.remove("active")
  });

  filter_btns[i].classList.add("active");

  totalCard.forEach((card) => {
    card.classList.remove("active");
  });

  // which filter clicked
  if (i == 0) {
    portNavReturns = cardActivate("box")
    } 
    else if (i == 1) {
      portNavReturns = cardActivate("data")
    } 
    else if (i == 2) {
      portNavReturns = cardActivate("scrap")
    }
    else if (i == 3) {
      portNavReturns = cardActivate("pyqt")
    }
    else if (i == 4) {
      portNavReturns = cardActivate("product")
    }
    else if (i == 5) {
      portNavReturns = cardActivate("patent")
    }
    else if (i == 6) {
      portNavReturns = cardActivate("music")
    }
  }

// run function depends on filter
filter_btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    portNav(i);
  });
});

// run function depends on filter
cardActivate ("box")
