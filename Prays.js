
function Pray1(){

     this.x = Math.round(Math.random() * (myGameArea.canvas.width - 20) / 20);
     this.y = Math.round(Math.random() * (myGameArea.canvas.height - 20) / 20);
     var r = 7;
     var changer = false;

     this.draw = function() {
         incrementAngle();
         ctx.save();
         ctx.lineWidth = 1;
         ctx.translate(this.x*20+10,this.y*20+10);
         ctx.rotate(convertToRadians(-angle));
         <!-- set the fill style -->
         ctx.fillStyle = "black";
         ctx.fillRect(-10,-10,20,20);
         ctx.strokeRect(-10,-10,20,20);
         ctx.restore();

         if(r<12&&!changer)changer = false;
         if(r>12)changer = true;
         if(r<7)changer = false;
         if(changer)r--;
         if(!changer)r++;

         ctx.beginPath();
         ctx.fillStyle = "white";
         ctx.arc(this.x*20+10, this.y*20+10, r, 0, Math.PI*2, false);
         ctx.fill();

         ctx.beginPath();
         ctx.fillStyle = getRandomColor();
         ctx.arc(this.x*20+10, this.y*20+10, 3, 0, Math.PI*2, false);
         ctx.fill();

         incrementAngle();
         ctx.save();
         ctx.lineWidth = 1;
         ctx.translate(this.x*20+10,this.y*20+10);
         ctx.rotate(convertToRadians(angle));
         ctx.strokeRect(-10,-10,20,20);
         ctx.restore();
     }
 }

function Pray2(){

     this.x = Math.round(Math.random() * (myGameArea.canvas.width - 20) / 20);
     this.y = Math.round(Math.random() * (myGameArea.canvas.height - 20) / 20);

     this.draw = function() {
         ctx.fillStyle = "black";
         ctx.fillRect(this.x*20, this.y*20, 20, 20);

         ctx.beginPath();
         ctx.fillStyle = "white";
         ctx.arc(this.x*20+10, this.y*20+10, 10, 0, Math.PI*2, false);
         ctx.fill();

         ctx.save();
         ctx.lineWidth = 1;
         ctx.translate(this.x*20+10,this.y*20+10);
         ctx.rotate(-convertToRadians(angle));
         ctx.strokeRect(-6,-6,12,12);
         ctx.restore();

         ctx.save();
         ctx.lineWidth = 0.5;
         ctx.translate(this.x*20+10,this.y*20+10);
         ctx.rotate(-convertToRadians(angle));
         ctx.strokeRect(-1,-1,2,2
         );
         ctx.restore();

         ctx.save();
         ctx.lineWidth = 0.5;
         ctx.translate(this.x*20+10,this.y*20+10);
         ctx.rotate(convertToRadians(angle));
         ctx.strokeRect(-8,-8,16,16);
         ctx.restore();

         ctx.save();
         ctx.lineWidth = 0.5;
         ctx.translate(this.x*20+10,this.y*20+10);
         ctx.rotate(-convertToRadians(angle));
         ctx.strokeRect(-8,-8,16,16);
         ctx.restore();

         incrementAngle();
         ctx.save();
         ctx.lineWidth = 1;
         ctx.translate(this.x*20+10,this.y*20+10);
         ctx.rotate(convertToRadians(angle));
         ctx.strokeRect(-10,-10,20,20);
         ctx.restore();
     }
 }

