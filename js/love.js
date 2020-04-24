function toggleOverview(e) {
  if (e.progress === 45 && e.fragmentIndex === 2) {
    setTimeout(function () {
        Flowtime.showOverview(true)
    }, 2000)

  }
}

Flowtime.showProgress(true);
Flowtime.addEventListener("flowtimenavigation", toggleOverview, false)
Flowtime.start();
Flowtime.autoplay(true, 1000)
$(function() {
    var bgmMusic = document.getElementById("bgmMusic");
    $("#on").click(function() {
        bgmMusic.pause();
        $("#on").hide(200);
        $("#off").css({ "display": "inline-block" }, 300);
    });
    $("#off").click(function() {
        bgmMusic.play();
        $("#off").hide(200);
        $("#on").css({ "display": "inline-block" }, 300);
    });
});
