$(document).ready(function () {
  var url_string = window.location.href;
  var url = new URL(url_string);
  var title = url.searchParams.get("title");
  var date = url.searchParams.get("date");
  var time = url.searchParams.get("time");

  if (title == null || date == null || time == null) {
    $("#settings").show();
    $("#countings").hide();
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    var hr = today.getHours();
    var min = today.getMinutes();

    if (dd < 10) { dd = '0' + dd }
    if (mm < 10) { mm = '0' + mm }
    today = yyyy + '-' + mm + '-' + dd;

    var curtime = hr + ":" + min;
    $("#datestr").val(today);
    $("#timestr").val(curtime);
  } else {
    $("#countings").show();
    $("#settings").hide();
    $(document).prop('title', title + ' - Loyiworks');
    $("#myTitle").text(title);
    update(date, time);
  }
});
