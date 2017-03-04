'use strict';

(function () {
    var container = document.querySelector('.container');
    var sidebar = document.querySelector('.sidebar');
    var sidebarContentDiv = document.querySelector('.aside-content-test');
    var anchorsCollection = document.querySelectorAll('.content__anchor');
    for (var i = 0; i < anchorsCollection.length; i++) {
        anchorsCollection[i].id = "anc" + i;
    }
    container.addEventListener('scroll', function () {
        for (var i = 0; i < anchorsCollection.length; i++) {
            if (window.content.isScrolledIntoView(anchorsCollection[i])) {
                var firstVisibleAnchor = anchorsCollection[i];
                console.log('Upper visible anchor is ' + firstVisibleAnchor.id);
                break;
            }
        };
        var coordinates = sidebarContentDiv.getBoundingClientRect();
        if (coordinates.bottom <= 50 && !sidebar.classList.contains('is-hidden')) {
            sidebar.classList.add('is-hidden');
            location.href = '#' + firstVisibleAnchor.id;
        } 
    });
    window.utils.setHeight(container);
    window.modalDialog.createDialogFromTemplate();
})();




