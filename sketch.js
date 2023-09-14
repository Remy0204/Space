let bullets = []
let bulletnr = 0
let aliensLine1 = []
let aliensLine2 = []
let aliensLine3 = []
let bunkers = [];




function preload(){
    ship_0 = loadImage("Resources/Rumskib0.png");
    ship_1 = loadImage("Resources/Rumskib1.png");
    ship_2 = loadImage("Resources/Rumskib2.png");
    alien_0 = loadImage("Resources/mikkel0.png");
    alien_1 = loadImage("Resources/mikkel1.png");

   
}

let ship
let ship_0, ship_1, ship_2

function setup() {
    
    createCanvas(600, 600);
    background(0)
 
    ship = new Ship(width/2-10,height-100);
   
    ship.draw();

    for (let i=0; i<8; i++){
        aliensLine1[i]=new Alien(90+50*i,20)
        aliensLine2[i]=new Alien(90+50*i,70)
        aliensLine3[i]=new Alien(90+50*i,120)

        
            
    }
    
    for (let i = 0; i < 3; i++) { // Adjust the number of bunkers as needed
    bunkers.push(new Bunker(100 + i * 200, height - 125, 55, 10)); // Adjust positions and size
  }
}
   // alien = new Alien(width/2-10,20)
  






function draw()
{
    background(0)
    ship.draw()
    //alien.draw()
    //alien.update()
    for (let i=0; i< bullets.length; i++){
        bullets[i].draw();
        bullets[i].update();
     //   print("before hasHit")
        bullets[i].hasHit(aliensLine1);
        bullets[i].hasHit(aliensLine2);
        bullets[i].hasHit(aliensLine3);
      //  print(i)
       // print(bullets.length)
    //    print("after hashit")
     //  bullets[i].hasHit(aliensLine2);

     
    }

    for (let i = 0; i < bunkers.length; i++) {
        bunkers[i].draw();
      }
    for (let i=0;i<8;i++){
        aliensLine1[i].draw()
        aliensLine1[i].update()
        aliensLine2[i].draw()
        aliensLine2[i].update()
        aliensLine3[i].draw()
        aliensLine3[i].update()
        
    }
    //print("locationStage "aliensLine1[2].locationStage)
    //print(aliensLine1[2].x)
    //print(aliensLine1[2].y)
    //print(aliensLine1[2].dx)
    //print(aliensLine1[2])
    if (aliensLine1[0].y > height) 
        noLoop()
}

class Bunker {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
    }
  
    draw() {
      // Draw the bunker using rect()
      fill(255, 255, 200); // Adjust the color as needed
      rect(this.x, this.y, this.width, this.height);
    }
  }


class Alien{
    constructor(x,y){
        this.x = x
        this.y = y
        this.alienStage=0;
        this.changeStage = 0;
        this.alive = true;
        this.locationStage = 0
        this.diff_locationStage = 1
        this.dx = 5
       
    }

    draw(){
        if (this.alive) {
            if (this.alienStage == 0){
                image(alien_0,this.x,this.y);         
            }
            else {
                image(alien_1,this.x,this.y);
            // this.changeStage++            
            }           
            if (this.changeStage==0){
                this.alienStage++;
                if (this.alienStage > 1)
                    this.alienStage = 0
           }
            this.changeStage++
            if (this.changeStage >5)
                this.changeStage = 0

        }

        
   
    }
    update(){
        if (this.locationStage == 16 ) {
            this.y+=9 //hastighed ned af,når alians færdigør en omgang
            this.dx = -this.dx
            this.locationStage++
        }
        else if(this.locationStage==48){
            this.y+=9 ////hastighed ned af,når alians færdigør en omgang
            this.dx = -this.dx
            this.locationStage = -15    

        }
        else {

        this.x += this.dx
        this.locationStage++
        }

    }

    



}



function keyPressed() {
   if (keyCode === 32) {
        ship.fire()
    }

}


class Ship{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.shipStage=0;
        this.changeStage = 0;
    }

    move(){
        if (keyIsDown(LEFT_ARROW)){
            this.x-=5;
        }
        if (keyIsDown(RIGHT_ARROW)){
            this.x+=5;
        }
        


    }
    

    draw(){
        this.move()
        if (this.shipStage == 0){
            image(ship_0,this.x,this.y);
           // this.changeStage++
        }
        else if (this.shipStage == 1){
            image(ship_1,this.x,this.y);
           // this.changeStage++
        }
        else {
            image(ship_2,this.x,this.y);
            
        }

        
        if (this.changeStage==0){
            this.shipStage++;
            if (this.shipStage > 2)
                this.shipStage = 0

            
        
            
        }
        this.changeStage++
        if (this.changeStage >5)
            this.changeStage = 0
      
        



       

    }

    fire(){
        bullets[bulletnr]= new Bullet(this.x+22,this.y)
        bulletnr++;
      //  print(bulletnr)
      //  print(bullets)
    }
}

class Bullet{
    constructor(x,y){
        this.x = x;
        this.y = y;
        this.hasNotHit = true;
        
    }

    draw(){
        if(this.hasNotHit){
            fill(255,0,0)
            circle(this.x+10,this.y,7)
        }
    }

    update(){
        //Bullets skal flytte sig to op ad gangen. Ellers er den for langsom
        this.y-=2
    }

    hasHit(aliens){
        for (let i=0;i<aliens.length;i++){
            if (aliens[i].alive && this.hasNotHit){
                if (this.x > (aliens[i].x)-3 && this.x < (aliens[i].x)+27
                    && this.y > (aliens[i].y)-3 && this.y < (aliens[i].y)+27){
                   // print("true")
                    aliens[i].alive = false;
                    this.hasNotHit = false;
                }
            }
        }
    }



}

//https://github.com/Remy0204/Space.git

// HOW TO SAVE TO CLOUD AFTER CHANGES TO CODE

//git init 
//git add -A
//git status 
//git commit -m (navn på commit)
//git push -u origin master 