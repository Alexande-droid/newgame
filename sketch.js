var pickle, pickleJar, groundback, coin, obstacle, invisGround
var pickleImg, pickleJarImg, backgroundImg, coinImg, obstacleImg

function preload(){
pickleImg = loadImage("pickle.jpg")
pickleJarImg = loadImage("picklejar.jpg")
backgroundImg = loadImage("background.jpg")
coinImg = loadImage("coin.png")
obstacleImg = loadImage("obstacle.jpg")


}

function setup(){
createCanvas(displayWidth, displayHeight)
groundback = createSprite(200,0,1500,700)
groundback.addImage(backgroundImg)
groundback.scale=2
groundback.velocityX=-4
pickle = createSprite(0,530,50,50)
pickle.addImage(pickleImg)
pickle.scale=0.2
pickleJar = createSprite()
pickleJar.addImage(pickleJarImg)
pickleJar.scale=0.5
invisGround = createSprite(0,550,1500,20)
invisGround.visible = false
//groundback.x=groundback.width/2
console.log(displayWidth)
console.log(displayHeight)

}

function draw(){
background("green")
if(groundback.x<0){
    groundback.x=1200
}
pickle.collide(invisGround)
drawSprites()


}