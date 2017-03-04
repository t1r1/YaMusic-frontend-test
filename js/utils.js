'use strict';

window.utils = (function () {
    return {
        setHeight: function (element) {
            element.style.height = window.innerHeight - 50 + 'px';
        }
    };
})();
