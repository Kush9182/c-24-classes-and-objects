class Bird{
    constructor(x,y){
       var option={
         restitution:0.5  
       } 
       this.bird=Bodies.rectangle(x,y,60,60,option);
       this.w=60;
       World.add(myworld,this.bird);
    }
    display(){
      this.bird.position.x = mouseX;
      this.bird.position.y=mouseY;
       
      push()  
      translate(this.bird.position.x,this.bird.position.y);
      rotate(this.bird.angle);
      fill("red")
      rectMode(CENTER);
      rect(0,0,this.w,this.w);
      pop()       
    }
}