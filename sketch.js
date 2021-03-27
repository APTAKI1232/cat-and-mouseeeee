var cat,catimg1,catstopped,catsit,mousesit,mouse,mouserunning,mouseStopped,mousetease,bg,bgImg
function preload() {
    //load the images here
    catimg1 = loadAnimation ("images/cat2.png","images/cat3.png");
    catstopped = loadAnimation ("images/cat1.png");
    catsit = loadAnimation ("images/cat4.png")
    bgImg = loadImage ("images/garden.png");
    mouserunning = loadAnimation ("images/mouse2.png","images/mouse3.png");
    mouseStopped = loadAnimation ("images/mouse4.png");
    mousetease = loadAnimation ("images/mouse1.png")
    
}

function setup(){
    createCanvas(1000,800);
    bg = createSprite (400,200,1000,800);
   bg.addImage (bgImg);
   bg.scale = 2;
    //create tom and jerry sprites here
   cat = createSprite (800,600,50,50);
 
   cat.addAnimation("stopped",catstopped)
   cat.addAnimation("running", catimg1);
   cat.addAnimation("sit",catsit)
   cat.scale = 0.2
   
   mouse = createSprite(200,600,50,50)
   
   
   mouse.addAnimation ("tease",mousetease)
   mouse.addAnimation ("running", mouserunning);
   mouse.addAnimation("stopped",mouseStopped)
   mouse.scale = 0.2

}

function draw() {

   background(255);


   if(keyCode === LEFT_ARROW){
    cat.x = cat.x-4;
     cat.changeAnimation ("running",catimg1)
     mouse.changeAnimation ("running",mouserunning)
    } 
    
    if (keyCode === RIGHT_ARROW) {
    cat.changeAnimation ("stopped",catstopped)
    mouse.changeAnimation("tease",mousetease)
    }
//Write condition here to evalute if tom and jerry collide
   if (cat.isTouching(mouse)){
    cat.changeAnimation("sit",catsit)
    mouse.changeAnimation("stopped",mouseStopped)
    cat.x = cat.x = 300;

   }



    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
