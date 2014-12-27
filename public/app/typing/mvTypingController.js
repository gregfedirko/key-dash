(function() {
  angular
    .module('app')
    .controller('mvTypingController', ['$scope', '$sce', 'dataService', MainController]);

      function MainController($scope, $sce, dataService) {
        $scope.foo = function() {
          console.log('foo');
        }

        $scope.inputStack = [];
        $scope.promptStack = [];

        $scope.wordCount = 0;
        $scope.keyCount = 0;
        $scope.errorCount = 0;

        $scope.wordsPerMinute = null;
        $scope.wastedKeyCount = null;
        $scope.error = null;

        $scope.active = true;


        activate();

        function activate() {
          dataService.getData()
          .then(success, failure);

          function success(data) {
            initializeSession(data);
          }

          function failure(data) {
            initializeSession(data);
          }
        }

        function initializeSession(promptString) {
          $scope.wordCount = getWordCount(promptString);
          _.each(promptString, function(_char) {
            $scope.promptStack.push(_char);
          })
        }

        $scope.clock = {
          seconds: 0,
          active: false,
          start: function() {
            this.active = true;
            this.tick();
          },
          stop: function() {
            this.active = false;
          },
          tick: function() {
            var that = this;
            setTimeout(function() {
              that.seconds++;
              if (that.active) {
                that.tick();
                $scope.$digest();
              }
            }, 1000);
          }
        }
        
        $scope.keyDown = function($event) {
          if (!$scope.active) {
            return false;
          }

          // Handle DELETE
          if ($event.keyCode === 8) {
            $scope.keyCount++;
            $scope.inputStack.pop();
            $event.preventDefault();

            // Handle TAB
          } else if($event.keyCode === 9) {
            $event.preventDefault();
          }
        }

        $scope.keyPress = function($event) {
          if (!$scope.active) {
            return false;
          }
          $event.preventDefault();
          $scope.keyCount++;

          // if ($scope.inputStack.length === 0) {
          //   startSession();
          // }

          if ($scope.inputStack.length === $scope.promptStack.length) {
            endSession();
          }


          var newTuple = buildKeypressTuple($event);

          if (!newTuple[1]) {
            $scope.errorCount++;
          }

          $scope.inputStack.push(newTuple);
        }


        $scope.startSession = function() {
          $scope.active = true;
          $scope.clock.start();  
        }

        function endSession() {
          $scope.clock.stop();
          $scope.wordsPerMinute = getWordsPerMinute();
          $scope.wastedKeyCount = getWastedKeyStrokes();
          $scope.error = getError();
        }

        function getWordsPerMinute() {
          return $scope.wordCount/($scope.clock.seconds/60);
        }

        function getWastedKeyStrokes() {
          return $scope.keyCount - $scope.promptStack.length - 1;
        }

        function getError() {
          return ($scope.errorCount/$scope.promptStack.length);

        }

        function getWordCount(str) {
          return str.split(/\s+/).length;
        }

        function buildKeypressTuple($event) {
          var keyChar;
          var isKeyCorrect;
          var keyPressTuple;

          // Represent return key as a newline character
          if ($event.keyCode === 13) {
            keyChar = "\n";
          } else {
            keyChar = String.fromCharCode($event.keyCode);
          }

          isKeyCorrect = checkChar(keyChar, $scope.inputStack, $scope.promptStack);
          keyPressTuple = [keyChar, isKeyCorrect];
          return keyPressTuple;
        }

        function checkChar(_char, inputStack, promptStack) {
          if (_char === promptStack[inputStack.length]) {
            return true;
          }
          return false;
        }

      }
})();