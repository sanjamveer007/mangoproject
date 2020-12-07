class Tree{




    constructor(){


        var options={
        
        isStatic : true
        }
        
        this.width = width
        this.height = height
       
        this.body = Bodies.rectangle(950,320,50,650,options)
        World.add(world,this.body)
        this.image = loadImage("tree.png")
        }
        
        
        display(){
        
        var pos = this.body.position;
        imageMode(CENTER)
       fill("green")
      
       image(this.image,pos.x,pos.y,500,650)
        
        
        }
        



}