function Pray3(){

    this.x = Math.round(Math.random() * (myGameArea.canvas.width - 20) / 20);
    this.y = Math.round(Math.random() * (myGameArea.canvas.height - 20) / 20);
    var r = 12;
    var changer = false;

    this.draw = function() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x*20, this.y*20, 20, 20);

        ctx.beginPath();
        ctx.fillStyle = getRandomColor();
        ctx.arc(this.x*20+10, this.y*20+10, r/5, 0, Math.PI*2, false);
        ctx.fill();

        if(r<25&&!changer)changer = false;
                     if(r>25)changer = true;
                     if(r<12)changer = false;
                     if(changer)r--;
                     if(!changer)r++;

        ctx.save();
        ctx.lineWidth = 1;
        ctx.translate(this.x*20+10,this.y*20+10);
        ctx.rotate(-convertToRadians(angle));
        <!-- set the fill style -->
        //ctx.strokeStyle = "blue";
        //ctx.fillRect(-25,-25,20,50);
        ctx.strokeRect(-r/2,-r/2,r,r);
        ctx.restore();

        //ctx.save();
        //ctx.lineWidth = 0.5;
        //ctx.translate(this.x*20+10,this.y*20+10);
        //ctx.rotate(-convertToRadians(angle));
        //<!-- set the fill style -->
        //ctx.fillStyle = getRandomColor();
        //ctx.fillRect(-25,-25,20,50);
        //ctx.strokeRect(-1,-1,2,2);
        //ctx.restore();

        ctx.save();
        ctx.lineWidth = 0.5;
        ctx.translate(this.x*20+10,this.y*20+10);
        ctx.rotate(convertToRadians(angle));
        <!-- set the fill style -->
        //ctx.fillStyle = getRandomColor();
        //ctx.fillRect(-25,-25,20,50);
        ctx.strokeRect(-8,-8,16,16);
        ctx.restore();

        ctx.save();
        ctx.lineWidth = 0.5;
        ctx.translate(this.x*20+10,this.y*20+10);
        ctx.rotate(-convertToRadians(angle));
        ctx.strokeRect(-8,-8,16,16);
        ctx.restore();

        incrementAngle();
        ctx.save();
        ctx.lineWidth = 1;
        ctx.translate(this.x*20+10,this.y*20+10);
        ctx.rotate(convertToRadians(angle));
        ctx.strokeRect(-10,-10,20,20);
        ctx.restore();
    }
}
function Pray4(){
    this.x = Math.round(Math.random() * (myGameArea.canvas.width - 20) / 20);
    this.y = Math.round(Math.random() * (myGameArea.canvas.height - 20) / 20);

    this.draw = function() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x*20, this.y*20, 20, 20);

        ctx.beginPath();
        ctx.fillStyle = getRandomColor();
        ctx.arc(this.x*20+10, this.y*20+10, 3, 0, Math.PI*2, false);
        ctx.fill();

        ctx.save();
        ctx.lineWidth = 1;
        ctx.translate(this.x*20+10,this.y*20+10);
        ctx.rotate(-convertToRadians(angle));
        ctx.strokeRect(-6,-6,12,12);
        ctx.restore();

        ctx.save();
        ctx.lineWidth = 0.5;
        ctx.translate(this.x*20+10,this.y*20+10);
        ctx.rotate(-convertToRadians(angle));
        ctx.strokeRect(-1,-1,2,2);
        ctx.restore();

        ctx.save();
        ctx.lineWidth = 0.5;
        ctx.translate(this.x*20+10,this.y*20+10);
        ctx.rotate(convertToRadians(angle));
        ctx.strokeRect(-8,-8,20,18);
        ctx.restore();

        ctx.save();
        ctx.lineWidth = 0.5;
        ctx.translate(this.x*20+10,this.y*20+10);
        ctx.rotate(-convertToRadians(angle));
        ctx.strokeRect(-8,-8,18,20);
        ctx.restore();

        incrementAngle();
        ctx.save();
        ctx.lineWidth = 1;
        ctx.translate(this.x*20+10,this.y*20+10);
        ctx.rotate(convertToRadians(angle));
        ctx.strokeRect(-10,-10,17,20);
        ctx.restore();
    }
}

