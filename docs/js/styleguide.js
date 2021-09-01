$(document).ready(function(){
  // Color Swatches.
  $('.color-swatch').each(function(){
    var color = $(this).css('background-color');
    color = rgb2hex(color);
    $(this).append('<div class="text-uppercase">'+color+'</div>');
  });

  // COde Examples.
  $('.code-example').each(function(){
    var a = $(this).html().trim();

    $('<div class="code-example-code"> <button class="copy-code"><i class="fas fa-copy"></i> Copy</button><figure></figure></div>').appendTo($(this));
    var text = document.createTextNode(a);
    $('.view-code').hide();
    $('figure', this).html(text);
  });

  $('.copy-code1').click(function(){
    $(this).next().html().select();
    document.execCommand('copy');
    document.body.removeChild(el);
  });
  $('.view-code').click(function(){
    $(this).next().show();
    $(this).next().next().show();
    $(this).hide();
  });
  new ClipboardJS('.copy-code', {
    target: function(trigger) {
        return trigger.nextElementSibling;
    }
  });
  // Anchors.
  var anchorSelector = $('.page-anchors').attr('data-anchorSelector');
  console.log(anchorSelector);
  page_anchors_js(anchorSelector);

  $('.accordion1 .accordion-item:gt(0) .accordion-body').hide();
});

function rgb2hex(rgb) {
    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}

function page_anchors_js(selector) {
  var count = 0;
  var anchorText = '';
  $(selector).each(function(){
		count++;
		var thisText = $(this).text();
		thisText = jQuery.trim(thisText);
		var anchorTextURL = thisText.replace(/ /g, "-");
		var anchorLink = '<a name="' + anchorTextURL + '" id="' + anchorTextURL + '"></a>';
		anchorText += '<li><a href="#' + anchorTextURL + '" class="button button-small button-gray-light"> ' + thisText + '</a></li>';
		$(this).before(anchorLink);
	});
	anchorText = '<div class="auto-anchor"><ul>' + anchorText + '</ul><div>';
  if (count > 0) {
    $(".page-anchors").html(anchorText);
    $(".anchors").fadeIn();
  }
  $('.anchors a').click(function(){
    var scrollTarget = $(this).attr("href");
    $("html, body").animate({scrollTop: ($(scrollTarget).offset().top)-100}, 300);
    return false;
  });
}
