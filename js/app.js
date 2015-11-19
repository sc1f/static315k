// Create an app and a controller, matching the names from the
// ng-app and ng-controller attributes in index.html.  This app
// needs all the material design stuff to work, which is in a module
// named 'ngMaterial'.  So tell Angular to find that and insert it
// where appropriate.  (This is the 'dependency injection' process
// we were talking about earlier.)
var app = angular.module("MintzApp", ['ngMaterial']);

app.controller("ModuleController", function() {

});

// What do I do when I see a 'module' tag?
app.directive("module", function() {
  return {
    restrict: "E", // 'module' has to be an 'E'lement in the HTML document, not an attribute.
    templateUrl: "template-module.html", // the html template describing how to display a module.
    transclude: true,
    controller: function($scope) {
     $scope.name="Module 3: When Worlds Collide";
    }
  }
});

// Note that both activities use the same template - I was lazy and just reused
// the same for both.
app.directive("activity1", function() {
  return {
    restrict: "E",
    templateUrl: "template-activity.html",
    scope: {
    }
  }
});

app.directive("activity2", function() {
  return {
    restrict: "E",
    templateUrl: "template-activity.html",
    scope: {
    }
  }
});

//jQuery begins here
$(document).ready(function(){
  $('.nav-element').hover(function(){
    $(this).toggleClass('nav-element-active');
  })
  $(document).scroll(function(){
    if ($(window).scrollTop() > 300) {
      $('.nav-bar').removeClass('nav-bar').addClass('nav-bar-scroll');
      $('nav-element').removeClass('nav-element').addClass('nav-element-scroll');
    } else if ($(window).scrollTop()<300) {
      $('nav-bar').removeClass('nav-bar-scroll').addClass('nav-bar');
      $('nav-element').removeClass('nav-element-scroll').addClass('nav-element');
    }
    });
  });