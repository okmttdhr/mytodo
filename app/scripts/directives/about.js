'use strict';

/**
 * @ngdoc directive
 * @name mytodoApp.directive:about
 * @description
 * # about
 */

var mytodoAppAboutDirective = angular.module('mytodoAppAboutDirective', []);

mytodoAppAboutDirective.directive('myComponent', function () {
  console.log('myComponent directive: in')
  return {
    restrict:'E',
    scope:{
      /* NOTE: Normally I would set my attributes and bindings
      to be the same name but I wanted to delineate between
      parent and isolated scope. */
      isolatedAttributeFoo:'@attributeFoo',
      isolatedBindingFoo:'=bindingFoo',
      // isolatedAttributeFoo:'@',
      // isolatedBindingFoo:'=',
      isolatedExpressionFoo:'&'
    }
  };
});

mytodoAppAboutDirective.directive('phone', function () {
  console.log('phone directive: in')
  return {
    scope:{
      dial: '&'
    },
    template: '<input type="text" ng-model="value">' + '<div class="button" ng-click="dial({message:value})">Call Home.</div>'
  };
});

mytodoAppAboutDirective.directive('sampleDirective', function () {
  console.log('sampleDirective directive: in')
  return {
    scope: {
      attributeNote: '@',
      bindingNote: '=',
      alertMessage: '&'
    },
    template:'<hr>' +

    '<p>get: {{attributeNote}}</p>' +
    '<div>set: <input type="text" ng-model="attributeNote"><i>// This does not update the parent scope.</i></div>' +
    '<hr>' +

    '<p>get: {{bindingNote}}</p>' +
    '<div>set: <input type="text" ng-model="bindingNote"><i>// This does update the parent scope.</i></div>' +
    '<hr>' +

    '<p>attributeNote: <button class="btn btn-primary" ng-click="alertMessage({note: attributeNote})">alert</button></p>' +
    '<p>bindingNote: <button class="btn btn-primary" ng-click="alertMessage({note: bindingNote})">alert</button></p>',
  };
});
