const container = document.querySelector(".container");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const btnGrp = document.querySelector(".btn-group");

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Yayy, see you tomorrow!";
  gif.src = "second.gif";
  yesBtn.innerHTML = "Okay";
  noBtn.style.display = "none";
  yesBtn.addEventListener("click", () => {
    question.innerHTML = "Your Gift Ready!";
    gif.src = "gift.jpg";
    noBtn.style.display = "none";
    yesBtn.innerHTML = "Thanks";
    yesBtn.addEventListener("click", () => {
      question.innerHTML = "Byy!";
      gif.src = "third.gif";
      noBtn.style.display = "none";
      yesBtn.style.display = "none";
    });
  });
});

noBtn.addEventListener("click", () => {
  question.innerHTML = "Ok, Let's Go For Join Bajrand Dal";
  gif.src = "third.gif";
  noBtn.style.display = "none";
  yesBtn.style.display = "none";
  // const noBtnRect = noBtn.getBoundingClientRect();
  // const x = window.innerWidth - noBtnRect.width;
  // const y = window.innerHeight - noBtnRect.height;

  // const randomX = Math.floor(Math.random() * x);
  // const randomY = Math.floor(Math.random() * y);

  // noBtn.style.left = randomX + "px";
  // noBtn.style.top = randomY + "px";
});
