'use strict';

window.content = (function () {
    var sidebar = document.querySelector('.sidebar');
    var mainContentParent = document.querySelector('.content');
    var sidebarContentDiv = document.querySelector('.aside-content-test');
    var mainContentDiv = document.querySelector('.content__test');
    var asideButton = document.querySelector('.aside-button');
    var contentButton = document.querySelector('.content__button');
    var insertContent = function (evt) {
        var buttonClicked = evt.currentTarget;
        switch (buttonClicked.parentNode) {
            case mainContentParent:
                mainContentDiv.classList.remove('is-hidden');
                break;
            case sidebar:
                sidebarContentDiv.innerHTML = window.data.sidebarContent;
                break;
        }; 
    }; 
    asideButton.addEventListener('click', insertContent);
    contentButton.addEventListener('click', insertContent);
    return {
        isScrolledIntoView: function (el) {
            var elemTop = el.getBoundingClientRect().top;
            var elemBottom = el.getBoundingClientRect().bottom;
            var isVisible = (elemTop >= 0) && (elemBottom <= window.innerHeight);
            return isVisible;
    }
    };
}());