function Pray5(){
    this.x = Math.round(Math.random() * (myGameArea.canvas.width - 20) / 20);
    this.y = Math.round(Math.random() * (myGameArea.canvas.height - 20) / 20);
    var r = 7;
     var changer = false;
    this.draw = function() {
        ctx.fillStyle = "white";
        ctx.fillRect(this.x*20, this.y*20, 20, 20);

        ctx.beginPath();
        ctx.fillStyle = getRandomColor();
        ctx.arc(this.x*20+10, this.y*20+10, 3, 0, Math.PI*2, false);
        ctx.fill();

        ctx.save();
        ctx.lineWidth = 1;
        ctx.translate(this.x*20+10,this.y*20+10);
        ctx.rotate(-convertToRadians(angle));
        ctx.strokeRect(-6,-6,12,12);
        ctx.restore();



        ctx.save();
        ctx.lineWidth = 0.5;
        ctx.translate(this.x*20+10,this.y*20+10);
        ctx.rotate(convertToRadians(angle));
        ctx.strokeRect(-8,-8,20,18);
        ctx.restore();

        ctx.save();
        ctx.lineWidth = 0.5;
        ctx.translate(this.x*20+10,this.y*20+10);
        ctx.rotate(-convertToRadians(angle));
        ctx.strokeRect(-8,-8,18,20);
        ctx.restore();

         if(r<12&&!changer)changer = false;
         if(r>12)changer = true;
         if(r<7)changer = false;
         if(changer)r--;
         if(!changer)r++;

        incrementAngle();
        ctx.save();
        ctx.lineWidth = 0.5;
        ctx.translate(this.x*20+10,this.y*20+10);
        ctx.rotate(convertToRadians(angle));
        ctx.fillStyle = getRandomColor();
        ctx.fillRect(-2*r,-5,-2,10);
        ctx.strokeRect(-2*r,-5,35,10);
        ctx.fillStroke = "green";
        ctx.restore();

        ctx.save();
        ctx.lineWidth = 0.5;
        ctx.translate(this.x*20+10,this.y*20+10);
        ctx.rotate(convertToRadians(-angle));
        ctx.fillStyle = getRandomColor();
        ctx.fillStroke = "blue";
        ctx.fillRect(-2*r,-5,-2,10);
        ctx.strokeRect(-2*r,-5,35,10);

        ctx.restore();
    }
}

function Pray6(){

        this.x = Math.round(Math.random() * (myGameArea.canvas.width - 20) / 20);
        this.y = Math.round(Math.random() * (myGameArea.canvas.height - 20) / 20);

        this.draw = function() {
            ctx.fillStyle = "white";
            ctx.fillRect(this.x*20, this.y*20, 20, 20);

            ctx.beginPath();
            ctx.fillStyle = getRandomColor();
            ctx.arc(this.x*20+10, this.y*20+10, 3, 0, Math.PI*2, false);
            ctx.fill();

            ctx.save();
            ctx.lineWidth = 1;
            ctx.translate(this.x*20+10,this.y*20+10);
            ctx.rotate(-convertToRadians(angle));

            ctx.fillStyle = getRandomColor();
            ctx.fillRect(-14,-9,2,20);

            ctx.strokeRect(-6,-6,12,12);
            ctx.restore();

            ctx.save();
            ctx.lineWidth = 0.5;
            ctx.translate(this.x*20+10,this.y*20+10);
            ctx.rotate(-convertToRadians(angle));
            ctx.strokeRect(-1,-1,2,2);
            ctx.restore();

            ctx.save();
            ctx.lineWidth = 0.5;
            ctx.translate(this.x*20+10,this.y*20+10);
            ctx.rotate(convertToRadians(angle));
            ctx.strokeRect(-8,-8,20,18);
            ctx.restore();

            ctx.save();
            ctx.lineWidth = 0.5;
            ctx.translate(this.x*20+10,this.y*20+10);
            ctx.rotate(-convertToRadians(angle));
            ctx.strokeRect(-8,-8,18,20);
            ctx.restore();

            incrementAngle();
            ctx.save();
            ctx.lineWidth = 1;
            ctx.translate(this.x*20+10,this.y*20+10);
            ctx.rotate(convertToRadians(angle));
            ctx.strokeRect(-10,-10,17,30);
            ctx.restore();
        }

}