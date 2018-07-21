function debuggg() {
    console.log(this._x, this._y, this._scale);
}

var el = document.getElementById("background");
var background = new BackgroundCanvas(el, debuggg);
