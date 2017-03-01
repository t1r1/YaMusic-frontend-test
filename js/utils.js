'use strict';

window.utils = (function () {
    var container = document.querySelector('.container');
    return {
        setHeight: function (element) {
            element.style.height = window.innerHeight + 'px';
        }
    };
})();
