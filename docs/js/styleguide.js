$(document).ready(function(){
  $('.color-swatch').each(function(){
    var color = $(this).css('background-color');
    color = rgb2hex(color);
    $(this).append('<div class="text-uppercase">'+color+'</div>');
  });

  $('.code-example').each(function(){

    var a = $(this).html();
    $('<code></code>').appendTo($(this));
    var text = document.createTextNode(a);
    $('code', this).html(text);
  });
});

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
