let btns = document.querySelectorAll(".experience .box-container .box .slider-box .nav .btn");
let slides = document.querySelectorAll(".experience .box-container .box .slider-box .slider .images .img");
let jobs = document.querySelectorAll(".experience .box-container .box .slider-box .slider .jobs .job");
let dates = document.querySelectorAll(".experience .box-container .box .slider-box .slider .dates .date");
let contents = document.querySelectorAll(".experience .box-container .box .contents .content");
let expLinks = document.querySelectorAll(".experience .box-container .box .slider-box .slider .images a");
let counter = 0;


var sliderNav = function (manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active")
  });

  slides.forEach((slide) => {
    slide.classList.remove("active")
  });

  jobs.forEach((job) => {
    job.classList.remove("active")
  });

  dates.forEach((date) => {
    date.classList.remove("active")
  });

  contents.forEach((content) => {
    content.classList.remove("active")
  });

  expLinks.forEach((link) => {
    link.classList.remove("active")
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  jobs[manual].classList.add("active");
  dates[manual].classList.add("active");
  contents[manual].classList.add("active");
  expLinks[manual].classList.add("active");
}


btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    sliderNav(i);
    counter = i;
  });
});


// run function with right/left arrows
let sliderRightLeft = document.querySelectorAll(".experience .box-container .box .slider-box .nav i");

sliderRightLeft.forEach((btn, i) => {
  btn.addEventListener("click", () => {

    if (i == 1) {
      
      if (counter < btns.length - 1) {
        counter += 1;
        sliderNav(counter);
      };
    } else {
      if (counter > 0) {
        counter -= 1;
        sliderNav(counter);
      };
    };
  });
});

