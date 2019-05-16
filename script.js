//Game by António Rocha
//lastest update January 4th 2019

let canvas = null;
let ctx = null;

const CANVAS_HEIGHT = 720;
const CANVAS_WIDTH = 1280;


function Player(x, y, width, height) {
  this.x = x
  this.y = y
  this.speed = 5
  this.width = width
  this.height = height
  this.movingRight = false
  this.movingLeft = false
  this.fire = 0
  this.life = 3
  this.score = 0
  this.intangible = false
  this.intangibleFrames = 0
  this.standing = "right"
  this.color = "white"


  this.update = function () {

    if (this.movingLeft) {
      this.x -= this.speed
    }

    else if (this.movingRight) {
      this.x += this.speed

    }

    if (this.x <= 0) {
      this.x = 0
    }

    if (this.x + this.width >= CANVAS_WIDTH) {
      this.x = CANVAS_WIDTH - this.width
    }
  }

  this.draw = function () {


    ctx.fillStyle = "white"
    /*Hitbox visualization 
    ctx.beginPath()
    ctx.fillRect(this.x, this.y, this.width, this.height)*/
    ctx.font = "bold 20px verdana"
    ctx.fillText("Lives: " + this.life, 20, 30)
    ctx.font = "bold 20px verdana"
    ctx.fillText("Score: " + this.score, 20, 50)
    if (this.movingRight)
      animateFoxRight()

    else if (this.movingLeft)
      animateFoxLeft()

    else if (this.standing == "right") {
      ctx.drawImage(foxImage, 0, 0, 50, 50, player1.x, player1.y, 50, 50);
    }

    else if (this.standing == "left") {
      ctx.drawImage(foxImage, 0, 46, 50, 50, player1.x, player1.y, 50, 50)
    }

  }


}

function Player2(x, y, width, height) {
  this.x = x
  this.y = y
  this.speed = 5
  this.width = width
  this.height = height
  this.movingRight = false
  this.movingLeft = false
  this.fire = 0
  this.life = 3
  this.score = 0
  this.intangible = false
  this.intangibleFrames = 0
  this.standing = "right"
  this.color = "white"


  this.update = function () {

    if (this.movingLeft) {
      this.x -= this.speed
    }

    else if (this.movingRight) {
      this.x += this.speed

    }

    if (this.x <= 0) {
      this.x = 0
    }

    if (this.x + this.width >= CANVAS_WIDTH) {
      this.x = CANVAS_WIDTH - this.width
    }
  }

  this.draw = function () {


    ctx.fillStyle = this.color
    /*ctx.beginPath()
    ctx.fillRect(this.x, this.y, this.width, this.height)
    /*ctx.font = "bold 20px verdana"
    ctx.fillText("Lives: " + this.life,20,30)
    ctx.font = "bold 20px verdana"
    ctx.fillText("Score: " + this.score,20,50)*/
    if (this.movingRight)
      animateFalcoRight()

    else if (this.movingLeft)
      animateFalcoLeft()

    else if (this.standing == "right") {
      ctx.drawImage(falcoImage, 0, 0, 50, 50, player2.x, player2.y, 50, 50);
    }

    else if (this.standing == "left") {
      ctx.drawImage(falcoImage, 0, 46, 50, 50, player2.x, player2.y, 50, 50)
    }

  }


}


let player1 = new Player(500, CANVAS_HEIGHT - 36, 30, 70)
let player2 = new Player2(-10, 800, 30, 70)
let voices = ["sound/fox05.wav", "sound/fox06.wav", "sound/fox07.wav", "sound/fox08.wav", "sound/fox09.wav"]
let voicesP2 = ["sound/falco0a.wav", "sound/falco0b.wav", "sound/falco07.wav", "sound/falco08.wav", "sound/falco09.wav"]

let foxImage = new Image()
foxImage.src = 'sprites/fox.png';
let frameIndex = 0
function animateFoxRight() {
  ctx.drawImage(foxImage, frameIndex * 50 + 50, 0, 50, 50, player1.x, player1.y, 50, 50);
  frameIndex++;
  if (frameIndex == 6) {
    frameIndex = 0
  }
}

function animateFoxLeft() {
  ctx.drawImage(foxImage, frameIndex * 50 + 50, 47, 50, 50, player1.x, player1.y, 50, 50);
  frameIndex++;
  if (frameIndex == 6) {
    frameIndex = 0
  }
}


