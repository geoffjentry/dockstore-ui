'use strict';

/**
 * @ngdoc directive
 * @name dockstore.ui.directive:tagEditor
 * @description
 * # tagEditor
 */
angular.module('dockstore.ui')
  .directive('tagEditor', function () {
    return {
      restrict: 'AE',
      controller: 'TagEditorCtrl',
      scope: {
      	tagObj: '=',
        containerId: '@',
      	containerPath: '@',
      	editMode: '=',
        addVersionTag: '&'
      },
      templateUrl: 'templates/tageditor.html',
      link: function postLink(scope, element, attrs) {
        scope.$watch('toggleModal', function(newValue, oldValue) {
          if (scope.toggleModal) {
            $('#tagEditorModal').modal('toggle');
            scope.toggleModal = false;
          }
        });
        scope.$watch('tagObj', function(newValue, oldValue) {
          if (newValue) scope.setDockerPullCmd();
        });
      }
    };
  });
