"use strict";

var scrolltracking = angular.module('clio.scrolltracking', []);

scrolltracking.directive('scrolltracking', function() {
  return {
    restrict: 'E',
    templateUrl: 'templates/scrolltracking.html',
    controller: ['$scope', function($scope) {

      var localStorageTest = function(){
        try {
          var test_val = 'test';
          localStorage.setItem(test_val, test_val);
          localStorage.removeItem(test_val);
          return true;
        } catch(e) {
          return false;
        }
      }
      var has_local_storage = localStorageTest();

      //scroll tracking, which takes the scrollTop() and pushes it to localStorage for later use
      var debounce = function(n,t,u){var e;return function(){var a=this,i=arguments,o=function(){e=null,u||n.apply(a,i)},r=u&&!e;clearTimeout(e),e=setTimeout(o,t),r&&n.apply(a,i)}};
      var scrollPos = {};
      var updateScroll = debounce(function(){
        $(document).scroll(function(){
          scrollPos.position = $(window).scrollTop();
          localStorage.setItem('scrollPosition', scrollPos.position);
        });
      }, 200, true);
      window.addEventListener('scroll', updateScroll);

      $scope.yes = function($event){
        trackAction();
        $('#scrollTrack').hide();
      };
      $scope.no = function($event){
        $('#scrollTrack').hide();
      }
      //tracker implementation, inspired by PaulBot from http://www.bloomberg.com/graphics/2015-paul-ford-what-is-code/ the tracker grabs the localStorage value of scrollTop, and uses it to decide whether the card prompting the user actually shows up or not. The click handlers are implemented above, and the code below simply checks the position in localStorage and returns true if it is above 0, thus allowing the card to show.
      var position = has_local_storage ? localStorage.getItem('scrollPosition') : 0;
      var trackAction = function(){$(window).scrollTop(position);};
      $scope.position = function($event){
        if(position > 0){
          return "true";
        }
        else if(position === 0){
          return "false";
        }
      };
    }]
  };
});


