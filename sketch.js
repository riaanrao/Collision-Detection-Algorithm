var fixedRect, movingRect, newSprite1, newSprite2
function setup() {
  createCanvas(windowWidth, windowHeight);
  fixedRect = createSprite(windowWidth/2, windowHeight/2, 68.75, 68.75);
  movingRect = createSprite(300, 100, 68.75, 68.75);
  fixedRect.shapeColor = "green"
  movingRect.shapeColor = "green"
  newSprite1 = createSprite(200, 150, 50, 50)
  newSprite2 = createSprite(200, 50, 50, 50)
  }

function draw() {
  background(0);
  movingRect.x = mouseX
  movingRect.y = mouseY
  if (isTouching(newSprite1, movingRect) || isTouching(newSprite2, movingRect)) {
    movingRect.shapeColor = "crimson"
    newSprite1.shapeColor = "crimson"
    newSprite2.shapeColor = "crimson"
  }
  else {
    newSprite1.shapeColor = "chartreuse"
    movingRect.shapeColor = "chartreuse"
    newSprite2.shapeColor = "chartreuse"
  }
  if (isTouching(movingRect, fixedRect)) {
    movingRect.shapeColor = "crimson"
    fixedRect.shapeColor = "crimson"
  }
  else {
    movingRect.shapeColor = "chartreuse"
    fixedRect.shapeColor = "chartreuse"
  }
  drawSprites();
}
function isTouching(ob1, ob2) {
    if (ob1.x - ob2.x < ob1.width/2 + ob2.width/2 && 
    ob2.x - ob1.x < ob1.width/2 + ob2.width/2 &&
    ob1.y - ob2.y < ob1.height/2 + ob2.height/2 &&
    ob2.y - ob1.y < ob1.height/2 + ob2.height/2){
    return true
  }
  else {
  fixedRect.shapeColor = "chartreuse"
  movingRect.shapeColor = "chartreuse"
  return false
  }
}