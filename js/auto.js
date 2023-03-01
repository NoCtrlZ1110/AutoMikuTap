setTimeout(() => {
  document.querySelector('#bt_start > a').click();
  document.querySelector('#view > canvas').click();
}, 500);

setInterval(() => {
  $(document).ready(function () {
    var e = $.Event('keydown', {
      keyCode: Math.floor(Math.random() * 100) + 1,
    }); // right arrow key
    $(document).trigger(e);
    $(document).focus();
  });
}, 100);
