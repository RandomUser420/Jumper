function jumper(){
  this.x=w/2;
  this.y=w/2;
  this.gravity=1.5; // force of gravity
  this.lift=-40; // opposing force of gravity
  this.velocity=0; // speed of gravity force

  
  
  //I am building a function to display on the screen. This is where I put my values of what the jumper will look like
  this.show=function(){
    fill(255,0,0);
    ellipse(this.x,this.y,50,50);
    
  };
  
  //build a function called "UP" that will take the initial velocity and modify by opposing gravity
  
  this.up= function(){
       if(jumpcount<2){
        this.velocity += this.lift;
      }
      
    
  };
  
 
 //This will continuosly update jumper
 
 
  this.update = function(){
    
    this.velocity += this.gravity;
    this.y += this.velocity;
    this.velocity*=0.9; // Air resistance
    
    //this will prevent the jumper from leaving the ground
    if(this.y>h){
      this.y = h;
      this.velocity=0;
      jumpcount = 0;
    }
    // this will prevent the jumper from leaving the ceiling
    
    if(this.y<0){
      this.y=0;
      this.velocity=0;
      jumpcount = 0; // reset the jumpount if they hit the ceiling
    }
    
    
  };
  
  
  
  
  
  
  
  
  

  
}

