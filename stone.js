class Stone{
constructor(x,y){
var options= {


    restitution:0.5,
    density:0.1
}
    this.r = 30;

this.body = Bodies.circle(x,y,30,options)
World.add(world,this.body)

this.image=loadImage("stone.png");

}
display(){
    


    var pos = this.body.position;
    
    
    imageMode(CENTER)
    
    
   
image(this.image,pos.x,pos.y,60,60)


}



}



