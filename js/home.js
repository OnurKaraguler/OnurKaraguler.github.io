let homeJobs = document.querySelectorAll(".home .home__main .content .home__jobs .home__job");


let jobSlider = function (i) {
  homeJobs[i].classList.add("active");
}

let i = 0;

function jobLoop() {
  setTimeout(function() {
    homeJobs.forEach((job) => {
      job.classList.remove("active")
      // job.style.top = '100px';
    });
    jobSlider(i);

    i++;
    if (i < homeJobs.length) {
      jobLoop();
    } else {
      i = 0;
      jobLoop();
    }
  }, 3000)
}

jobLoop(); 