let falcoImage = new Image()
falcoImage.src = 'sprites/falco.png';
let frameIndexFalco = 0
function animateFalcoRight() {
  ctx.drawImage(falcoImage, frameIndexFalco * 50 + 50, 0, 50, 50, player2.x, player2.y, 50, 50);
  frameIndexFalco++;
  if (frameIndexFalco == 6) {
    frameIndexFalco = 0
  }
}

function animateFalcoLeft() {
  ctx.drawImage(falcoImage, frameIndexFalco * 50 + 50, 47, 50, 50, player2.x, player2.y, 50, 50);
  frameIndexFalco++;
  if (frameIndexFalco == 6) {
    frameIndexFalco = 0
  }
}

function KeyDown(event) {

  //Shooting 
  if (event.keyCode == 38) {


    if (shoots[player1.fire].active != true) {
      shoots[player1.fire].active = true
      shoots[player1.fire].x = player1.x + 20
      shoots[player1.fire].y = player1.y
      document.getElementById("laser").play()
      document.getElementById("voice").src = voices[Math.floor(Math.random() * 4)]
      document.getElementById("voice").play()

    }
    player1.fire++
  }

  //Player2
  if (event.keyCode == 87) {


    if (shootsP2[player2.fire].active != true) {
      shootsP2[player2.fire].active = true
      shootsP2[player2.fire].x = player2.x + 20
      shootsP2[player2.fire].y = player2.y
      document.getElementById("laser").play()
      document.getElementById("voiceP2").src = voicesP2[Math.floor(Math.random() * 4)]
      document.getElementById("voiceP2").play()

    }
    player2.fire++
  }




  //Moving
  switch (event.keyCode) {
    case 37: /*seta para a esquerda*/ player1.movingLeft = true; player1.standing = "left"; break;
    case 39: /*seta para a direita*/ player1.movingRight = true; player1.standing = "right"; break;

  }

  //Player2
  switch (event.keyCode) {
    case 65: /*seta para a esquerda*/ player2.movingLeft = true; player2.standing = "left"; break;
    case 68: /*seta para a direita*/ player2.movingRight = true; player2.standing = "right"; break;

  }

}

function KeyUp(event) {

  switch (event.keyCode) {
    case 37: /*seta para a esquerda*/ player1.movingLeft = false; break;
    case 39: /*seta para a direita*/ player1.movingRight = false; break;
  }

  //Player2
  switch (event.keyCode) {
    case 65: /*seta para a esquerda*/ player2.movingLeft = false; break;
    case 68: /*seta para a direita*/ player2.movingRight = false; break;

  }

}



function Ball(x, y, r, speedX, speedY, rebound, color) {
  this.x = x
  this.y = y
  this.r = r
  this.speedX = speedX
  this.speedY = speedY
  this.rebound = rebound
  this.color = color
  this.acc = 0.1

  this.draw = function () {

    ctx.fillStyle = this.color
    ctx.beginPath()
    ctx.arc(this.x, this.y, this.r, 0, 2 * Math.PI)
    ctx.fill()

  }

  this.update = function () {

    this.x += this.speedX
    this.y += this.speedY

    if (this.x + this.r >= CANVAS_WIDTH || this.x - this.r <= 0) {
      this.speedX = -this.speedX
    }

    if (this.y + this.r >= CANVAS_HEIGHT) {
      this.speedY = -this.rebound
      this.y = CANVAS_HEIGHT - this.r
    }




    else {
      this.speedY += this.acc
    }

  }
}

let shoots = []
let shootsP2 = []

function Shoot(x, y) {
  this.x = x
  this.y = y
  this.height = 80
  this.width = 10
  this.active = false


  this.update = function () {

    if (this.active) {
      this.height += 5
      this.y -= 5
      console.log(shootsP2[0].y)

      if (this.y <= 0) {
        this.active = false
        this.y = 800
        player1.fire = 0
      }
    }




  }

  this.draw = function () {

    ctx.fillStyle = "red"
    ctx.beginPath()
    ctx.fillRect(this.x, this.y, this.width, this.height)


  }


}

function ShootP2(x, y) {
  this.x = x
  this.y = y
  this.height = 80
  this.width = 10
  this.active = false


  this.update = function () {

    if (this.active) {
      this.height += 5
      this.y -= 5
      console.log(shootsP2[0].y)

      if (this.y <= 0) {
        this.active = false
        this.y = 800
        player2.fire = 0
      }
    }




  }

  this.draw = function () {

    ctx.fillStyle = "blue"
    ctx.beginPath()
    ctx.fillRect(this.x, this.y, this.width, this.height)


  }


}

