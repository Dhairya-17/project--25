class Paper{

    constructor(x,y,r){
var options={
isStatic:false,
restitution:0.3,
friction:2,
density:2
}

this.x=x;
this.y=y;
this.r=r;
this.image=loadImage("paper.png")
this.body=Bodies.circle(x,y,r,options)


  World.add(world, this.body)
    }

    display(){
		/*imageMode(CENTER)
		image(this.body,0,0,this.bodywidth,this.bodyheight)*/
			var paperPos=this.body.position;		
			
			//push()
			translate(paperPos.x, paperPos.y);
			
			//strokeWeight(4);
			//fill(128,128,128)*/
			ellipseMode(RADIUS)
			circle(this.body.positionx,this.body.position.y,this.radius)
			imageMode(CENTER);
			image(this.image,0,0,60, 50)
			//pop()
			
	}

}