'use strict';

(function () {
    var container = document.querySelector('.container');
    var sidebar = document.querySelector('.sidebar');
    var sidebarContentDiv = document.querySelector('.aside-content-test');
    container.addEventListener('scroll', function () {
        var coordinates = sidebarContentDiv.getBoundingClientRect();
        if (coordinates.bottom <= 50) {
            sidebar.classList.add('is-hidden');
            console.log('Sidebar content is invisible now');
        } else {
            sidebar.classList.remove('is-hidden');
            console.log('Sidebar content is Visible now');
        }
    });
    window.utils.setHeight(container);
    window.modalDialog.createDialogFromTemplate();
})();