let shoot1 = new Shoot(player1.x + 10, 730);
shoots.push(shoot1)
let shoot2 = new Shoot(player1.x + 10, 730);
shoots.push(shoot2)

let shootP21 = new ShootP2(player2.x + 10, 730);
shootsP2.push(shootP21)
let shootP22 = new ShootP2(player2.x + 10, 730);
shootsP2.push(shootP22)

let balls = []


function checkCollision() {
  for (let i = 0; i < balls.length; ++i) {

    if (balls[i].y + balls[i].r >= shoots[0].y && (balls[i].x - balls[i].r <= shoots[0].x + shoots[0].width && balls[i].x + balls[i].r >= shoots[0].x) && balls[i].r > 10) {
      let newBall1 = new Ball(balls[i].x - balls[i].r / 2, balls[i].y, balls[i].r / 2, -balls[i].speedX, 3, balls[i].rebound / 1.3, balls[i].color)
      let newBall2 = new Ball(balls[i].x + balls[i].r / 2, balls[i].y, balls[i].r / 2, balls[i].speedX, 3, balls[i].rebound / 1.3, balls[i].color)


      player1.score += Math.floor(balls[i].y * 0.5)
      balls.splice(i, 1)
      balls.push(newBall1)
      balls.push(newBall2)
      shoots[0].active = false
      shoots[0].y = 800
      player1.fire = 0

    }

    else if (balls[i].y + balls[i].r >= shoots[0].y && (balls[i].x - balls[i].r <= shoots[0].x + shoots[0].width && balls[i].x + balls[i].r >= shoots[0].x) && balls[i].r <= 10) {
      player1.score += Math.floor(balls[i].y * 0.1)
      balls.splice(i, 1)
      shoots[0].active = false
      shoots[0].y = 800
      player1.fire = 0
    }


    else if (balls[i].y + balls[i].r >= shoots[1].y && (balls[i].x - balls[i].r <= shoots[1].x + shoots[1].width && balls[i].x + balls[i].r >= shoots[1].x) && balls[i].r > 10) {
      let newBall1 = new Ball(balls[i].x - balls[i].r / 2, balls[i].y, balls[i].r / 2, -3, 3, balls[i].rebound / 1.3, balls[i].color)
      let newBall2 = new Ball(balls[i].x + balls[i].r / 2, balls[i].y, balls[i].r / 2, 3, 3, balls[i].rebound / 1.3, balls[i].color)
      balls.splice(i, 1)
      balls.push(newBall1)
      balls.push(newBall2)
      shoots[1].active = false
      shoots[1].y = 800
      player1.fire = 0

    }

    else if (balls[i].y + balls[i].r >= shoots[1].y && (balls[i].x - balls[i].r <= shoots[1].x + shoots[1].width && balls[i].x + balls[i].r >= shoots[1].x) && balls[i].r <= 10) {
      balls.splice(i, 1)
      shoots[1].active = false
      shoots[1].y = 800
      player1.fire = 0
    }
  }

  if (coop) {
    for (let i = 0; i < balls.length; ++i) {

      if (balls[i].y + balls[i].r >= shootsP2[0].y && (balls[i].x - balls[i].r <= shootsP2[0].x + shootsP2[0].width && balls[i].x + balls[i].r >= shootsP2[0].x) && balls[i].r > 10) {
        let newBall1 = new Ball(balls[i].x - balls[i].r / 2, balls[i].y, balls[i].r / 2, -balls[i].speedX, 3, balls[i].rebound / 1.3, balls[i].color)
        let newBall2 = new Ball(balls[i].x + balls[i].r / 2, balls[i].y, balls[i].r / 2, balls[i].speedX, 3, balls[i].rebound / 1.3, balls[i].color)


        player1.score += Math.floor(balls[i].y * 0.5)
        balls.splice(i, 1)
        balls.push(newBall1)
        balls.push(newBall2)
        shootsP2[0].active = false
        shootsP2[0].y = 800
        player2.fire = 0

      }

      else if (balls[i].y + balls[i].r >= shootsP2[0].y && (balls[i].x - balls[i].r <= shootsP2[0].x + shootsP2[0].width && balls[i].x + balls[i].r >= shootsP2[0].x) && balls[i].r <= 10) {
        player1.score += Math.floor(balls[i].y * 0.1)
        balls.splice(i, 1)
        shootsP2[0].active = false
        shootsP2[0].y = 800
        player2.fire = 0
      }


      else if (balls[i].y + balls[i].r >= shootsP2[1].y && (balls[i].x - balls[i].r <= shootsP2[1].x + shootsP2[1].width && balls[i].x + balls[i].r >= shootsP2[1].x) && balls[i].r > 10) {
        let newBall1 = new Ball(balls[i].x - balls[i].r / 2, balls[i].y, balls[i].r / 2, -3, 3, balls[i].rebound / 1.3, balls[i].color)
        let newBall2 = new Ball(balls[i].x + balls[i].r / 2, balls[i].y, balls[i].r / 2, 3, 3, balls[i].rebound / 1.3, balls[i].color)
        balls.splice(i, 1)
        balls.push(newBall1)
        balls.push(newBall2)
        shootsP2[1].active = false
        shootsP2[1].y = 800
        player2.fire = 0

      }

      else if (balls[i].y + balls[i].r >= shootsP2[1].y && (balls[i].x - balls[i].r <= shootsP2[1].x + shootsP2[1].width && balls[i].x + balls[i].r >= shootsP2[1].x) && balls[i].r <= 10) {
        balls.splice(i, 1)
        shootsP2[1].active = false
        shootsP2[1].y = 800
        player2.fire = 0
      }
    }
  }
}


