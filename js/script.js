'use strict';

(function () {
    var container = document.querySelector('.container');
    var sidebar = document.querySelector('.sidebar');
    var sidebarContentDiv = document.querySelector('.aside-content-test');
    var anchor1 = document.getElementById('1');
    container.addEventListener('scroll', function () {
        var coordinates = sidebarContentDiv.getBoundingClientRect();
        if (coordinates.bottom <= 50) {
            sidebar.classList.add('is-hidden');
            window.content.isScrolledIntoView(anchor1); 
        } else {
            sidebar.classList.remove('is-hidden');
        }
    });
    window.utils.setHeight(container);
    window.modalDialog.createDialogFromTemplate();
})();




