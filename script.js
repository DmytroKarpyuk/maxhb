const textArr = [
  "З днем народження блять!",
  "Пока оддихай",
  "Встрічайся собі....",
  "Купуй собі всяякее",
  "Ти дорослий....",
  "Станим зробим...",
  "Ну при чом там пасіба..."
];

let imgIndex = 1;
let titleIndex = 0;

// Set the date we're counting down to
const countDownDate = new Date("Mar 29, 2024 00:00:00").getTime();

if (typeof document !== "undefined") {
  setInterval(() => {
    const title = document.getElementById("title");
    title.innerText = textArr[titleIndex];
    titleIndex = titleIndex + 1;
    if (titleIndex > 6) titleIndex = 0;
  }, 5000);
}

if (typeof document !== "undefined") {
  setInterval(() => {
    const body = document.body;
    body.style.backgroundImage = `url(./imgs/${imgIndex}.jpg)`;
    imgIndex = imgIndex + 1;
    if (imgIndex > 7) imgIndex = 1;
  }, 5000);
}

const timer = setInterval(function () {
  // Get today's date and time
  const now = new Date().getTime();

  // Find the distance between now and the count down date
  const distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // display
  document.getElementById("timer").innerHTML =
    '<div class="days"> \
<div class="numbers">' +
    days +
    '</div>дні</div> \
<div class="hours"> \
<div class="numbers">' +
    hours +
    '</div>години</div> \
<div class="minutes"> \
<div class="numbers">' +
    minutes +
    '</div>хвилини</div> \
<div class="seconds"> \
<div class="numbers">' +
    seconds +
    "</div>секунди</div> \
</div>";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(timer);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);
