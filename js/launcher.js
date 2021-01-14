class Launcher{

    constructor(bodyA,pointB){

        var options={

            bodyA:bodyA,
            pointB:pointB,
            stiffness: 0.02,
            length: 10

        }
        this.bodyA=bodyA;
        this.pointB=pointB;
        this.launcher= Cons.create(options);
        World.add(world,this.launcher);
    }

    fly(){

        this.launcher.bodyA=null;
    }

    attach(bodyA){
        this.launcher.bodyA=bodyA;
    }

    display(){

        if(this.launcher.bodyA){

            var Apos= this.bodyA.position;
            var Bpos= this.pointB;
        
            strokeWeight(4);
            line(Apos.x,Apos.y,Bpos.x,Bpos.y);
        }
    }
}