var App = {

	accessibleMenu: function(){
		$menu = $('.access-menu');
		$menuItem = $menu.find('> li > a');

		$subMenu = $('.access-submenu');
		$subMenuItem = $subMenu.find('> li > a');
		$submenuLastItem = $subMenu.find('> li:last-child > a');

		$menuItem.bind({
			focus: function(){
				$subMenu.removeClass('is-show');
				if($(this).next($subMenu)){
					$(this).next($subMenu).addClass('is-show');
				}
			},

			blur: function(){
				$subMenu.removeClass('is-show');
			}
		});

		$subMenuItem.bind({
			focus: function(){
				$(this).parent().parent().addClass('is-show');
			}
		});

		$submenuLastItem.bind({
			blur: function(){
				$subMenu.removeClass('is-show');
			}
		});
	},

	cancelAccessibleMenu: function(){
		$(document).click(function(){
			if($subMenu.hasClass('is-show')){
				$subMenu.removeClass('is-show');
			}
		});
	}

};

$(function(){
	App.accessibleMenu();
	App.cancelAccessibleMenu();
});
jQuery(document).ready(function ($) {

  $('#checkbox').change(function(){
    setInterval(function () {
        moveRight();
    }, 3000);
  });

	var slideCount = $('#slider ul li').length;
	var slideWidth = $('#slider ul li').width();
	var slideHeight = $('#slider ul li').height();
	var sliderUlWidth = slideCount * slideWidth;

	$('#slider').css({ width: slideWidth, height: slideHeight });

	$('#slider ul').css({ width: sliderUlWidth, marginLeft: - slideWidth });

    $('#slider ul li:last-child').prependTo('#slider ul');

    function moveLeft() {
        $('#slider ul').animate({
            left: + slideWidth
        }, 200, function () {
            $('#slider ul li:last-child').prependTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    function moveRight() {
        $('#slider ul').animate({
            left: - slideWidth
        }, 200, function () {
            $('#slider ul li:first-child').appendTo('#slider ul');
            $('#slider ul').css('left', '');
        });
    };

    $('a.control_prev').click(function () {
        moveLeft();
    });

    $('a.control_next').click(function () {
        moveRight();
    });

});
$(".hover").mouseleave(
  function() {
    $(this).removeClass("hover");
  }
);
$(document).ready(function(){
	$("#myCarousel").carousel({
		interval : false
	});
});
