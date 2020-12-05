class Log {
    constructor(x,y,h,a){
        var options = {
            restitution: 0.5,
            friction:1.3
        }
        this.body = Bodies.rectangle(x,y,20,h,options);
        Matter.Body.setAngle(this.body,a)
        this.width = 20;
        this.height = h;
        World.add(myworld,this.body);
    }

    display(){

        push();  
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        strokeWeight(4)
        stroke("blue")
        fill("white");
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop()
    }
}