const buttonNo = document.querySelector('#no');
let buttonNoRect = buttonNo.getBoundingClientRect();
let buttonNoX = buttonNoRect.left + buttonNoRect.width / 2;
let buttonNoY = buttonNoRect.top + buttonNoRect.height / 2;

const slides = document.querySelectorAll(".carousel-slide");
let index = 0;


window.addEventListener('mousemove', evt => {
  let distanceX = evt.clientX - buttonNoX;
  let distanceY = evt.clientY - buttonNoY;
  let distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
  
  if (distance < 150) {
    buttonNo.style.display = 'none';
  } else {
    buttonNo.style.display = 'block';
  }
});

function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    index++;
    if (index > slides.length) {
      index = 1;
    }
    slides[index - 1].style.display = "block";
    setTimeout(showSlides, 5000);
  }
  
  showSlides();