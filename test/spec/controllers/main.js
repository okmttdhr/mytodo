'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(module('mytodoApp'));

  var MainCtrl;
  var scope;
  var localStorageService;
  var store;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope, _localStorageService_) {
    store = []; //clear the store before each test
    scope = $rootScope.$new();
    localStorageService = _localStorageService_;

    //mock localStorageService get/add
    spyOn(localStorageService,'get').and.callThrough();
    // callFake(function(key){
    //   return store[key];
    // });
    spyOn(localStorageService,'add').and.callThrough();
    // callFake(function(key, val){
    //   store[key] = val;
    // });

    MainCtrl = $controller('MainCtrl', {
      $scope: scope,
      localStorageService: _localStorageService_
    });

  }));

  it('should attach a list of todos to the scope', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('should add items to the list', function () {
    scope.todo = {
      title: 'Test 1'
    };
    scope.addTodo();
    expect(scope.todos.length).toBe(1);

    expect(localStorageService.get).toHaveBeenCalledWith('todos');
    // expect(localStorageService.get).toHaveBeenCalled('todos');
    // expect(localStorageService.add).toHaveBeenCalledWith('todos', jasmine.any(String));
    expect(localStorageService.get('todos')).toEqual(scope.todos);

  });

  it('should add then remove an item from the list', function () {
    scope.todo = {
      title: 'Test 1'
    };
    scope.addTodo();
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });
});
