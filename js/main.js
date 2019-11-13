$(document).ready(function() {
    resizeDiv();
});

function resizeDiv() {
    let totheight = document.body.offsetHeight
    let vph = $(window).height()
    if(totheight < vph) {
        totheight = vph;
    }

    //console.log(totheight)
    let startOffset = (vph / 100) * 25
    let newHeight = totheight - startOffset
    $("#wfbLines").css({ "height": newHeight + "px" });
}