const {dialog} = require('electron').remote
    //console.log(dialog.showSaveDialog())

function showSave() {
    dialog.showSaveDialog();
}

function showOpen() {
    dialog.showOpenDialog();
}