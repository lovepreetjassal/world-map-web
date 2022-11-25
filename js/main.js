window.addEventListener('load', init);

function init() {
    var map = new jsVectorMap({
        selector: "#map",
        map: "world",
        zoomButtons: false,
        zoomOnScroll: false,
    });
}