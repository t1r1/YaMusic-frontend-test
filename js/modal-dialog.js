'use strict';

window.modalDialog = (function () {
    var signInButton = document.querySelector('.sign-in');
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

    var insertDialogContent = function () {
        dialogProperties.dialogText.innerText = window.data.popUpContent;
        improvePosition();
    };

    var showModalDialog = function () {
        popUp.classList.remove('is-hidden');
        fadeBlock.classList.remove('is-hidden');
        improvePosition();
        console.log('showModalDialog сработала');
    };

    var improvePosition = function () {
        var xCoordinate = window.innerWidth * 0.5 - popUp.clientWidth / 2 + 'px';
        var yCoordinate = window.innerHeight * 0.5 - popUp.clientHeight / 2  + 'px';
        popUp.style.left = xCoordinate;
        popUp.style.top = yCoordinate;
    };

    signInButton.addEventListener('click', showModalDialog);
    dialogProperties.insertButton.addEventListener('click', insertDialogContent);
    window.addEventListener('resize', fadeBlockResize);
    fadeBlockResize();

    return {
        createDialogFromTemplate: function () {
            popUp.appendChild(dialogProperties.dialog);
            console.log(popUp, 'popUp, createDialogFromTemplate сработала');
            // showModalDialog(popUp);
        }
    };

})();