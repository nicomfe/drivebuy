'use strict';

/**
 * @ngdoc function
 * @name driveBuyApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the driveBuyApp
 */
angular.module('driveBuyApp')
  .controller('MainCtrl', function ($scope, registration) {


    $scope.submit = function(){
        $scope.showSuccess = true;
        if($scope.name !== undefined && $scope.email !== undefined){
            registration.registerInterest({name: $scope.name, email: $scope.email}).then(function(result){
                jQuery('.success-message').css('display','block');
                $scope.name ='' ;
                $scope.email= '' ;
                $scope.showSuccess = true;
                setTimeout(function() {
                    $('.success-message').fadeOut('slow');
                }, 4000);
            });
        }
    }

    jQuery( document ).ready(function() {

        scaleVideoContainer();

        initBannerVideoSize('.video-container .poster img');
        initBannerVideoSize('.video-container .filter');
        initBannerVideoSize('.video-container video');

        jQuery(window).on('resize', function() {
            scaleVideoContainer();
            scaleBannerVideoSize('.video-container .poster img');
            scaleBannerVideoSize('.video-container .filter');
            scaleBannerVideoSize('.video-container video');
        });

    });

    function scaleVideoContainer() {

        var height = jQuery(window).height() + 5;
        var unitHeight = parseInt(height) + 'px';
        jQuery('.homepage-hero-module').css('height',unitHeight);

    }

    function initBannerVideoSize(element){

        jQuery(element).each(function(){
            jQuery(this).data('height', jQuery(this).height());
            jQuery(this).data('width', jQuery(this).width());
        });

        scaleBannerVideoSize(element);

    }

    function scaleBannerVideoSize(element){

        var windowWidth = jQuery(window).width(),
        windowHeight = jQuery(window).height() + 5,
        videoWidth,
        videoHeight;

        jQuery(element).each(function(){
            var videoAspectRatio = jQuery(this).data('height')/jQuery(this).data('width');

            jQuery(this).width(windowWidth);

            if(windowWidth < 1000){
                videoHeight = windowHeight;
                videoWidth = videoHeight / videoAspectRatio;
                jQuery(this).css({'margin-top' : 0, 'margin-left' : -(videoWidth - windowWidth) / 2 + 'px'});

                jQuery(this).width(videoWidth).height(videoHeight);
            }

            jQuery('.homepage-hero-module .video-container video').addClass('fadeIn animated');

        });
    }
  });
