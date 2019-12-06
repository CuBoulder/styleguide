$(document).ready(function(){
  $('.color-swatch').each(function(){
    var color = $(this).css('background-color');
    color = rgb2hex(color);
    $(this).append('<div class="text-uppercase">'+color+'</div>');
  });

  $('.code-example').each(function(){

    var a = $(this).html();
    $('<div class="code-example-code"><button class="copy-code"><i class="fa fa-copy"></i> Copy</button><figure></figure></div>').appendTo($(this));
    var text = document.createTextNode(a);
    console.log(text);
    $('figure', this).html(text);
  });

  $('.copy-code1').click(function(){
    $(this).next().html().select();
    document.execCommand('copy');
    document.body.removeChild(el);
  });
  new ClipboardJS('.copy-code', {
    target: function(trigger) {
        return trigger.nextElementSibling;
    }
  });
});

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
