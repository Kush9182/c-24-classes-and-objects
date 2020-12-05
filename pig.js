class Pig{
    constructor(x,y){
       var option={
         restitution:0.5  
       } 
       this.pig=Bodies.rectangle(x,y,60,60,option);
       this.w=60;
       World.add(myworld,this.pig);
    }
    display(){
       
      push()  
      translate(this.pig.position.x,this.pig.position.y);
      rotate(this.pig.angle);
      fill("lightgreen")
      rectMode(CENTER);
      rect(0,0,this.w,this.w);
      pop()       
    }
}