'use strict';

window.content = (function () {
    var sidebar = document.querySelector('.sidebar');
    var sidebarContentDiv = document.querySelector('.aside-content-test');
    var mainContentDiv = document.querySelector('.main-content-test');
    var asideButton = document.querySelector('.aside-button');
    var contentButton = document.querySelector('.content-button');
    var insertContent = function (evt) {
        var buttonClicked = evt.currentTarget;
        switch (buttonClicked.parentNode) {
            case mainContentDiv:
                mainContentDiv.innerText = window.data.asideContent; 
                break;
            case sidebar:
                sidebarContentDiv.innerText = window.data.asideContent;
                break;
        }; 
    }; 
    asideButton.addEventListener('click', insertContent);
    contentButton.addEventListener('click', insertContent);
}());