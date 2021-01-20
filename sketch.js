var h,m,s
var hAngle, mAngle, sAngle

function setup() {
  createCanvas(400,400);
 angleMode(DEGREES)
}

function draw() {
  background(0);  
  translate(200, 200)
  h=hour()
  m=minute()
  s=second()
sAngle=map(s, 0, 60, 0, 360)
mAngle=map(m, 0, 60, 0, 360)
hAngle=map(h, 0, h%12, 0, 360)
push ()
rotate(sAngle)
stroke("white")
strokeWeight(5)
line (0, 0, 100, 0)
pop ()

push ()
rotate(mAngle)
strokeWeight(5)
stroke("blue")
line(0, 0, 75, 0)
pop ()

push ()
rotate(hAngle)
strokeWeight(5)
stroke("red")
line(0, 0, 50, 0)
pop ()
noFill()
strokeWeight(5)
stroke("white")
arc(0, 0, 300, 300, 0, sAngle)

strokeWeight(5)
stroke("blue")
arc(0, 0, 275, 275, 0, mAngle)

strokeWeight(5)
stroke("red")
arc(0, 0, 250, 250, 0, hAngle)

}