
var bg_img;
var bg;



 function preload () {
 
    bg_img = loadImage ("bg.png");
    


}

function setup(){

    createCanvas (windowWidth,windowHeight);

    //imageMode (CENTRE);
    bg = createSprite(displayWidth/2,displayHeight/2);
    bg.addImage(bg_img);
    

}


function draw ()  {

background(0);


drawSprites ();
}



