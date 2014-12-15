$('#burger').on('click', function() {
  $('#sideMenu').toggle();
});

$('.compose').on('click', function() {
  if ($('#writeMail').css('display') == 'none') {
    $('#writeMail').css('display', 'flex');
    $('.compose').addClass('writing');
    $('main').addClass('inactive');
    $('.functions').addClass('inactive');
    $( ".checkedNames" ).removeClass('checkedNamesActive')
  }
  else {
    $('#writeMail').css('display', 'none');
    $('.compose').removeClass('writing');
    $('main').removeClass('inactive');
    $('.functions').removeClass('inactive');
    $( ".checkedNames" ).addClass('checkedNamesActive');
  };
});

$('#tools').on('click', function() {
  if ($('#toolMenu').css('display') == 'none') {
    $('#toolMenu').css('display', 'flex');
    $('#tools').addClass('toolsOpen')
  }
  else {
    $('#toolMenu').css('display', 'none');
      $('#tools').removeClass('toolsOpen');
  };
})

$('.pars').on('click', function() {
  var content = $('~ div', this);
  $('#readMessage').empty();
  content.clone().appendTo($('#readMessage'));
  $('#read').css('display', 'flex');
  $('main').css({
      'z-index': '0',
  });
});

$('#close').on('click', function () {
  $('#readMessage').empty();
  $('#read').css('display', 'none');
});

$('section span label').on('click', function() {
  if($(this).hasClass('checkbox-checked')) {
    $(this).removeClass('checkbox-checked');
    var $parent = $(this).parent();
    $parent.parent().removeClass('checked');
  }
  else {
    $(this).addClass('checkbox-checked');
    var $parent = $(this).parent();
    $parent.parent().addClass('checked');
  };

});
$('.all').on('click', function() {
  if ($('.all').hasClass('checkbox-checked')) {
    $('span label').removeClass('checkbox-checked');
    var $parent = $('section input').parent();
    $parent.parent().removeClass('checked');
  }
  else {
    $(this).addClass('checkbox-checked');
    $('span label').addClass('checkbox-checked');
    var $parent = $('section input').parent();
    $parent.parent().addClass('checked');
  };
});

var n = $( ".checked" ).length;

$('label').on('click', function() {
  var n = $( ".checked" ).length;
  if (n > 0) {
    $('.checkedNames').addClass('checkedNamesActive');
    $( ".checkedNamesActive" ).html('<p>' + n + (n === 1 ? " message is" : " messages are") + " checked!</p>" );
  }
  else {
    $('.checkedNames').removeClass('checkedNamesActive');
    $('.all').removeClass('checkbox-checked');
  }
});
