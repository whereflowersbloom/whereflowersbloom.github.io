$(document).ready(function() {
    resizeDiv();
});

function resizeDiv() {
    let vph = document.body.offsetHeight
    let yOffset = (($(window).height()) / 100) * 25
    let newHeight = vph - yOffset
    $("#wfbLines").css({ "height": newHeight + "px" });
}