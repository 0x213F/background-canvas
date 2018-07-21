function BackgroundCanvas(el, renderFunction) {

  this.canvas = el;
  this.context = el.getContext('2d');
  this.animated = false;

  let x, y, scale = window.devicePixelRatio;

  let render;
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

  let resize = () => {
    let height = window.innerHeight;
    let width = window.innerWidth;
    x = this.canvas.width = width * scale;
    y = this.canvas.height = height * scale;
    this.canvas.style.width = width + 'px';
    this.canvas.style.height = height + 'px';
    render();
  };
  resize();
  window.addEventListener('resize', resize, false);
}
