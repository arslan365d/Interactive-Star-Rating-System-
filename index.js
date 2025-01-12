let starsContainer = document.querySelector(".stars__container");
let stars = document.querySelector(".five-pointed-star")
let star1 = document.querySelector(".star1")
let star2 = document.querySelector(".star2")
let star3 = document.querySelector(".star3")
let star4 = document.querySelector(".star4")
let star5 = document.querySelector(".star5")
let rating = document.querySelector(".rating")
let feedBackH1 = document.querySelector(".feedback")
let howMayStars = 0

function mouseLeaveFunc(e){
  if (e.target.classList.contains("five-pointed-star")) {
    star1.style.setProperty('--star-color', 'white');
    star2.style.setProperty('--star-color', 'white');
    star3.style.setProperty('--star-color', 'white');
    star4.style.setProperty('--star-color', 'white');
    star5.style.setProperty('--star-color', 'white');
  }
}

starsContainer.addEventListener("mouseover", (e) => {
  howMayStars = 0
  starsContainer.addEventListener("mouseout", mouseLeaveFunc)
  if (e.target.classList.contains("five-pointed-star")) {
    
    feedBackH1.innerHTML = ""
    rating.innerHTML = ""

    star1.style.setProperty('--star-color', 'yellow');
    if (e.target.classList.contains("star2")) {
      star1.style.setProperty('--star-color', 'yellow');
      star2.style.setProperty('--star-color', 'yellow');
    }
    if (e.target.classList.contains("star3")) {
      star1.style.setProperty('--star-color', 'yellow');
      star2.style.setProperty('--star-color', 'yellow');
      star3.style.setProperty('--star-color', 'yellow');
    }
    if (e.target.classList.contains("star4")) {
      star1.style.setProperty('--star-color', 'yellow');
      star2.style.setProperty('--star-color', 'yellow');
      star3.style.setProperty('--star-color', 'yellow');
      star4.style.setProperty('--star-color', 'yellow');
    }

    if (e.target.classList.contains("star5")) {
      star1.style.setProperty('--star-color', 'yellow');
      star2.style.setProperty('--star-color', 'yellow');
      star3.style.setProperty('--star-color', 'yellow');
      star4.style.setProperty('--star-color', 'yellow');
      star5.style.setProperty('--star-color', 'yellow');
    }
  } 
})
starsContainer.addEventListener("mouseout", mouseLeaveFunc)

starsContainer.addEventListener("click", (e) => {
  starsContainer.removeEventListener("mouseout", mouseLeaveFunc)
  if (e.target.classList.contains("five-pointed-star")) {
    star1.style.setProperty('--star-color', 'white');
    star2.style.setProperty('--star-color', 'white');
    star3.style.setProperty('--star-color', 'white');
    star4.style.setProperty('--star-color', 'white');
    star5.style.setProperty('--star-color', 'white');
      star1.style.setProperty('--star-color', 'yellow');
      howMayStars =1
      if (e.target.classList.contains("star2")) {
        star1.style.setProperty('--star-color', 'white');
        star2.style.setProperty('--star-color', 'white');
        star3.style.setProperty('--star-color', 'white');
        star4.style.setProperty('--star-color', 'white');
        star5.style.setProperty('--star-color', 'white');
        star1.style.setProperty('--star-color', 'yellow');
        star2.style.setProperty('--star-color', 'yellow');
        howMayStars =2
      }
      if (e.target.classList.contains("star3")) {
        star1.style.setProperty('--star-color', 'white');
        star2.style.setProperty('--star-color', 'white');
        star3.style.setProperty('--star-color', 'white');
        star4.style.setProperty('--star-color', 'white');
        star5.style.setProperty('--star-color', 'white');
        star1.style.setProperty('--star-color', 'yellow');
        star2.style.setProperty('--star-color', 'yellow');
        star3.style.setProperty('--star-color', 'yellow');
        howMayStars =3
      }
      if (e.target.classList.contains("star4")) {
        star1.style.setProperty('--star-color', 'white');
        star2.style.setProperty('--star-color', 'white');
        star3.style.setProperty('--star-color', 'white');
        star4.style.setProperty('--star-color', 'white');
        star5.style.setProperty('--star-color', 'white');
        star1.style.setProperty('--star-color', 'yellow');
        star2.style.setProperty('--star-color', 'yellow');
        star3.style.setProperty('--star-color', 'yellow');
        star4.style.setProperty('--star-color', 'yellow');
        howMayStars =4
      }

      if (e.target.classList.contains("star5")) {
        star1.style.setProperty('--star-color', 'white');
        star2.style.setProperty('--star-color', 'white');
        star3.style.setProperty('--star-color', 'white');
        star4.style.setProperty('--star-color', 'white');
        star5.style.setProperty('--star-color', 'white');
        star1.style.setProperty('--star-color', 'yellow');
        star2.style.setProperty('--star-color', 'yellow');
        star3.style.setProperty('--star-color', 'yellow');
        star4.style.setProperty('--star-color', 'yellow');
        star5.style.setProperty('--star-color', 'yellow');
        howMayStars =5
    }
    rating.innerHTML = `Rating : ${howMayStars}/5`
   feedBackH1.innerHTML = `Thanks For Your FeedBack!`
  } 

})