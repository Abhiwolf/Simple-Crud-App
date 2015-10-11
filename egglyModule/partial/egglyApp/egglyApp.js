angular.module('egglyModule').controller('EgglyappCtrl', function ($scope) {
    $scope.categories = [
        {
            "id": 0,
            "name": "Development"
        },
        {
            "id": 1,
            "name": "Design"
        },
        {
            "id": 2,
            "name": "Exercise"
        },
        {
            "id": 4,
            "name": "Humor"
        }

    ];

    $scope.bookmarks = [
        {
            "id": 0,
            "title": "Angularjs",
            "url": "http://angularjs.org",
            "category": "Development"
        },
        {
            "id": 1,
            "title": "JavaScript",
            "url": "http://javascript.com",
            "category": "Exercise"
        },
        {
            "id": 2,
            "title": "Bootstrap",
            "url": "http://getbootstrap.com",
            "category": "Design"
        },
        {
            "id": 3,
            "title": "Json",
            "url": "http://facebpook.org",
            "category": "Humor"
        },
        {
            "id": 4,
            "title": "xml",
            "url": "http://xml.org",
            "category": "xmlorgnization"
        },
        {
            "id": 5,
            "title": "underscorejs",
            "url": "http://underscore.org",
            "category": "Development"
        },
        {
            "id": 6,
            "title": "yeoman",
            "url": "http://yeoman.org",
            "category": "Development"
        }
    ];

    //default state
    $scope.isCreating = false;
    $scope.isEditing = false;
    $scope.isbookmarkcreating = false;
    //Enter create state


    $scope.currentategory = null;
    $scope.setCurrentCategory = function (itemCategory) {
        if (itemCategory !== null) {
            $scope.isCreating = true;
        } else {
            $scope.isCreating = false;
        }
        $scope.currentategory = itemCategory;
        $scope.cancelCreating();
        $scope.cancelEditing();
    };

    //check active class
    $scope.isCurrentCategory = function (category) {
        return $scope.currentategory !== null && category.name === $scope.currentategory.name;
    };

    //show create bookmark
    $scope.showCreateBookMark = function () {
        $scope.isCreating = true;
        $scope.isEditing = false;
    };

    $scope.startCreating = function () {
        $scope.isbookmarkcreating = true;
        resertCreatForm();
    };

    //cancel creating 
    $scope.cancelCreating = function () {
        $scope.isbookmarkcreating = false;
    };

    function resertCreatForm() {
        $scope.newBookmark = {
            title: '',
            url: '',
            category: $scope.currentategory
        };
    }
    $scope.createBookmark = function (bookmark) {
        console.log($scope.bookmarks);
        console.log(bookmark);
        bookmark.id = $scope.bookmarks.length;
        $scope.bookmarks.push(bookmark);
        console.log($scope.bookmarks);
        resertCreatForm();
    };

    $scope.cancelEditing = function () {
        $scope.isEditing = false;
    };

    $scope.startEditing = function () {
        $scope.isCreating = false;
        $scope.isEditing = true;
    };
    $scope.editedBookmark = null;
    $scope.setEditedBookmark = function (bookmark) {
        console.log(bookmark);
        $scope.editedBookmark = bookmark;
    };

    //update bookmark
    $scope.updatebookmark = function (bookmark) {
        var index = _.indexOf($scope.bookmarks, function (value) {
            return value.id === bookmark.id;
        });
        console.log(index);
        $scope.bookmarks[index] = bookmark;
        $scope.editedBookmark = null;
        $scope.isEditing = false;
    };

    //delete bookmark
    $scope.deleteBookmark = function (book, index) {
        var indexs = _.indexOf($scope.bookmarks, _.findWhere($scope.bookmarks, {
            "id": index
        }));
        $scope.bookmarks.splice(indexs, 1);
    };
});