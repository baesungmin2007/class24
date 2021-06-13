class Log{
    constructor(x,y,height,angle){
        var options = {
            'restitution':0.8,
            'friction':7,
            'density':1.0
        }

        this.body = Bodies.rectangle(x,y,20,height, options)
        World.add(world, this.body)
        this.width = 20;
        this.height = height;
        Matter.Body.setAngle(this.body,angle)

    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;
        rectMode(CENTER);
        push();
        translate(pos.x,pos.y)
        rotate(angle)
        fill("yellow");
        rect(0,0, this.width,this.height) 
        pop();

    }
}