//debounce function
function debounce(n,t,u){var e;return function(){var a=this,i=arguments,o=function(){e=null,u||n.apply(a,i)},r=u&&!e;clearTimeout(e),e=setTimeout(o,t),r&&n.apply(a,i)}};
//navbar function, which reads the scrollTop() to decide when to change class from regular to expanded
var updateNav = debounce(function(){
  var w = window.innerWidth;
  $(document).scroll(function(){
    if ($(window).scrollTop() > 40 && w > 540) {
      $('.nav-bar').addClass('nav-bar-scroll');
      $('#main-head').css('padding-top', '1vw').css('font-size','1.5vw');
      $('.contact-button').css('top','1.5vw');
    } else if ($(window).scrollTop() === 0 && w > 540) {
      $('.nav-bar').removeClass('nav-bar-scroll');
      $('#main-head').css('padding-top', '5vw').css('font-size','3vw');
      $('.contact-button').css('top','7.5vw');
    } else if ($(window).scrollTop() > 40 && w < 540) {
      $('.nav-bar').removeClass('nav-bar-scroll');
      $('#main-head').css('padding-top', '5vw').css('font-size','3vw');
      $('.contact-button').css('top','90%');
    } else if ($(window).scrollTop() === 0 && w < 540) {
      $('.nav-bar').removeClass('nav-bar-scroll');
      $('#main-head').css('padding-top', '5vw').css('font-size','3vw');
      $('.contact-button').css('top','90%');
    }
  });
}, 200, true);
window.addEventListener('scroll', updateNav);
/*
input validation: checks whether the textarea is deemed by Angular to have a value, and if true
it removes the disabled attribute from the submission button. If false, the button remains disabled.
The event handler runs this module every time a key is pressed.
*/
var lenCheck = debounce(function(){
  if($('md-input-container').hasClass('md-input-has-value') && $('.input').hasClass('ng-valid')){
    $('.activity-btn').removeAttr('disabled');
  } else if($('md-input-container').hasClass('md-input-invalid') || $('.input').hasClass('ng-invalid')) {
    $('.activity-btn').attr('disabled', 'disabled');
  }
}, 100, true);
window.addEventListener('keyup', lenCheck);
//resets scroll on document ready
$(document).ready(function() {
  $(this).scrollTop(0);
  $('.complete-scrim').hide();
});
//angularJS app
var app = angular.module('MintzApp', [
    'ngMaterial',
    'ngRoute',
    'ngAnimate',
    'ngResource',
    'ngTouch',
    'clio.scrolltracking'
    ]);
