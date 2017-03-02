'use strict';

window.content = (function () {
    var sidebar = document.querySelector('.sidebar');
    var sidebarContentDiv = document.querySelector('.aside-content-test');
    var mainContentDiv = document.querySelector('.main-content-test');
    var asideButton = document.querySelector('.aside-button');
    var rectBefore = sidebarContentDiv.getBoundingClientRect();
    console.log(rectBefore);
    var contentButton = document.querySelector('.content-button');
    var isScrolledIntoView = function (el) {
        var elemTop = el.getBoundingClientRect().top;
        var elemBottom = el.getBoundingClientRect().bottom;
        var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
        console.log(isVisible);
    return isVisible;
};
    var insertContent = function (evt) {
        var buttonClicked = evt.currentTarget;
        switch (buttonClicked.parentNode) {
            case mainContentDiv:
                mainContentDiv.innerText = window.data.longContent; 
                isScrolledIntoView(sidebarContentDiv);
                break;
            case sidebar:
                sidebarContentDiv.innerText = window.data.popUpContent;
                break;
        }; 
    }; 
    asideButton.addEventListener('click', insertContent);
    contentButton.addEventListener('click', insertContent);
}());