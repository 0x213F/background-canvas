function BackgroundCanvas(el, renderFunction) {

  this.canvas = el;
  this.context = el.getContext('2d');
  this.animated = false;

  var render;
  if(typeof renderFunction === "function") {
    render = renderFunction;
    render();
  } else {
    render = () => {};
  }
  this.setRenderFunction = (renderFunction) => {
    render = renderFunction;
  };
  this.runRenderFunction = (callback) => {
    render();
  }

  var resize = () => {
    let height = window.innerHeight;
    let width = window.innerWidth;
    let scale = window.devicePixelRatio;

    this.canvas.width = width * scale;
    this.canvas.style.width = width + 'px';

    this.canvas.height = height * scale;
    this.canvas.style.height = height + 'px';

    render();
  };
  resize();
  window.addEventListener('resize', resize, false);
}