function playerCollision() {
  if (player1.intangible == false) {
    for (let i = 0; i < balls.length; ++i) {
      if (balls[i].y + balls[i].r >= player1.y && (balls[i].x - balls[i].r <= player1.x + player1.width && balls[i].x + balls[i].r >= player1.x)) {
        player1.intangible = true
        player1.life -= 1
        player1.color = "grey"
        ctx.fillStyle = "rgba(255,0,0,0.8)"
        ctx.beginPath()
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        document.getElementById("damage").play()

      }
    }
  }

  if (player1.intangible) {
    player1.intangibleFrames++
  }

  if (player1.intangibleFrames >= 60) {
    player1.intangible = false
    player1.intangibleFrames = 0
    player1.color = "white"
  }
}

function player2Collision() {
  if (player2.intangible == false) {
    for (let i = 0; i < balls.length; ++i) {
      if (balls[i].y + balls[i].r >= player2.y && (balls[i].x - balls[i].r <= player2.x + player2.width && balls[i].x + balls[i].r >= player2.x)) {
        player2.intangible = true
        player1.life -= 1
        player2.color = "grey"
        ctx.fillStyle = "rgba(255,0,0,0.8)"
        ctx.beginPath()
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        document.getElementById("damageP2").play()
      }
    }
  }

  if (player2.intangible) {
    player2.intangibleFrames++
  }

  if (player2.intangibleFrames >= 60) {
    player2.intangible = false
    player2.intangibleFrames = 0
    player2.color = "white"
  }
}



function levelClearIntagibility() {
  player1.intangible = true
  player1.color = "grey"
  player2.intangible = true
  player2.color = "grey"
}


let level = 1
let control = 1


function level1() {
  let ball1 = new Ball(100, 200, 40, 3, 3, 10, "orangered")
  let ball2 = new Ball(400, 200, 40, 3, 3, 10, "orange")
  balls.push(ball1)
  balls.push(ball2)
  levelClearIntagibility()
}

function level2() {
  let ball1 = new Ball(800, 200, 40, 3, 3, 10, "orangered")
  let ball2 = new Ball(1000, 200, 40, 3, 3, 10, "orange")
  balls.push(ball1)
  balls.push(ball2)
  levelClearIntagibility()
}

function level3() {
  let ball1 = new Ball(800, 200, 40, 3, 3, 10, "orangered")
  let ball2 = new Ball(200, 200, 40, 3, 3, 10, "orange")
  let ball3 = new Ball(800, 600, 40, 3, 3, 10, "orangered")
  let ball4 = new Ball(200, 600, 40, 3, 3, 10, "orange")
  balls.push(ball1)
  balls.push(ball2)
  balls.push(ball3)
  balls.push(ball4)
  levelClearIntagibility()
}


//Platform Assets
let bouncePlatform = new Image()
bouncePlatform.src = 'sprites/bounce_platform.png'
let magicPlatform = new Image()
magicPlatform.src = "sprites/magic_platform.png"


