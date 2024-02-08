 var canvas=document.querySelector("canvas");
 canvas.height=window.innerHeight;
 canvas.width=window.innerWidth;
 var c=canvas.getContext('2d');
//  c.fillStyle="rgba(32,233,12,0.5)"
//  c.fillRect(200,300,200,200);
//  c.fillStyle="rgba(225,33,12,0.5)"
//  c.fillRect(600,500,200,200);
//  //line
// //  c.strokeStyle="red";
// c.beginPath();
// c.moveTo(1000,100);
// c.lineTo(600,600);
// c.lineTo(299,298)
// c.stroke();
//circle
// var x=Math.random()*innerWidth;

// var y=Math.random()*innerHeight;
// var rad=Math.random()*100;
// var r=Math.random()*255;
// var g=Math.random()*255;
// var b=Math.random()*255;
// c.strokeStyle=`rgb({r,g,b})`;
// c.arc(x,y,rad,0,Math.PI*2,true);
// c.stroke();

//   var x=Math.random()*innerWidth;

//   var y=Math.random()*innerHeight;
var mouse ={
    x:undefined,
    y:undefined
}
window.addEventListener("mousemove",function(event){
    mouse.x=event.x;
    mouse.y=event.y;
        console.log(mouse);
})
window.addEventListener('resize',function(){
    canvas.height= window.innerHeight;
    canvas.width= window.innerWidth;
    init();
})
var maxRadius=40;
var minRadius=2;
var colorArray=[
    "yellow","green","pink","orange","red","violet"
]

function Circle(x,y,dx,dy,radius){
    this.x=x;
    this.y=y;
    this.dx=dx;
    this.dy=dy;
    this.radius=radius;
    this.minRadius=minRadius  ;
    this.color=colorArray[Math.floor(Math.random()*colorArray.length)];
    this.draw=function(){
    
      c.beginPath();
      c.arc(this.x,this.y,this.radius,0,Math.PI*2,false);
      c.strokeStyle="orange";
      c.stroke();
      c.fillStyle=this.color;
      c.fill();
    }
    this.update=function(){
        if(this.x+this.radius>innerWidth||
            this.x-this.radius<0){
        this.dx=-this.dx;
     }
     if(this.y+this.radius>innerHeight||
        this.y-this.radius<0){
        this.dy=-this.dy;
     }
         this.draw();
         
         this.x  += this.dx;
         this.y  += this.dy;
         if(mouse.x - this.x <50 && mouse.x-this.x>-50&& mouse.y - this.y <50 && mouse.y-this.y>-50){
          if(this.radius<maxRadius){
            this.radius+=2;
          }
         }
         else if(this.radius>this.minRadius){
            this.radius-=1;
         }
          
    }
   
}
var circle=new Circle(200,200,1,1,30);
var circleArray=[];
function init(){
      circleArray=[];
    for(var i=0; i<800; i++){
     var x=Math.random()*innerWidth;
     var dx=(Math.random()-0.5)*2;
    var y=Math.random()*innerHeight;
    var dy=(Math.random()-0.5)*2;
    var radius=40;
    circleArray.push(new Circle(x,y,dx,dy,radius))
    }
}

console.log(circleArray);



// var x=Math.random()*innerWidth;
// var dx=(Math.random()-0.5)*10;
// var y=Math.random()*innerHeight;
// var dy=(Math.random()-0.5)*10;
// var radius=40;
function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0,0,innerWidth,innerHeight);
    for(var i=0; i<circleArray.length; i++){
        circleArray[i].update();
       
    }
    circle.update();
    // c.beginPath();
    // c.strokeStyle= "red";
    // c.arc(x,y,radius,0,Math.PI*2,true);
    //  c.stroke();
    //  if(x+radius>innerWidth||x-radius<0){
    //     dx=-dx;
    //  }
    //  if(y+radius>innerHeight||y-radius<0){
    //     dy=-dy;
    //  }

    //  x+=dx;
    //  y+=dy;
    
}
animate();
init();

