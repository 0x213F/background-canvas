function BackgroundCanvas(el, renderFunction) {

  this.canvas = el;
  this.context = el.getContext('2d');
  this.animated = false;

  this._x = null;
  this._y = null;
  this._scale = window.devicePixelRatio;

  var render;
  if(typeof renderFunction === "function") {
    render = renderFunction;
  } else {
    render = () => {};
  }
  this.setRenderFunction = (renderFunction) => {
    render = renderFunction;
  };
  this.runRenderFunction = () => {
    render.bind(this)();
  }

  var resize = () => {
    let height = window.innerHeight;
    let width = window.innerWidth;
    this._x = this.canvas.width = width * this._scale;
    this._y = this.canvas.height = height * this._scale;
    this.canvas.style.width = width + 'px';
    this.canvas.style.height = height + 'px';
    this.runRenderFunction();
  };
  resize();
  window.addEventListener('resize', resize, false);
}