//Adventure Mode
function Adventure() {




  //Level 1 ball spawn
  if (level == 1 && control == 1) {
    level1()
    control++
  }

  //Level 2 ball spawn
  if (level == 2 && control == 2) {
    level2()
    control++
  }

  //Level 2 platforms and collisions
  if (level == 2) {

    ctx.fillStyle = "rgba(0,0,0,1)"
    ctx.beginPath()
    ctx.fillRect(450, 300, 100, 20)
    ctx.drawImage(bouncePlatform, 450, 300)


    ctx.fillStyle = "rgba(0,0,0,1)"
    ctx.beginPath()
    ctx.fillRect(850, 300, 100, 20)
    ctx.drawImage(bouncePlatform, 850, 300)

    //Collision with the balls
    for (let i = 0; i < balls.length; i++) {

      //platform1
      if (balls[i].y + balls[i].r >= 300 && balls[i].y + balls[i].r <= 400 && (balls[i].x - balls[i].r <= 539 && balls[i].x + balls[i].r >= 471)) {

        if (balls[i].speedY > 0) {
          balls[i].y = 300 - balls[i].r
        }

        else if (balls[i].speedY < 0) {
          balls[i].y = 320 + balls[i].r
        }

        balls[i].speedY = -balls[i].speedY


      }

      else if (balls[i].y + balls[i].r >= 300 && balls[i].y + balls[i].r <= 400 && (balls[i].x - balls[i].r <= 470 && balls[i].x + balls[i].r >= 450)) {

        balls[i].speedX = -balls[i].speedX
      }

      else if (balls[i].y + balls[i].r >= 300 && balls[i].y + balls[i].r <= 400 && (balls[i].x - balls[i].r <= 550 && balls[i].x + balls[i].r >= 540)) {

        balls[i].speedX = -balls[i].speedX
      }

      //platform2

      if (balls[i].y + balls[i].r >= 300 && balls[i].y + balls[i].r <= 400 && (balls[i].x - balls[i].r <= 939 && balls[i].x + balls[i].r >= 861)) {

        if (balls[i].speedY > 0) {
          balls[i].y = 300 - balls[i].r
        }

        else if (balls[i].speedY < 0) {
          balls[i].y = 320 + balls[i].r
        }

        balls[i].speedY = -balls[i].speedY


      }

      else if (balls[i].y + balls[i].r >= 300 && balls[i].y + balls[i].r <= 400 && (balls[i].x - balls[i].r <= 860 && balls[i].x + balls[i].r >= 850)) {

        balls[i].speedX = -balls[i].speedX
      }

      else if (balls[i].y + balls[i].r >= 300 && balls[i].y + balls[i].r <= 400 && (balls[i].x - balls[i].r <= 950 && balls[i].x + balls[i].r >= 940)) {

        balls[i].speedX = -balls[i].speedX
      }

    }

    //Collision with the shoots
    //Player1
    for (let i = 0; i < shoots.length; i++) {
      //platform1
      if (shoots[i].y >= 300 && shoots[i].y <= 320 && (shoots[i].x + shoots[i].width <= 550 && shoots[i].x + shoots[i].width >= 450)) {
        shoots[i].active = false
        shoots[i].y = 800
        player1.fire = 0
      }

      //platform2
      if (shoots[i].y >= 300 && shoots[i].y <= 320 && (shoots[i].x + shoots[i].width <= 950 && shoots[i].x + shoots[i].width >= 850)) {
        shoots[i].active = false
        shoots[i].y = 800
        player1.fire = 0
      }
    }

    //Player2
    for (let i = 0; i < shootsP2.length; i++) {
      //platform1
      if (shootsP2[i].y >= 300 && shootsP2[i].y <= 320 && (shootsP2[i].x + shootsP2[i].width <= 550 && shootsP2[i].x + shootsP2[i].width >= 450)) {
        shootsP2[i].active = false
        shootsP2[i].y = 800
        player2.fire = 0
      }

      //platform2
      if (shootsP2[i].y >= 300 && shootsP2[i].y <= 320 && (shootsP2[i].x + shootsP2[i].width <= 950 && shootsP2[i].x + shootsP2[i].width >= 850)) {
        shootsP2[i].active = false
        shootsP2[i].y = 800
        player2.fire = 0
      }
    }

  }

  //level3 ball spawn
  if (level == 3 && control == 3) {
    level3()
    control++
  }

  if (level == 3) {
    /*ctx.fillStyle = "rgba(255,255,0,1)"
    ctx.beginPath()
    ctx.fillRect(0,CANVAS_HEIGHT/2,CANVAS_WIDTH,10)*/
    ctx.drawImage(magicPlatform, 0, CANVAS_HEIGHT / 2)
    //Collision with the balls
    for (let i = 0; i < balls.length; i++) {

      //platform 
      if (balls[i].y + balls[i].r <= CANVAS_HEIGHT / 2 + 85 && balls[i].y + balls[i].r >= CANVAS_HEIGHT / 2 && balls[i].r && balls[i].r == 40) {


        if (balls[i].speedY > 0) {

          balls[i].speedY = -7
        }


        else if (balls[i].speedY < 0 && balls[i].r == 40) {
          balls[i].y = CANVAS_HEIGHT / 2 + 85
          balls[i].speedY = -balls[i].speedY
        }





      }

      if (balls[i].y + balls[i].r <= CANVAS_HEIGHT / 2 + 10 && balls[i].y + balls[i].r >= CANVAS_HEIGHT / 2 && balls[i].r && balls[i].r <= 20) {

        if (balls[i].speedY > 0) {

          balls[i].speedY = -5

        }

      }

    }

  }


  if (balls.length == 0) {
    level++
  }

  //Adventure mode clear
  if (level == 4) {
    document.getElementById("complete").play()
  }
  if (level >= 4) {
    ctx.fillStyle = "rgba(0,0,0,0.4)"
    ctx.beginPath()
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
    ctx.fillStyle = "yellow"
    ctx.font = "bold 40px verdana"
    ctx.fillText("CONGRATIOLATIONS", 400, 300)
    ctx.font = "bold 20px verdana"
    ctx.fillText("Final score: " + player1.score, 550, 400)


  }
}


