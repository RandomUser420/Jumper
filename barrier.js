//builds a barrier that goes across screen and reappear

function barrier() {
  this.width = 50;
  this.height = 200;

  this.x = w - 100;
  this.y = h - 300;

  this.gravity = 0.5; // force of gravity
  this.lift = -10;
  this.velocity = 0;


  this.show = function () {

    fill(0, 0, 255);
    rect(this.x, this.y, this.width, this.height);

    // this will continuously update the barrier
  };

  this.update = function () {
    this.velocity += this.gravity;
    this.x -= this.velocity;
    // this velocity *= 0.9; // air resistance

    if (this.x < 0) {
      this.x = w + this.width;
      this.y = Math.floor((Math.random() * h) + 10);
      this.velocity = 0;
    }
  }
};