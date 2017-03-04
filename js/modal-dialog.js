'use strict';

window.modalDialog = (function () {
    var signInButton = document.querySelector('.header__button');
    var popUp = document.querySelector('.modal-window');
    var dialogToClone = document.querySelector('#dialog-template').content.querySelector('.dialog-content');
    var fadeBlock = document.querySelector('.fade');

    var newDialog = dialogToClone.cloneNode(true);
    var dialogProperties = {
        dialog: newDialog,
        insertButton: newDialog.querySelector('.insert-content'),
        closeButton: newDialog.querySelector('.close-dialog'),
        dialogText: newDialog.querySelector('.dialog-text')
    };

    var fadeBlockResize = function () {
        window.utils.setHeight(fadeBlock);
    };

    var closeDialogAndRemoveFade = function () {
        popUp.classList.add('is-hidden');
        fadeBlock.classList.add('is-hidden');
    };

    var insertDialogContent = function () {
        dialogProperties.dialogText.innerText = window.data.popUpContent;
        improvePosition();
    };

    var showModalDialog = function () {
        popUp.classList.remove('is-hidden');
        fadeBlock.classList.remove('is-hidden');
        improvePosition();
    };

    var improvePosition = function () {
        var xCoordinate = window.innerWidth * 0.5 - popUp.clientWidth / 2 + 'px';
        var yCoordinate = window.innerHeight * 0.5 - popUp.clientHeight / 2  + 'px';
        popUp.style.left = xCoordinate;
        popUp.style.top = yCoordinate;
    };

    signInButton.addEventListener('click', showModalDialog);
    dialogProperties.insertButton.addEventListener('click', insertDialogContent);
    dialogProperties.closeButton.addEventListener('click', closeDialogAndRemoveFade);
    window.addEventListener('resize', fadeBlockResize);
    fadeBlockResize();

    return {
        createDialogFromTemplate: function () {
            popUp.appendChild(dialogProperties.dialog);
        }
    };

})();