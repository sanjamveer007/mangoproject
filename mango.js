class Mango{
    constructor(x,y,r)
    {
    var option = {
        isStatic:true,
        restitution:0.5,
        density:0.5,
        friction:0.5
    }

        this.r = 20
    this.body = Bodies.circle(x,y,20,option)
    World.add(world,this.body)
    this.image = loadImage("mango.png")
    
    
    
    }
    display(){
       
    var angle = this.body.angle
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y)
    rotate(angle)
        ellipseMode(CENTER)
        angleMode(RADIANS)
        fill("yellow")
       image(this.image,0,0,40,40)
   //ellipse(0,0,this.r*2,this.r*2)
    pop();
    
    }
    
    
    
    }