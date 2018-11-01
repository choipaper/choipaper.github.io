let canvas = document.getElementById("canvas"); //set canvas as global variable
let ctx = canvas.getContext("2d");
const height = canvas.height;
const width = canvas.width;
const r = 50;  //radius of the obj
let ogX = width/2; //original value of X
let ogY = height/2; //original value of Y

//buttons
let resetB = document.getElementById("reset");
let upB = document.getElementById("up");
let downB = document.getElementById("down");
let rightB = document.getElementById("right");
let leftB = document.getElementById("left");
resetB.onclick = reset;
upB.onclick = move;
downB.onclick = move;
rightB.onclick = move;
leftB.onclick = move;

//draw object
function drawObject(x, y)
{
    ogX = ogX + x;
    ogY = ogY + y;
    ctx.beginPath();
    ctx.fillStyle = "yellow";
    ctx.beginPath();
    ctx.arc(ogX,ogY,r,Math.PI/4,7*Math.PI/4);
    ctx.lineTo(ogX,ogY);
    ctx.closePath();
    ctx.stroke();
    ctx.fill();
    ctx.beginPath();
    ctx.arc(ogX,ogY-30,r/8,0,2*Math.PI);
    ctx.fillStyle="black";
    ctx.fill();
    
}

//clear the canvas and centered the object
function reset()
{
    ctx.clearRect(0,0,width,height);
    ogX = width/2;
    ogY = height/2;
    drawObject(0, 0);
    
}

function direction()
{
    if(this.value == "u")
    {
        move("u");
    }
}
//move the object
function move()
{
    
    if(this.value == "u"){
        // if the obj reaches the edge of canvas
        if(ogY == r )
        {
            drawObject(0,0); // not moving
        }
        else
        {
            ctx.clearRect(0,0,width,height);
            drawObject(0,-10); // move up by 10px   
        }
    }
    else if(this.value == "d")
    {
        if(ogY == height-r )
        {
            drawObject(0,0); // not moving
        }
        else
        {
            ctx.clearRect(0,0,width,height);
            drawObject(0,10); // move down by 10px   
        }   
    }
    else if(this.value == "r")
    {
        if(ogX == width-r )
        {
            drawObject(0,0); // not moving
        }
        else
        {
            ctx.clearRect(0,0,width,height);
            drawObject(10,0); // move right by 10px   
        }   
    }
    else //if(this.value == "l")
    {
        if(ogX == r )
        {
            drawObject(0,0); // not moving
        }
        else
        {
            ctx.clearRect(0,0,width,height);
            drawObject(-10,0); // move left by 10px   
        }   
    }
    
}
