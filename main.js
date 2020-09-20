var intertime;

function generateDateString(target, current) {
  var timeDiff = target.getTime() - current.getTime()
  document.getElementById("left").textContent = (timeDiff > 0) ? "還剩下" : "已經過了";

  if (timeDiff < 0) { timeDiff = -timeDiff }
  timeDiff -= (1) * (86400000);

  let lday = Math.ceil(timeDiff / 86400000);
  timeDiff -= (lday - 1) * 86400000;
  let lhour = Math.ceil(timeDiff / 3600000) - 1;
  timeDiff -= (lhour) * 3600000;
  let tminute = Math.ceil(timeDiff / 60000) - 1;
  timeDiff -= (tminute) * 60000;
  let lsecond = Math.ceil(timeDiff / 1000) - 1;

  var dateString = "";
  if (lday > 0) { dateString += lday + " 天 "; }
  if (lsecond < 10) { lsecond = "0" + lsecond; }
  if (tminute < 10) { tminute = "0" + tminute; }
  if (lhour >= 0 && lhour < 10) { lhour = "0" + lhour; }
  dateString += lhour + ":" + tminute + ":" + lsecond;

  return dateString
}

function update(rqt, reqtime) {
  var res = rqt.split("-"), rkt = reqtime.split(":");

  for (var i = 0; i < 3; i++) { res[i] = parseInt(res[i], 10); }
  for (var i = 0; i < 2; i++) { rkt[i] = parseInt(rkt[i], 10); }
  let target = new Date(res[0], res[1] - 1, res[2], rkt[0], rkt[1], 0);
  let current = new Date();
  document.getElementById("time").innerHTML = "<h1>" + generateDateString(target, current) + "</h1>";
  setTimeout(function () { update(rqt, reqtime); }, 1000);
}

function send() {
  var title = document.getElementById('titlestr').value;
  var date = document.getElementById('datestr').value;
  var time = document.getElementById('timestr').value;

  if (title == "") {
    document.getElementById("warnings").style.display = "block";
  } else {
    title = encodeURI(title);
    date = encodeURI(date);
    time = encodeURI(time);

    var outputString = "?title=" + title + "&date=" + date + "&time=" + time;
    location.href = outputString;
  }
}
