//builds a barrier that goes across screen and reappear




function barrier() {
  this.width = 25;
  this.height = 100;

  this.x =Math.floor(Math.random());
  this.y =Math.floor(Math.random());

  this.gravity = 0.5; // force of gravity
  this.lift = -10;
  this.velocity = 10;


  this.show = function () {
    
    fill(0, 0, 255);
    rect(this.x, this.y, this.width, this.height);

    // this will continuously update the barrier
  };

  this.update = function () {
    this.x -= this.velocity;
    // this velocity *= 0.9; // air resistance

    if (this.x < 0) {
      this.x = w + this.width;
      this.y = Math.floor((Math.random() * h)+10);
      this.velocity = Math.floor((Math.random()+1)*8);
    }
  }
}