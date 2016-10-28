(function(){
    angular.module('NoteWrangler')
        .controller('NotesIndexController', function($http){
            var controller = this;

            $http.get('/data/notes.json')
                .success(function(data){
                    controller.notes = data;
                })
                .error(function(error){
                   console.log('Error in NotesIndexController', error);
                });
        });
}());