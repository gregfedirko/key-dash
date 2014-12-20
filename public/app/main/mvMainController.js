angular.module('app').controller('mvMainController', function($scope) {

  $scope.courses = [
    {name: 'Test Course', featured: true, published: new Date()},
    {name: 'Test Course', featured: true, published: new Date()},
    {name: 'Test Course', featured: false, published: new Date()},
    {name: 'Test Course', featured: false, published: new Date()},
    {name: 'Test Course', featured: true, published: new Date()},
    {name: 'Test Course', featured: true, published: new Date()},
    {name: 'Test Course', featured: true, published: new Date()},
    {name: 'Test Course', featured: true, published: new Date()},
    {name: 'Test Course', featured: true, published: new Date()},
    {name: 'Test Course', featured: true, published: new Date()},
    {name: 'Test Course', featured: true, published: new Date()},
    {name: 'Test Course', featured: true, published: new Date()}
  ];

});