class Dropzone{


constructor(){
var Options={
isStatic:true
}
this.bodyL=Bodies.rectangle(width/2-100,height,20,100,Options);
this.bodyR=Bodies.rectangle(width/2+100,height,20,100,Options);
this.bodyB=Bodies.rectangle(width/2,height,200,20,Options)
World.add(world,this.bodyL)
World.add(world,this.bodyR)
World.add(world,this.bodyB)
}
display(){
rectMode(CENTER);
rect(this.bodyL.position.x,this.bodyL.position.y,20,100);
rect(this.bodyR.position.x,this.bodyR.position.y,20,100);
rect(this.bodyB.position.x,this.bodyB.position.y,200,20);
}





}