let endlessCounter = 0

function Endless() {

  if (balls.length == 0) {
    endlessCounter++

    for (let i = 0; i < endlessCounter; ++i) {
      let moreball = new Ball(Math.random() * 1180 + 50, 200, 40, Math.random() * 6 - 3, 3, 10, "orangered")
      balls.push(moreball)
    }

  }

}

function loadBackground() {
  background = new Image()
  background.src = 'background.png'
  ctx.globalAlpha = 0.4
  ctx.drawImage(background, 0, 0)
  ctx.globalAlpha = 1
  ctx.fillStyle = "rgba(0,0,0,0.1)"
  ctx.beginPath()
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
}

let start = ""
let pause = -1
let coop = false
let logo = new Image()
logo.src = "sprites/logo.png"

function menu() {

  ctx.fillStyle = "rgba(0,0,0,0.4)"
  ctx.beginPath()
  ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
  ctx.drawImage(logo, CANVAS_WIDTH / 2 - 220, CANVAS_HEIGHT / 2 - 300)
  /*ctx.fillStyle = "red"
  ctx.fillRect(CANVAS_WIDTH/2 - 120 ,CANVAS_HEIGHT/2-100,240,50)
  ctx.fillRect(CANVAS_WIDTH/2 - 120 ,CANVAS_HEIGHT/2,170,50)
  ctx.fillRect(CANVAS_WIDTH/2 - 120 ,CANVAS_HEIGHT/2+100,150,50)
  ctx.fillRect(CANVAS_WIDTH / 2 - 120, CANVAS_HEIGHT / 2 + 200, 270, 50)*/
  ctx.fillStyle = "white"
  ctx.font = "bold 40px verdana "
  ctx.fillText("Adventure", 520, 300)
  ctx.fillText("Endless", 520, CANVAS_HEIGHT / 2 + 40)
  ctx.fillText("CO-OP", 520, CANVAS_HEIGHT / 2 + 140)
  ctx.fillText("How to play", 520, CANVAS_HEIGHT / 2 + 240)
  ctx.strokeStyle = "orangered"
  ctx.strokeText("Adventure", 520, 300)
  ctx.strokeText("Endless", 520, CANVAS_HEIGHT / 2 + 40)
  ctx.strokeText("CO-OP", 520, CANVAS_HEIGHT / 2 + 140)
  ctx.strokeText("How to play", 520, CANVAS_HEIGHT / 2 + 240)








  window.addEventListener('click', function (event) {

    //Adventure mode
    if (event.pageX - canvas.offsetLeft >= CANVAS_WIDTH / 2 - 120 && event.pageX - canvas.offsetLeft <= CANVAS_WIDTH / 2 - 120 + 240 && event.pageY - canvas.offsetTop >= CANVAS_HEIGHT / 2 - 100 && event.pageY - canvas.offsetTop <= CANVAS_HEIGHT / 2 - 100 + 50) {

      start = "adventure"
      document.getElementById("bgm").play()

    }

    //Endless
    if (event.pageX - canvas.offsetLeft >= CANVAS_WIDTH / 2 - 120 && event.pageX - canvas.offsetLeft <= CANVAS_WIDTH / 2 - 120 + 170 && event.pageY - canvas.offsetTop >= CANVAS_HEIGHT / 2 && event.pageY - canvas.offsetTop <= CANVAS_HEIGHT / 2 + 50) {

      start = "endless"
      document.getElementById("bgm").play()

    }

    //COOP
    if (event.pageX - canvas.offsetLeft >= CANVAS_WIDTH / 2 - 120 && event.pageX - canvas.offsetLeft <= CANVAS_WIDTH / 2 - 120 + 150 && event.pageY - canvas.offsetTop >= CANVAS_HEIGHT / 2 + 100 && event.pageY - canvas.offsetTop <= CANVAS_HEIGHT / 2 + 150) {

      start = "adventure"
      coop = true
      player1.life = 4
      //let player2 = new Player2(600, CANVAS_HEIGHT - 36, 30, 70)
      player2.x = 830
      player2.y = CANVAS_HEIGHT - 36
      document.getElementById("bgm").play()

    }

    //How to play
    if (event.pageX - canvas.offsetLeft >= CANVAS_WIDTH / 2 - 120 && event.pageX - canvas.offsetLeft <= CANVAS_WIDTH / 2 - 120 + 270 && event.pageY - canvas.offsetTop >= CANVAS_HEIGHT / 2 + 200 && event.pageY - canvas.offsetTop <= CANVAS_HEIGHT / 2 + 250) {

      start = "how"
      //document.getElementById("bgm").play()
    }
  });
}

