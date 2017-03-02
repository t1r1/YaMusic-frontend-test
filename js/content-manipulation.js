'use strict';

window.content = (function () {
    var sidebar = document.querySelector('.sidebar');
    var mainContentParent = document.querySelector('.HolyGrail-content');
    var sidebarContentDiv = document.querySelector('.aside-content-test');
    var mainContentDiv = document.querySelector('.main-content-test');
    var asideButton = document.querySelector('.aside-button');
    var anchor1 = document.getElementById('1');
    var contentButton = document.querySelector('.content-button');
    var insertContent = function (evt) {
        var buttonClicked = evt.currentTarget;
        switch (buttonClicked.parentNode) {
            case mainContentParent:
                mainContentDiv.classList.remove('is-hidden');
                break;
            case sidebar:
                sidebarContentDiv.innerHTML = window.data.popUpContent;
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
            console.log(el, 'is', isVisible);
            return isVisible;
    }
    };
}());