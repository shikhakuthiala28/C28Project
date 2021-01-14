class Stone extends BaseClass{

    constructor(x,y){

        super(x,y,50,50);
        this.image=loadImage("images/stone.png");
        Matter.Body.setStatic(this.body, false);
    }

    display(){

        super.show();
    }
}