function Pause(event) {

  //Shooting 
  if (event.keyCode == 13) {
    pause = -pause
  }

}


function Animate() {

  loadBackground()

  if (start == "") {
    menu()

  }

  if (start == "how") {
    ctx.fillStyle = "rgba(0,0,0,0.4)"
    ctx.beginPath()
    ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)

    ctx.fillStyle = "white"
    ctx.font = "bold 30px verdana "
    ctx.fillText("Moving:", 120, 100)
    ctx.fillText("Shooting:", 120, 220)
    ctx.fillText("Tips:", 120, 340)
    ctx.font = "bold 20px verdana "
    ctx.fillText("Player 1 moves with the arrow keys while player 2 moves with A and D", 120, 150)
    ctx.fillText("Player 1 shoots with the uparrow while player 2 shoots with W", 120, 270)
    ctx.fillText("The lower you destroy the balls the more points you get", 120, 390)

    //Going back to the menu
    ctx.font = "bold 40px verdana "
    ctx.fillText("Back", 120, 500)
    ctx.strokeStyle = "orangered"
    ctx.strokeText("Back", 120, 500)


    window.addEventListener('click', function (event) {

      //Button
      if (event.pageX - canvas.offsetLeft >= 120 && event.pageX - canvas.offsetLeft <= 120 + 120 && event.pageY - canvas.offsetTop >= 460 && event.pageY - canvas.offsetTop <= 510) {

        start = ""


      }
    })
  }

  //Adventure mode
  if (start == "adventure") {

    window.addEventListener('keydown', Pause);


    if (player1.life > 0) {
      //Game isnt paused
      if (pause < 0) {


        window.addEventListener('keydown', KeyDown);
        window.addEventListener('keyup', KeyUp);

        player1.update()
        player1.draw()

        if (coop) {
          player2.update()
          player2.draw()
        }


        Adventure()

        //ctx.fillStyle = "rgba(100,150,0,0.4)"
        //ctx.beginPath()
        //ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)

        for (let i = 0; i < balls.length; ++i) {
          balls[i].update()
        }


        for (let i = 0; i < balls.length; ++i) {
          balls[i].draw()
        }



        for (let i = 0; i < shoots.length; ++i) {
          shoots[i].update()
          if (coop) {
            shootsP2[i].update()
          }
        }

        for (let i = 0; i < shoots.length; ++i) {
          shoots[i].draw()

          if (coop) {
            shootsP2[i].draw()
          }
        }


        checkCollision()
        playerCollision()
        if (coop) {
          player2Collision()
        }
      }

      //When game is paused
      if (pause > 0) {

        window.removeEventListener('keydown', KeyDown);
        window.removeEventListener('keyup', KeyUp);

        player1.draw()

        if (coop) {
          player2.draw()
        }


        for (let i = 0; i < balls.length; ++i) {
          balls[i].draw()
        }

        for (let i = 0; i < shoots.length; ++i) {
          shoots[i].draw()

          if (coop) {
            shootsP2[i].draw()
          }
        }

        ctx.fillStyle = "rgba(0,0,0,0.4)"
        ctx.beginPath()
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        ctx.fillStyle = "white"
        ctx.font = "bold 40px verdana"
        ctx.fillText("PAUSE", 575, 300)
        ctx.font = "bold 20px verdana"
        ctx.fillText("Current score: " + player1.score, 550, 400)
      }


    }

    else {
      ctx.fillStyle = "rgba(0,0,0,0.4)"
      ctx.beginPath()
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
      ctx.fillStyle = "red"
      ctx.font = "bold 40px verdana"
      ctx.fillText("GAME OVER", 520, 300)
      ctx.font = "bold 20px verdana"
      ctx.fillText("Final score: " + player1.score, 550, 400)
    }
  }

  //Endless mode
  if (start == "endless") {
    window.addEventListener('keydown', Pause);
    if (player1.life > 0) {
      if (pause < 0) {

        window.addEventListener('keydown', KeyDown);
        window.addEventListener('keyup', KeyUp);

        player1.update()
        player1.draw()

        Endless()


        //ctx.fillStyle = "rgba(100,150,0,0.4)"
        //ctx.beginPath()
        //ctx.fillRect(0,0,CANVAS_WIDTH,CANVAS_HEIGHT)

        for (let i = 0; i < balls.length; ++i) {
          balls[i].update()
        }


        for (let i = 0; i < balls.length; ++i) {
          balls[i].draw()
        }



        for (let i = 0; i < shoots.length; ++i) {
          shoots[i].update()
        }

        for (let i = 0; i < shoots.length; ++i) {
          shoots[i].draw()
        }


        checkCollision()
        playerCollision()
      }
      //When game is paused
      if (pause > 0) {

        window.removeEventListener('keydown', KeyDown);
        window.removeEventListener('keyup', KeyUp);

        player1.draw()

        for (let i = 0; i < balls.length; ++i) {
          balls[i].draw()
        }

        for (let i = 0; i < shoots.length; ++i) {
          shoots[i].draw()
        }

        ctx.fillStyle = "rgba(0,0,0,0.4)"
        ctx.beginPath()
        ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
        ctx.fillStyle = "white"
        ctx.font = "bold 40px verdana"
        ctx.fillText("PAUSE", 575, 300)
        ctx.font = "bold 20px verdana"
        ctx.fillText("Current score: " + player1.score, 550, 400)
      }

    }


    else {
      ctx.fillStyle = "rgba(0,0,0,0.4)"
      ctx.beginPath()
      ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT)
      ctx.fillStyle = "red"
      ctx.font = "bold 40px verdana"
      ctx.fillText("GAME OVER", 520, 300)
      ctx.font = "bold 20px verdana"
      ctx.fillText("Final score: " + player1.score, 550, 400)
    }
  }


  window.requestAnimationFrame(Animate);


}

window.onload = function () {

  canvas = document.getElementById("myCanvas");
  ctx = canvas.getContext("2d");


  //document.getElementById("bgm").play()
  document.getElementById("bgm").volume = 0.1
  document.getElementById("laser").volume = 0.05
  document.getElementById("voice").volume = 0.05
  document.getElementById("damage").volume = 0.05
  document.getElementById("voiceP2").volume = 0.05
  document.getElementById("damageP2").volume = 0.05
  document.getElementById("complete").volume = 0.1
  document.getElementById("laser").load()
  document.getElementById("voice").load()
  document.getElementById("damage").load()
  document.getElementById("voiceP2").load()
  document.getElementById("damageP2").load()

  canvas.width = 1280;
  canvas.height = 720;

  Animate()
}
