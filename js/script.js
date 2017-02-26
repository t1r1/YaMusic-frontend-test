(function () {
    var container = document.querySelector('.container');
    var mainContent = document.querySelector('.HolyGrail-body');
    // var hiddenButtonAside = document.querySelector('.is-hidden');
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
    asideButton.addEventListener('click', insertSidebarContent);
    contentButton.addEventListener('click', insertMainContent);

})();




