function setup(){
    createCanvas(800,600);
    var x = 50;
    var y = 50;
    fill("red")
    strokeWeight(0);
    for(var i = 1; i<5; i++){
        for(var j = i; j>0; j--){
            rect(x, y, 25, 25);
            x = x + 26;
        }
        x = 50;
        y = y + 26;
    }
}