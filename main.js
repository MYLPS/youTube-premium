var BAR = new ProgressBar.Line(PRO, {
  strokeWidth: 4,
  easing: 'easeInOut',
  duration: 18000,
  color: '#ff0000',
  trailColor: '#000',
  trailWidth: 2,
  svgStyle: {width: '80%', height: '100%'},
  text: {
    style: {
      color: '#999',
      right: '0',
      top: '30px',
      padding: 0,
      margin: 0,
      transform: null
    },
    autoStyleContainer: false
  },
  step: (state, BAR) => {

    var CUR = Math.round(BAR.value() * 100);

    console.log("xD " + CUR)

    var TEX = "";

    if (CUR < 8) {
      TEX = "جارٍ الاتصال بحسابك على YouTube...";
    } else if (CUR >= 8 && CUR < 32) {
      TEX = "جارٍ إضافة YouTube Premium...";
    } else if (CUR >= 32 && CUR < 64) {
      TEX = "جارٍ حذف آثار التوليد...";
    } else if (CUR >= 64 && CUR < 96) {
      TEX = "جارٍ حفظ جميع التغييرات...";
    } else if (CUR >= 96) {
      TEX = "خطأ، تم اكتشاف بوت! قم بتمرير التحقق البشري للمتابعة. بعد الانتهاء، سيكون لحسابك عضوية Premium.";
    }

    BAR.setText(TEX);

  }
});

function YTP() {
  $(".YTP-button").addClass("disabled").attr("disabled", "true");
  $(".S1").fadeOut(500);
  setTimeout(function() {
    $(".S2").fadeIn(1000);
  }, 500)
}

function CON() {

  var LENG = $("#YTlength").val();

  if (LENG) {
    $(".CON-button").addClass("disabled").attr("disabled", "true");
    $(".S2").fadeOut(1000);

    setTimeout(function() {
      $(".S3").fadeIn(500);
      BAR.animate(1);
    }, 1000)

    setTimeout(function() {
      $(".VER-button").fadeIn(500);
    }, 17500)

  } else {
    alert("تأكد من اختيار مدة YouTube Premium المجانية.")
  }

}
