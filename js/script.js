(function () {
    var container = document.querySelector('.container');
    var mainContent = document.querySelector('.HolyGrail-body');
    // var hiddenButtonAside = document.querySelector('.is-hidden');
    var signInButton = document.querySelector('.sign-in');
    console.log(signInButton);
    var popUp = document.querySelector('.modal-window');
    console.log(popUp, 'popUp');
    var popUpContent = document.querySelector('.modal-window__content');
    var asideButton = document.querySelector('.aside-button');
    var contentButton = document.querySelector('.content-button');
    var sidebarContentDiv = document.querySelector('.aside-content-test');
    var mainContentDiv = document.querySelector('.main-content-test');
    var setHeight = function () {
        container.style.height = window.innerHeight + 'px';
    };
    setHeight();
    var insertMainContent = function () {
        mainContentDiv.innerText = window.data.asideContent;

    };
    var insertSidebarContent = function () {
        sidebarContentDiv.innerText = window.data.asideContent;
        // hiddenButtonAside.style.display = 'block';
    };

    var showPopUp = function () {
        var xCoordinate = window.innerWidth * 0.5 + 'px';
        var yCoordinate = window.innerHeight * 0.5 + 'px';
        console.log(xCoordinate, yCoordinate);
        console.log(popUp);
        popUp.style.display = 'block';
        popUpContent.innerText = 'something';
        popUp.style.left = xCoordinate;
        popUp.style.top = yCoordinate;

    };
    asideButton.addEventListener('click', insertSidebarContent);
    contentButton.addEventListener('click', insertMainContent);
    signInButton.addEventListener('click', showPopUp);

})();




