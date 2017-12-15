'use strict';

const $ = require('jquery');
const slider = require('jquery-ui/ui/widgets/slider');
const mouse = require('jquery-ui/ui/widgets/mouse');
const slick = require('slick-carousel');


$(document).ready(function() {

	var handle = $( "slider-ui__dragger" );
	var lastCount = 0;

  var sliderUi = $( ".slider-ui__range" ).slider({
    range: "min",
    min: 10,
    max: 80,
    value: 10,
    step: 2,
    stop: function (event, ui) {
      var count = ui.value;
      var currentSlide = function () {
	          switch (count) {
		        	case 10:
		        		return 0;
		        		break;
		        	case 12:
		        		return 1;
		        		break;
		        	case 14:
		        		return 2;
		        		break;
		        	case 16:
		        		return 3;
		        		break;
		        	case 18:
		        		return 4;
		        		break;
		        	case 20:
		        		return 5;
		        		break;
		        	case 22:
		        		return 6;
		        		break;
		        	case 24:
		        		return 7;
		        		break;
		        	case 26:
		        		return 8;
		        		break;
		        	case 28:
		        		return 9;
		        		break;
		        	case 30:
		        		return 10;
		        		break;
		        	case 32:
		        		return 11;
		        		break;
		        	case 34:
		        		return 12;
		        		break;
		        	case 36:
		        		return 13;
		        		break;
		        	case 38:
		        		return 14;
		        		break;
		        	case 40:
		        		return 15;
		        		break;
		        	case 42:
		        		return 16;
		        		break;
		        	case 44:
		        		return 17;
		        		break;
		        	case 46:
		        		return 18;
		        		break;
		        	case 48:
		        		return 19;
		        		break;
		        	case 50:
		        		return 20;
		        		break;
		        	case 52:
		        		return 21;
		        		break;
		        	case 54:
		        		return 22;
		        		break;
		        	case 56:
		        		return 23;
		        		break;
		        	case 58:
		        		return 24;
		        		break;
		        	case 60:
		        		return 25;
		        		break;
		        	case 62:
		        		return 26;
		        		break;
		        	case 64:
		        		return 27;
		        		break;
		        	case 66:
		        		return 28;
		        		break;
		        	case 68:
		        		return 29;
		        		break;
		        	case 70:
		        		return 30;
		        		break;
		        	case 72:
		        		return 31;
		        		break;
		        	case 74:
		        		return 32;
		        		break;
		        	case 76:
		        		return 33;
		        		break;
		        	case 78:
		        		return 34;
		        		break;
		        	case 80:
		        		return 35;
		        		break;
		        	default:
		        		0
		        		break;
	          }
        };

      $('[data-slick-index="' + currentSlide() + '"]').trigger('click');

      /*----------------------------*/
        var lantusDose = 300;
        var lantusPenShow = Math.ceil(count / 10.1);
        var lantusPenHidden = $('.lantus_pen').length - lantusPenShow ;
        var showDaysLantus = $('.lantus_days').find('is-active').length ;

        var toujeoDose = 450;
        var toujeoPenShow = Math.ceil(count / 16);
        var toujeoPenHidden = $('.toujeo_pen').length - toujeoPenShow ;
        var showDaysToujeo= $('.days_toujeo.is-active').length ;


        /*------- show pens------------*/
        if(count > lastCount){
          /*---- lantus -----*/
          if(count > 22){
     	      lantusPenShow = Math.ceil(count / 10.9);
     	      for (var i = 0; i <= lantusPenShow - 1 ; i++) {
     	        $('.lantus_pen').eq(i).removeClass('is-hidden');
     	        $('.lantus_pen_num').text(i + 1);
     	      }
          }  else {
            for (var i = 0; i <= lantusPenShow - 1 ; i++) {
              $('.lantus_pen').eq(i).removeClass('is-hidden');
              $('.lantus_pen_num').text(i + 1);
            }
          }

        	/*---- toujeo -----*/
          for (var i = 0; i <= toujeoPenShow - 1 ; i++) {
            $('.toujeo_pen').eq(i).removeClass('is-hidden');
            $('.toujeo_pen_num').text(i + 1);
          }

        } else {
          if(count == 32){
     	      $('.lantus_pen').eq((8 - lantusPenHidden - 1)).addClass('is-hidden');
            $('.lantus_pen_num').text(8 - lantusPenHidden - 1);
          }  else {
            $('.lantus_pen').eq((8 - lantusPenHidden)).addClass('is-hidden');
            $('.lantus_pen_num').text(8 - lantusPenHidden);
          }

          // $('.lantus_pen').eq((8 - lantusPenHidden)).addClass('is-hidden');
          // $('.lantus_pen_num').text(8 - lantusPenHidden);

          $('.toujeo_pen').eq((5 - toujeoPenHidden)).addClass('is-hidden');
          $('.toujeo_pen_num').text(5 - toujeoPenHidden);
        }
        lastCount = count; //get direction

      /*----------- toujeo days --------------------------------------*/
       var dayToujeo = $('.days_toujeo').length - ( $('.days_toujeo').length - Math.floor(toujeoDose / count)) - 1;
       var weekToujeo = Math.floor(dayToujeo / 7) - 1;

       $('.days_toujeo').removeClass('is-active');

       for (var i = 0; i <= dayToujeo; i++) {
           $('.days_toujeo').eq(i).addClass('is-active');
         }
       $('.toujeo_day_num').text(dayToujeo + 1);
       $('.toujeo_week_num').text(weekToujeo + 1 );

      /*----------- lantus days --------------------------------------*/
       var daylantus = $('.days_lantus').length - ( $('.days_lantus').length - Math.floor(lantusDose / count)) - 1;
       var weekLantus = Math.floor(daylantus / 7) - 1;

       $('.days_lantus').removeClass('is-active');

       for (var i = 0; i <= daylantus; i++) {
           $('.days_lantus').eq(i).addClass('is-active');
         }
       $('.lantus_days_num').text(daylantus + 1 );
       $('.lantus_week_num').text(weekLantus + 1 );

    }
  });

	var $red = 5;

  var $sl = $('.slick').slick({
    dots: false,
    infinite: false,
    slidesToShow: 9,
    swipeToSlide: true,
    centerMode: true,
    focusOnSelect: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 7,
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 5,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
          }
        }
      ]
  });

  var step;
  $('.slick').on('beforeChange', function(event, slick, currentSlide, nextSlide) {
     step = (nextSlide * 2) + 10 ;
     sliderUi.slider( "value", step);
     /*-------------------------------------------------*/

     $('.slick-slide').removeClass('before-active');
     var count = + ($('.slick-slide').eq(nextSlide).find('.slick__item').text());
     var beforeActiveSlide = $('.slick-slide').eq(nextSlide - 1).addClass('before-active');
    /*--------- add from slider-------------------------*/

    	$('.slider-ui__text').addClass('is-changed');
    	$('.slider-ui__pic').remove();
    	$('.slider-ui__desc').text('Суточная доза ' + count+ ' ЕД');
		   /*----------------------------*/
		     var lantusDose = 300;
		     var lantusPenShow = Math.ceil(count / 10.1);
		     var lantusPenHidden = $('.lantus_pen').length - lantusPenShow ;
		     var showDaysLantus = $('.lantus_days').find('is-active').length ;

		     var toujeoDose = 450;
		     var toujeoPenShow = Math.ceil(count / 16);
		     var toujeoPenHidden = $('.toujeo_pen').length - toujeoPenShow ;
		     var showDaysToujeo= $('.days_toujeo.is-active').length ;


		     /*------- show pens------------*/
		     if(count > lastCount){
		       /*---- lantus -----*/
		       if(count > 22){
		  	      lantusPenShow = Math.ceil(count / 10.9);
		  	      for (var i = 0; i <= lantusPenShow - 1 ; i++) {
		  	        $('.lantus_pen').eq(i).removeClass('is-hidden');
		  	        $('.lantus_pen_num').text(i + 1);
		  	      }
		       }  else {
		         for (var i = 0; i <= lantusPenShow - 1 ; i++) {
		           $('.lantus_pen').eq(i).removeClass('is-hidden');
		           $('.lantus_pen_num').text(i + 1);
		         }
		       }

		     	/*---- toujeo -----*/
		       for (var i = 0; i <= toujeoPenShow - 1 ; i++) {
		         $('.toujeo_pen').eq(i).removeClass('is-hidden');
		         $('.toujeo_pen_num').text(i + 1);
		       }

		     } else {
		       if(count == 32){
		  	      $('.lantus_pen').eq((8 - lantusPenHidden - 1)).addClass('is-hidden');
		         $('.lantus_pen_num').text(8 - lantusPenHidden - 1);
		       }  else {
		         $('.lantus_pen').eq((8 - lantusPenHidden)).addClass('is-hidden');
		         $('.lantus_pen_num').text(8 - lantusPenHidden);
		       }

		       // $('.lantus_pen').eq((8 - lantusPenHidden)).addClass('is-hidden');
		       // $('.lantus_pen_num').text(8 - lantusPenHidden);

		       $('.toujeo_pen').eq((5 - toujeoPenHidden)).addClass('is-hidden');
		       $('.toujeo_pen_num').text(5 - toujeoPenHidden);
		     }
		     lastCount = count; //get direction

		   /*----------- toujeo days --------------------------------------*/
		    var dayToujeo = $('.days_toujeo').length - ( $('.days_toujeo').length - Math.floor(toujeoDose / count)) - 1;
		    var weekToujeo = Math.floor(dayToujeo / 7) - 1;

		    $('.days_toujeo').removeClass('is-active');

		    for (var i = 0; i <= dayToujeo; i++) {
		        $('.days_toujeo').eq(i).addClass('is-active');
		      }
		    $('.toujeo_day_num').text(dayToujeo + 1);
		    $('.toujeo_week_num').text(weekToujeo + 1 );

		   /*----------- lantus days --------------------------------------*/
		    var daylantus = $('.days_lantus').length - ( $('.days_lantus').length - Math.floor(lantusDose / count)) - 1;
		    var weekLantus = Math.floor(daylantus / 7) - 1;

		    $('.days_lantus').removeClass('is-active');

		    for (var i = 0; i <= daylantus; i++) {
		        $('.days_lantus').eq(i).addClass('is-active');
		      }
		    $('.lantus_days_num').text(daylantus + 1 );
		    $('.lantus_week_num').text(weekLantus + 1 );


    /*---------end  add from slider-------------------------*/

  });
  // $('.slick').on('afterChange', function(event, slick, currentSlide) {
  //    step = (nextSlide * 2) + 10 ;
  //    sliderUi.slider( "value", step);
  // });


  // $( ".slider-ui__range" ).on('change', function () {
  //   sliderUi.slider( "value", this.selectedIndex + 1 );
  // });

  $( ".slider-ui__num" ).val( $( ".slider-ui__range" ).slider( "value" ) );

});


