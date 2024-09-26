function updateTime() {
  let headerTimeElement = document.querySelector("#header-time");
  let timeElement = headerTimeElement.querySelector(".time");
  timeElement.innerHTML = moment()
    .tz(`Africa/Mpumalanga`)
    .format("dddd Do YYYY, H:m:ss A");
}
setInterval(updateTime, 100);