//ng-view configuration
app.config(function($routeProvider){
  $routeProvider
    .when('/',{templateUrl: 'introduction.html',controller: 'ModuleController as module',title: 'The Significance of 1492'})
    .when('/activity1',{templateUrl:'activity1.html',controller: 'Activity1Controller as activity',title: 'What did Columbus Look Like?'})
    .when('/activity2', {templateUrl: 'activity2.html',controller: 'Activity2Controller as activity',title: 'Columbus v. Vespucci'})
    .when('/activity3', {templateUrl: 'activity3.html',controller: 'Activity3Controller as activity',title: 'Columbus and Mythmaking'})
    .when('/activity4', {templateUrl: 'activity4.html',controller: 'Activity4Controller as activity',title: 'Judging Columbus'})
    .when('/columbus_movies', {templateUrl: 'columbus_movies.html',controller: 'ColumbusMovieController as movie',title: 'Columbus at the Movies'})
    .when('/primarysrc', {templateUrl: 'primarysrc.html',controller: 'PrimarySrcController as primary',title: 'Primary Sources for Module 3'})
});
//changes the page header + title on ng-view change
app.run(['$rootScope', function($rootScope){
  $rootScope.$on('$routeChangeSuccess', function(event, current, previous){
    $rootScope.pageTitle = current.$$route.title;
    $('#main-head').text(current.$$route.title);
  });
}]);
//content storage, double line break = \n\n, break quotes = \
app.controller('ModuleController', function() {
});
app.controller('ContactController', function($scope, $mdSidenav) {
  $scope.openLeftMenu = function() {
    $mdSidenav('left').toggle();
  };
  $scope.openRightMenu = function() {
    $mdSidenav('right').toggle();
  };
});
app.controller('EntryController', function($scope, $mdToast){
  $scope.submit = function($event) {
    $mdToast.showSimple('Your response has been submitted.');
    $('label').hide();
    $('.complete-scrim').show();
    $('.input').val('');
    $('.md-char-counter').text('0/500');
    $('.activity-btn').attr('disabled', 'disabled');
    var marker = (function(){
      return true;
    }());
  };
  $scope.scrim = function(){
    if(marker===true){
      return "true";
    } else {
      return "false";
    }
  };
});
app.controller('FABController', function(){
  this.direction = 'down';
  this.isOpen = 'false';
  this.mode = 'md-fling';
});
app.controller('Activity1Controller', function(){
});
app.controller('Activity2Controller', function(){
});
app.controller('Activity3Controller', function(){
});
app.controller('Activity4Controller', function(){
});
app.controller('ColumbusMovieController', function(){
});
app.controller('PrimarySrcController', function(){
});
//footer directive
app.directive('module-footer', function(){
  return {
    restrict: 'E',
    replace: true,
    templateUrl: 'templates/footer.html'
  }
});
//carousel directive
app.directive('carousel', function($timeout) {
  return {
    restrict: 'AE',
    replace: true,
    scope: {
      images: '='
    },
    link: function(scope, elem, attrs){
      scope.currentIndex = 0;
      //DYNAMIC CAPTIONS
      //the array stores the strings of captions in the order they appear on the carousel.
      var caption = [
          //activity 1 carousel
          'Christopher Colombus, head-and-shoulders portrait, facing slightly right. Photomechanical print : halftone, color. Created between 1890 and 1940. Library of Congress',
          'First landing of Columbus on the shores of the New World: At San Salvador, W.I., Oct. 12th 1492 lithograph. Published by Currier & Ives, c.1892. Library of Congress.',
          'Christopher Columbus, half-length portrait, facing slightly right. Photographic print (between 1900 and 1950) of a painting by Sebastiano, del Piombo, 1485-1547. Library of Congress.',
          'The landing of Columbus Oct. 11th 1492. Lithograph, hand-colored. Published by N. Currier, c. 1846. Library of Congress.',
          'The landing of Columbus 1492. Print. c. 1893 Jan. 26. Library of Congress.',
          'Christopher Columbus. Engraving by Johann Thedor DeBry. 16th century, Library of Congress.',
          'The landing of Columbus at San Salvador, October 12, 1492. Lithograph. Published by Currier & Ives, c. 1876. Library of Congress',
          //activity 4 carousel
          'John Vanderlyn, Landing of Christopher Columbus, U.S. Capitol, 1846.',
          'Diego Rivera, Disembarkation of the Spanish at Vera Cruz (Colonial Domination), National Palace, Mexico City, 1951.'
          ];
      scope.next = function(){
        //calculate the index of the current slide
        scope.currentIndex < scope.images.length -1 ? scope.currentIndex++ : scope.currentIndex = 0;
        //+1 to current index so that it displays a number starting from 1
        scope.cleanIndex = scope.currentIndex + 1;
        //adjust the number display to show the new clean index on click
        $('.number-display').text(scope.cleanIndex);
        //detect whether the page is pointed at activity 4
        if(window.location.href.indexOf('activity4') > -1) {
          //if activity 4, display the string in the array index + 7 (to compensate for the fact that there are only 2 slides)
          $('#caption').text(caption[scope.currentIndex + 7])
        } else {
          //if activity 1, display the string in the array's current index
          $('#caption').text(caption[scope.currentIndex]);
        }
      };
      scope.prev = function(){
        //as above
        scope.currentIndex > 0? scope.currentIndex -- : scope.currentIndex = scope.images.length -1;
        scope.cleanIndex = scope.currentIndex + 1;
        $('.number-display').text(scope.cleanIndex);
        //same as function in scope.next
        if(window.location.href.indexOf('activity4') > -1) {
          $('#caption').text(caption[scope.currentIndex + 7])
        } else {
          $('#caption').text(caption[scope.currentIndex]);
        }
      };
      scope.$watch('currentIndex', function(){
        //don't show images not of the current index
        scope.images.forEach(function(image){
          image.visible = false;
        });
        //only show images on current index
        scope.images[scope.currentIndex].visible = true;
      });
    },
    templateUrl: 'templates/carousel.html'
  };
});
//linked images for the carousel
app.controller('CarouselController', function($scope){
  $scope.a1_images = [{src: '1.jpg'},{src: '2.jpg'},{src: '3.jpg'},{src: '4.jpg'},{src: '5.jpg'},{src: '6.jpg'},{src: '7.jpg'}];
  $scope.a4_images = [{src: 'vanderlyn.jpg'},{src: 'rivera.jpg'}];
});