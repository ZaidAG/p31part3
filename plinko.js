class Plinko{
    constructor(x,y,radius){
      var option={
          isStatic:true,
      }
      this.body=Bodies.circle(x,y,radius);
      this.radius=radius

    }
    display(){
        var pos=this.body.position
        var angle=this.body.angle

        push();
        translate(pos.x, pos.y);
        ellipseMode(RADIUS);
        ellipse(0,0,this.radius,this.radius);
        pop();
    }
}