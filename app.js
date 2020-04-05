$ = jQuery;
var resistencia = $("#resistencia")[0].innerText
var maxHealth = 10*resistencia,
  curHealth = maxHealth;
$('.total').html(maxHealth + "/" + maxHealth);
$(".health-bar-text").html("100%");
$(".health-bar").css({
  "width": "100%"
});

function damage(d) {
  if (curHealth - d < 0) {
    curHealth = 0;
  } else {
    curHealth = curHealth - d;
  }
  applyChange(curHealth);
}

function heal(h) {
  console.log("heal", h)
  if (curHealth + h > maxHealth) {
    curHealth = maxHealth;
  } else {
    curHealth = curHealth + h;
  }
  applyChange(curHealth);
}

function applyChange(curHealth) {
  var a = curHealth * (100 / maxHealth);
  $(".health-bar-text").html(Math.round(a) + "%");
  $(".health-bar-red").css({
    'width': a + "%"
  }, 700);
  $(".health-bar").css({
    'width': a + "%"
  }, 500);
  $(".health-bar-blue").css({
    'width': a + "%"
  }, 300);
  $('.total').html(curHealth + "/" + maxHealth);
}
