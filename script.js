// Set the date we're counting down to
const countDownDate = new Date("Mar 29, 2024 00:00:00").getTime();

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
    document.body.style.backgroundImage = "url(./imgs/hb.jpg)";
    clearInterval(timer);
    document.getElementById("timer").innerHTML = "<div class='hb'>🎉🥳🥳🍻🥳🍺🍺🍺🍻🥳🍾🎊🎄🥳🍻🥳🥳🍺🍺🍺🍻🍻</div>";
    document.getElementById("info").innerHTML = "<span>ТРИИИИИДДЦЦЦЯЯЯЯЯЯЯТЬ!!!!!!!!!!!!!!!!!!!!!</span>"
  }
}, 1000);
